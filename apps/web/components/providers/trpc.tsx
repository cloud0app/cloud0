"use client";

import { createQueryClient } from "@/lib/api/trpc/query-client";
import { api } from "@/lib/api/trpc/react";
import { getBaseUrl } from "@cloud0/utils";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchStreamLink, loggerLink } from "@trpc/client";
import { useState } from "react";
import { readSSROnlySecret } from "ssr-only-secrets";
import SuperJSON from "superjson";

let clientQueryClientSingleton: QueryClient | undefined = undefined;

const getQueryClient = () => {
   if (typeof window === "undefined") {
      return createQueryClient();
   }
   clientQueryClientSingleton ??= createQueryClient();

   return clientQueryClientSingleton;
};

export function TRPCReactProvider(props: { ssrOnlySecret: string; children: React.ReactNode }) {
   const queryClient = getQueryClient();
   const [trpcClient] = useState(() =>
      api.createClient({
         links: [
            loggerLink({
               enabled: (op) =>
                  process.env.NODE_ENV === "development" ||
                  (op.direction === "down" && op.result instanceof Error),
            }),
            httpBatchStreamLink({
               transformer: SuperJSON,
               url: getBaseUrl() + "/api/trpc",
               headers: async () => {
                  const headers = new Headers();
                  const secret = props.ssrOnlySecret;
                  const value = await readSSROnlySecret(secret, "SECRET_CLIENT_COOKIE_VAR");
                  headers.set("x-trpc-source", "nextjs-react");
                  if (value) {
                     headers.set("cookie", value);
                  }
                  return headers;
               },
            }),
         ],
      }),
   );
   return (
      <QueryClientProvider client={queryClient}>
         <api.Provider client={trpcClient} queryClient={queryClient}>
            {props.children}
         </api.Provider>
      </QueryClientProvider>
   );
}
