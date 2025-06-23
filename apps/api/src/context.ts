import { db } from "@cloud0/database";
import { TRPCError } from "@trpc/server";
import { auth } from "./auth";
import { t } from "./trpc";

export const createTRPCContext = async (opts: { headers: Headers }) => {
   const session = await auth.api.getSession({
      headers: opts?.headers,
   });
   const user = session?.user;
   return {
      db,
      user,
      ...opts,
   };
};
export const publicProcedure = t.procedure;
export const protectedProcedure = t.procedure.use(async ({ ctx, next }) => {
   if (!ctx?.user) {
      throw new TRPCError({ code: "UNAUTHORIZED" });
   }
   return next({
      ctx: {
         ...ctx,
         user: ctx.user,
      },
   });
});
