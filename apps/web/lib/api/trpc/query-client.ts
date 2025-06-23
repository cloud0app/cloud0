import { AppRouter } from "@cloud0/api";
import { defaultShouldDehydrateQuery, QueryClient } from "@tanstack/react-query";
import { TRPCClientError } from "@trpc/client";
import { toast } from "sonner";
import SuperJSON from "superjson";

export const createQueryClient = () =>
   new QueryClient({
      defaultOptions: {
         queries: {
            staleTime: 30 * 1000,
         },
         dehydrate: {
            serializeData: SuperJSON.serialize,
            shouldDehydrateQuery: (query) =>
               defaultShouldDehydrateQuery(query) || query.state.status === "pending",
         },
         hydrate: {
            deserializeData: SuperJSON.deserialize,
         },
         mutations: {
            onError(error, variables, context) {
               const code =
                  error instanceof TRPCClientError
                     ? (error as TRPCClientError<AppRouter>).data?.code
                     : null;
               if (code === "SERVICE_UNAVAILABLE") {
                  window.location.href = `/dashboard/onboarding?callback=${window.location.pathname}`;
               }
               const message =
                  error instanceof TRPCClientError
                     ? (error as TRPCClientError<AppRouter>).data?.message
                     : null;
               toast.error(message ?? "An error occurred");
            },
         },
      },
   });
