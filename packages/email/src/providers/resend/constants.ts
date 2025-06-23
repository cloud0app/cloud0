import { application } from "@cloud0/utils";

const resendDomain = process.env.RESEND_DOMAIN!
export const FROM_EMAILS_VARIANT = {
   primary: `${application.name} <system@${resendDomain}>`,
   notifications: `${application.name} <notifications@${resendDomain}>`,
   marketing: `${application.contacts[0].name} from ${application.name} <${application.contacts[0].username}@${resendDomain}>`,
};
