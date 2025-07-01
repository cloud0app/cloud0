import { render } from "@react-email/components";
import nodemailer from "nodemailer";
import { ReactElement } from "react";
import { EmailOptions } from "src/types";
import { FROM_EMAILS_VARIANT } from "./resend/constants";

export const sendViaNodeMailer = async (opts: EmailOptions) => {
   const transporter = nodemailer.createTransport({
      // @ts-ignore (Fix this)
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      auth: {
         user: process.env.SMTP_USER,
         pass: process.env.SMTP_PASSWORD,
      },
      secure: false,
      tls: {
         rejectUnauthorized: false,
      },
   });

   const { to, from = "primary", subject, text, react, attachments } = opts;
   const html = await render(react as ReactElement);
   return transporter.sendMail({
      from: FROM_EMAILS_VARIANT[from],
      to,
      subject,
      text,
      html,
      attachments,
   });
};
