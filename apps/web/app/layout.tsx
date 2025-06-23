import { Providers } from "@/components/providers";
import "@/styles/globals.css";
import { application } from "@cloud0/utils";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { headers } from "next/headers";
import { Toaster } from "sonner";
import { cloakSSROnlySecret } from "ssr-only-secrets";

const geistSans = Geist({
   variable: "--font-geist-sans",
   subsets: ["latin"],
});
const geistMono = Geist_Mono({
   variable: "--font-geist-mono",
   subsets: ["latin"],
});

export const metadata: Metadata = {
   title: application.name,
   description: application.description,
   icons: [
      {
         rel: "icon",
         url: "/favicon.ico",
      },
   ],
};

export default async function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   const cookie = new Headers(await headers()).get("cookie");
   const encryptedCookie = await cloakSSROnlySecret(cookie ?? "", "SECRET_CLIENT_COOKIE_VAR");
   return (
      <html lang="en" suppressHydrationWarning>
         <body
            className={`${geistSans.variable} ${geistMono.variable} font-[family-name:var(--font-geist-sans)] antialiased`}
         >
            <Toaster position="top-center" richColors />
            <Providers
               ssrOnlySecret={encryptedCookie}
               attribute={"class"}
               defaultTheme="system"
               enableSystem
               disableTransitionOnChange
            >
               {children}
            </Providers>
         </body>
      </html>
   );
}
