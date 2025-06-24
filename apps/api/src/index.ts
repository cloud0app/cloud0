import type { inferRouterInputs, inferRouterOutputs } from "@trpc/server";
import { createTRPCContext } from "./context";
import { authRouter } from "./routers/auth";
import { waitlistRouter } from "./routers/waitlist";
import { createCallerFactory, createTRPCRouter } from "./trpc";

export const appRouter = createTRPCRouter({
   auth: authRouter,
   waitlist: waitlistRouter,
});
export type AppRouter = typeof appRouter;
export type RouterInput = inferRouterInputs<AppRouter>;
export type RouterOutput = inferRouterOutputs<AppRouter>;

export const createCaller = createCallerFactory(appRouter);

export * from "./context";

export { createTRPCContext, createTRPCRouter };
