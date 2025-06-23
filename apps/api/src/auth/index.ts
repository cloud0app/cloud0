import { db } from "@cloud0/database";
import { MailService } from "@cloud0/email";
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { nextCookies } from "better-auth/next-js";
import { admin } from "better-auth/plugins";
import ms from "ms";

const mailService = new MailService();

export const auth = betterAuth({
   database: prismaAdapter(db, {
      provider: "postgresql",
   }),
   emailAndPassword: {
      enabled: true,
      autoSignIn: true,
      minPasswordLength: 6,
      resetPasswordTokenExpiresIn: ms("1h"),
      sendResetPassword: (props) => mailService.sendResetPasswordEmail(props),
   },
   emailVerification: {
      sendOnSignUp: true,
      autoSignInAfterVerification: true,
      sendVerificationEmail: (props) => mailService.sendVerificationEmail(props),
   },
   session: {
      cookieCache: {
         enabled: true,
         maxAge: ms("30min"),
      },
   },
   plugins: [
      admin({
         defaultRole: "user",
         defaultBanReason: "Spamming",
         defaultBanExpiresIn: ms("1d"),
      }),
      nextCookies(),
   ],
});
