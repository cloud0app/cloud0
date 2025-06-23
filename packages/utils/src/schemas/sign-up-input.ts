import { z } from "zod";

export const signUpInputSchema = z.object({
   name: z.string(),
});
