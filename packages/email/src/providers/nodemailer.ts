import { render } from "@react-email/components";
import nodemailer from "nodemailer";
import { ReactElement } from "react";
import { CreateEmailOptions } from "resend";
import { FROM_EMAILS_VARIANT } from "./resend/constants";

// Send email using NodeMailer (Recommended for local development)
export const sendViaNodeMailer = async ({
   to,
   from = "primary",
   subject,
   text,
   react,
}: Pick<CreateEmailOptions, "subject" | "text" | "react"> & {
   to: string;
   from?: keyof typeof FROM_EMAILS_VARIANT;
}) => {
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

   const html = await render(react as ReactElement);
   return transporter.sendMail({
      from: FROM_EMAILS_VARIANT[from],
      to,
      subject,
      text,
      html,
   });
};
