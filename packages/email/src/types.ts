import { CreateEmailOptions } from "resend";
import { FROM_EMAILS_VARIANT } from "./providers/resend/constants";

export interface EmailOptions extends Omit<CreateEmailOptions, "to" | "from" | "html"> {
   to: string;
   from?: keyof typeof FROM_EMAILS_VARIANT;
}
