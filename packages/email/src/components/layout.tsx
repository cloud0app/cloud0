import { application } from "@cloud0/utils";
import { Head, Html, Preview, Tailwind } from "@react-email/components";
import { MailBody, MailContainer } from "./index";

export function MailLayout({ children, preview }: { children: React.ReactNode; preview?: string }) {
   const previewText = `${preview} - ${application.name}` || `Email from ${application.name}`;
   return (
      <Html>
         <Head />
         <Preview>{previewText}</Preview>
         <Tailwind>
            <MailBody>
               <MailContainer>{children}</MailContainer>
            </MailBody>
         </Tailwind>
      </Html>
   );
}
