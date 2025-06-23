import { sendEmail } from "@cloud0/email";
import { EmailVerification, ForgotPassword, TestEmail } from "@cloud0/email/templates";
import { application } from "@cloud0/utils";

export class MailService {
   constructor() {}
   async sendVerificationEmail(props: { user: { name: string; email: string }; url: string }) {
      await sendEmail({
         to: props.user.email,
         react: EmailVerification(props),
         subject: `${application.name} - Email verification`,
      });
   }
   async sendResetPasswordEmail(props: { user: { name: string; email: string }; url: string }) {
      await sendEmail({
         to: props.user.email,
         react: ForgotPassword(props),
         subject: `${application.name} - Forgot Password`,
      });
   }
   async sendTestEmail(props: { user: { name: string; email: string } }) {
      await sendEmail({
         to: props.user.email,
         react: TestEmail({ user: props.user}),
         subject: `${application.name} - Test`,
      });
   }
}
