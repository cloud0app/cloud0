import { application } from "@cloud0/utils";
import { MailButton, MailFooterText, MailText, MailTitle } from "../components";
import { MailLayout } from "../components/layout";

export const EmailVerification = ({
   user = {
      name: "John Doe",
      email: "Johndoe@gmail.com",
   },
   url = "https://example.com/verify-email",
}: {
   user: {
      name: string;
      email: string;
   };
   url: string;
}) => (
   <MailLayout preview="Email Verification">
      <MailTitle>Hello {user.name}, Verify Your Email Address</MailTitle>
      <MailText>
         Thank you for signing up with {application.name}! We&apos;re thrilled to have you on board.
      </MailText>
      <MailText>To get started, please verify your email by clicking the link below:</MailText>
      <MailButton href={url}>Verify Email Address</MailButton>
      <MailFooterText>
         If you did not initiate this request, no further action is required, and you can safely
         disregard this email.
      </MailFooterText>
   </MailLayout>
);

export default EmailVerification;
