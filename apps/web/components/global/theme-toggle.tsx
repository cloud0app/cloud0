"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@cloud0/ui";

export function ThemeToggle() {
   const { setTheme, theme } = useTheme();
   const switchTheme: () => void = () => {
      switch (theme) {
         case "light":
            setTheme("dark");
            break;
         case "dark":
            setTheme("light");
            break;
         default:
            break;
      }
   };
   const toggleTheme = () => {
      //@ts-ignore
      if (!document.startViewTransition) switchTheme();

      //@ts-ignore
      document.startViewTransition(switchTheme);
   };
   return (
      <Button size={"icon"} variant={"ghost"} onClick={toggleTheme}>
         <SunIcon className="size-4 scale-100 rotate-0  transition-all dark:scale-0 dark:-rotate-90 dark:text-gray-300" />
         <MoonIcon className="absolute size-4 scale-0 rotate-90  transition-all dark:scale-100 dark:rotate-0 dark:text-gray-300" />
         <span className="sr-only">Toggle theme</span>
      </Button>
   );
}
