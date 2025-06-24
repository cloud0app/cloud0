"use client";
import { Button } from "@cloud0/ui";
import { application } from "@cloud0/utils";
import { IconBrandDiscord, IconBrandGithub, IconBrandX } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";
import { Logo } from "../global/logo";
import { ThemeToggle } from "../global/theme-toggle";

const links = application.socials.map((link) => {
   let Icon: React.ElementType = IconBrandGithub;
   switch (link.name) {
      case "Github":
         Icon = IconBrandGithub;
         break;
      case "Discord":
         Icon = IconBrandDiscord;
         break;
      case "X":
         Icon = IconBrandX;
         break;
      default:
         break;
   }
   return {
      name: link.name,
      href: link.link,
      icon: <Icon className="size-5" />,
   };
});

export const WaitlistHeader = () => {
   return (
      <header>
         <nav className="absolute top-0 left-0 z-20 mx-auto mt-2 w-full">
            <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
               <div className="flex w-full justify-between">
                  <Link
                     href="/"
                     aria-label="home"
                     className="flex items-center space-x-2 outline-none"
                  >
                     <Logo />
                  </Link>
                  <div className="flex gap-3 text-muted-foreground">
                     {links.map((link) => (
                        <Button asChild variant={"ghost"} size="icon" key={link.name}>
                           <Link key={link.name} href={link.href}>
                              {link.icon}
                           </Link>
                        </Button>
                     ))}
                     <ThemeToggle />
                  </div>
               </div>
            </div>
         </nav>
      </header>
   );
};
