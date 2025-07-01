import "server-only";
import { sendViaNodeMailer } from "./providers/nodemailer";
import { sendEmailViaResend } from "./providers/resend";
import { resend } from "./providers/resend/client";
import { EmailOptions } from "./types";

export const sendEmail = async (opts: EmailOptions) => {
   if (resend) {
      return await sendEmailViaResend(opts);
   }

   const smtpConfigured = Boolean(process.env.SMTP_HOST && process.env.SMTP_PORT);

   if (smtpConfigured) {
      return await sendViaNodeMailer(opts);
   }

   console.info(
      "Email sending failed: Neither SMTP nor Resend is configured. Please set up at least one email service to send emails.",
   );
};

export { MailService } from "./services/mail";
