import "server-only";

import { createHydrationHelpers } from "@trpc/react-query/rsc";
import { headers } from "next/headers";
import { cache } from "react";

import { createCaller, createTRPCContext, type AppRouter } from "@cloud0/api";
import { createQueryClient } from "./query-client";

export async function safeHeaders() {
   try {
      const heads = await headers();
      return new Headers(heads);
   } catch (e) {
      return new Headers();
   }
}

const createContext = cache(async () => {
   const heads = await safeHeaders();
   heads.set("x-trpc-source", "rsc");

   return createTRPCContext({
      headers: heads,
   });
});

const getQueryClient = cache(createQueryClient);
const caller = createCaller(createContext);

export const { trpc: api, HydrateClient } = createHydrationHelpers<AppRouter>(
   caller,
   getQueryClient,
);
