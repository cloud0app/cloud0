import { application } from "@cloud0/utils";
import { MailText, MailTitle } from "../components";
import { MailLayout } from "../components/layout";

export const TestEmail = ({
   user = {
      name: "John Doe",
      email: "johndoe@example.com",
   },
}: {
   user: {
      name: string;
      email: string;
   };
}) => (
   <MailLayout preview="Test Email">
      <MailTitle>Hello {user.name}</MailTitle>
      <MailText>This is a test email from {application.name}.</MailText>
   </MailLayout>
);

export default TestEmail;
