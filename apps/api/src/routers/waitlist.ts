import { z } from "zod";
import { publicProcedure } from "../context";
import { createTRPCRouter } from "../trpc";

export const waitlistRouter = createTRPCRouter({
   add: publicProcedure
      .input(
         z.object({
            email: z.string(),
         }),
      )
      .mutation(async ({ ctx, input }) => {
         await ctx.db.waitlist.upsert({
            where: {
               email: input.email,
            },
            create: {
               email: input.email,
            },
            update: {},
         });
         return { success: true };
      }),
   count: publicProcedure.query(async ({ ctx }) => {
      const count = await ctx.db.waitlist.count();
      return { success: true, data: { count } };
   }),
});
