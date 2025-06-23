export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || "Cloud0";
export const pages = {
   auth: {
      signIn: "/auth/sign-in",
      signUp: "/auth/sign-up",
   },
   home: "/",
};

export const application = {
   name: APP_NAME,
   description: "",
   pages,
   domain: process.env.NEXT_PUBLIC_APP_DOMAIN || "cloud0.app",
   contacts: {
      0: {
         name: "IRANZI Thierry",
         username: "iranzithierry",
         email: "iranzithierry12@gmail.com",
      },
      emailsReplyTo: "iranzithierry12@gmail.com",
   },
};
