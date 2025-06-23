import { Slot, Slottable } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "../lib/utils";

const buttonVariants = cva(
   "inline-flex items-center cursor-pointer justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
   {
      variants: {
         variant: {
            default:
               "bg-linear-to-b **:[text-shadow:0_1px_0_var(--color-primary)] border-primary from-primary/80 to-primary dark:from-primary dark:to-primary/80 text-primary-foreground dark:border-primary border text-sm shadow-md shadow-zinc-950/30 ring ring-inset ring-white/20 transition-[filter] duration-200 hover:brightness-125 active:brightness-95",
            destructive:
               "bg-linear-to-b **:[text-shadow:0_1px_0_var(--color-destructive)] border-destructive from-destructive/80 to-destructive dark:from-destructive dark:to-destructive/80 text-white dark:border-destructive border text-sm shadow-md shadow-zinc-950/30 ring ring-inset ring-white/20 transition-[filter] duration-200 hover:brightness-125 active:brightness-95",
            success:
               "bg-linear-to-b **:[text-shadow:0_1px_0_var(--color-success)] border-success from-success/80 to-success dark:from-success dark:to-success/80 text-white dark:border-success border text-sm shadow-md shadow-zinc-950/30 ring ring-inset ring-white/20 transition-[filter] duration-200 hover:brightness-125 active:brightness-95",
            warning:
               "bg-linear-to-b **:[text-shadow:0_1px_0_var(--color-warning)] border-warning from-warning/80 to-warning dark:from-warning dark:to-warning/80 text-white dark:border-warning border text-sm shadow-md shadow-zinc-950/30 ring ring-inset ring-white/20 transition-[filter] duration-200 hover:brightness-125 active:brightness-95",
            outline:
               "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary:
               "bg-secondary border border-border text-secondary-foreground shadow-xs hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline",
         },
         size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-8",
         },
      },
      defaultVariants: {
         variant: "default",
         size: "default",
      },
   },
);

function Button({
   className,
   variant,
   size,
   asChild = false,
   processing = false,
   Icon,
   iconPlacement,
   ...props
}: React.ComponentProps<"button"> &
   VariantProps<typeof buttonVariants> & {
      asChild?: boolean;
      processing?: boolean;
      Icon?: React.ElementType;
      iconPlacement?: "left" | "right";
   }) {
   const Comp = asChild ? Slot : "button";

   if (asChild) {
      return (
         <Slot className={cn(buttonVariants({ variant, size, className }))}>{props.children}</Slot>
      );
   }

   return (
      <Comp
         data-slot="button"
         className={cn(buttonVariants({ variant, size, className }))}
         {...(props as any)}
      >
         {Icon && iconPlacement === "left" && (
            <div className="w-0 translate-x-[0%] pr-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-100 group-hover:pr-2 group-hover:opacity-100">
               <Icon />
            </div>
         )}
         <Slottable>{props.children}</Slottable>
         {Icon && iconPlacement === "right" && (
            <div className="w-0 translate-x-[100%] pl-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-0 group-hover:pl-2 group-hover:opacity-100">
               <Icon />
            </div>
         )}
         {processing && (
            <div className="pl-2">
               <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={cn("size-4 animate-spin text-white", className)}
               >
                  <circle
                     strokeWidth={4}
                     stroke="currentColor"
                     r="10"
                     cy="12"
                     cx="12"
                     className="opacity-25"
                  />
                  <path d="M4 12a8 8 0 018-8v8H4z" fill="currentColor" className="opacity-75" />
               </svg>
            </div>
         )}
      </Comp>
   );
}

export { Button, buttonVariants };
