import { sendEmail } from "@cloud0/email";
import { EmailVerification, ForgotPassword } from "@cloud0/email/templates";
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
         html: `
         <h1>Test Email</h1>
         <p>Hello ${props.user.name},</p>
         <p>This is a test email from ${application.name}.</p>
         `,
         subject: `${application.name} - Test`,
      });
   }
}
