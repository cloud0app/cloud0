import { application } from "@cloud0/utils";
import { MailButton, MailFooterText, MailText, MailTitle } from "../components";
import { MailLayout } from "../components/layout";

export const ForgotPassword = ({
   user = {
      name: "John Doe",
      email: "johndoe@example.com",
   },
   url = "https://example.com/reset-password",
}: {
   user: {
      name: string;
      email: string;
   };
   url: string;
}) => (
   <MailLayout preview="Password Reset Request">
      <MailTitle>Hello {user.name}, Reset Your Password</MailTitle>
      <MailText>
         We received a request to reset your password for your {application.name} account.
      </MailText>
      <MailText>Click the button below to reset your password.</MailText>
      <MailButton href={url}>Reset Password</MailButton>
      <MailFooterText>
         If you didn&apos;t request a password reset, you can safely ignore this email. Your
         password will not be changed.
      </MailFooterText>
   </MailLayout>
);

export default ForgotPassword;
