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
   socials: [
      {
         name: "Github",
         link: "https://github.com/cloud0app/cloud0",
      },
      {
         name: "Discord",
         link: "https://discord.gg/6wRkt98F",
      },
      {
         name: "X",
         link: "https://x.com/cloud0dotapp?s=21",
      },
   ],
   values: {
      peasyWebsiteID: "01jygktwyb2g77n546vhb50z24",
   },
};
