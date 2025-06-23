import { application } from "@cloud0/utils";

export const FROM_EMAILS_VARIANT = {
   primary: `${application.name} <system@${application.domain}>`,
   notifications: `${application.name} <notifications@${application.domain}>`,
   marketing: `${application.contacts[0].name} from ${application.name} <steven@${application.domain}>`,
};
