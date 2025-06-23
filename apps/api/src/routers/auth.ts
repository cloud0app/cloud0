import { MailService } from "@cloud0/email";
import { application } from "@cloud0/utils";
import { protectedProcedure, publicProcedure } from "../context";
import { createTRPCRouter } from "../trpc";

export const authRouter = createTRPCRouter({
   me: protectedProcedure.query(async ({ ctx }) => {
      return ctx.user;
   }),
   testEmail: publicProcedure.mutation(async ({ ctx }) => {
      const mailService = new MailService();
      await mailService.sendTestEmail({
         user: {
            name: application.contacts[0].name,
            email: application.contacts[0].email,
         },
      });
      return { success: true };
   }),
});
