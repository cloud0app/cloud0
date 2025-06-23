import { Slot, Slottable } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "../lib/utils";

const headingStyles = cva("font-sans text-fg tracking-tight", {
   variants: {
      level: {
         1: "font-semibold text-xl sm:text-2xl",
         2: "font-semibold text-lg sm:text-xl",
         3: "font-semibold text-base sm:text-lg",
         4: "font-semibold text-base",
      },
      tracking: {
         tighter: "tracking-tighter",
         tight: "tracking-tight",
         normal: "tracking-normal",
         wide: "tracking-wide",
         wider: "tracking-wider",
         widest: "tracking-widest",
      },
   },
   defaultVariants: {
      level: 1,
      tracking: "normal",
   },
});

type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> &
   VariantProps<typeof headingStyles> & {
      asChild?: boolean;
      level?: 1 | 2 | 3 | 4;
      tracking?: "tighter" | "tight" | "normal" | "wide" | "wider" | "widest";
      className?: string;
   };

function Heading({
   className,
   asChild = false,
   level = 1,
   tracking = "normal",
   ...props
}: HeadingProps) {
   const Comp = asChild ? Slot : `h${level}`;

   return (
      <Comp className={cn(headingStyles({ level, tracking, className }))} {...props}>
         <Slottable>{props.children}</Slottable>
      </Comp>
   );
}

export { Heading };
export type { HeadingProps };
