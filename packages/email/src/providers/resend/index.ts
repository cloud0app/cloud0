import { EmailOptions } from "../../types";
import { resend } from "./client";
import { FROM_EMAILS_VARIANT } from "./constants";

export const sendEmailViaResend = async (opts: EmailOptions) => {
   if (!resend) {
      console.info("RESEND_API_KEY is not set in the .env. Skipping sending email.");
      return;
   }

   const { to, from = "primary", bcc, replyTo, subject, text, react } = opts;

   return await resend.emails.send({
      to,
      from: FROM_EMAILS_VARIANT[from],
      bcc,
      subject,
      text,
      react,
      ...(replyTo && {
         replyTo: replyTo,
      }),
   });
};
export const addToAudience = async ({ email, audience }: { email: string; audience: string }) => {
   const createdAudience = await resend?.audiences.create({
      name: audience,
   });
   return createdAudience?.data;
};
