"use client";

import { useTheme } from "next-themes";

import { Button } from "@cloud0/ui";
import { IconMoon, IconSun } from "@tabler/icons-react";

export function ThemeToggle() {
   const { setTheme, theme } = useTheme();
   const switchTheme: () => void = () => {
      setTheme(theme === "dark" ? "light" : "dark");
   };
   const toggleTheme = () => {
      //@ts-ignore
      if (!document.startViewTransition) switchTheme();
      //@ts-ignore
      document.startViewTransition(switchTheme);
   };
   return (
      <Button size={"icon"} variant={"ghost"} onClick={toggleTheme}>
         {theme == "light" ? <IconMoon /> : <IconSun />}
         <span className="sr-only">Toggle theme</span>
      </Button>
   );
}
