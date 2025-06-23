import { MailService } from "@cloud0/email";
import { protectedProcedure, publicProcedure } from "../context";
import { createTRPCRouter } from "../trpc";

export const authRouter = createTRPCRouter({
   me: protectedProcedure.query(async ({ ctx }) => {
      return ctx.user;
   }),
   testEmail: publicProcedure.mutation(async ({ ctx }) => {
      const mailService = new MailService();
      await mailService.sendVerificationEmail({
         user: {
            name: "Troy",
            email: "troy@example.com",
         },
         url: "https://example.com",
      });
   }),
});
