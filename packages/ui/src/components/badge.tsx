import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "../lib/utils";

const badgeVariants = cva(
   "inline-flex items-center justify-center rounded-md px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none  aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
   {
      variants: {
         variant: {
            default: "ring-primary/40 ring-1 bg-primary/20 text-primary dark:bg-primary/30",
            secondary:
               "ring-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
            destructive:
               "ring-destructive/40 ring-1 bg-destructive/20 text-destructive dark:bg-destructive/30",
            success: "ring-success/40 ring-1 bg-success/20 text-success dark:bg-success/30",
            warning: "ring-warning/40 ring-[1.2px] bg-warning/20 text-warning dark:bg-warning/30",
            outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
         },
      },
      defaultVariants: {
         variant: "default",
      },
   },
);

function Badge({
   className,
   variant,
   asChild = false,
   ...props
}: React.ComponentProps<"span"> & VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
   const Comp = asChild ? Slot : "span";

   return (
      <Comp
         data-slot="badge"
         className={cn(badgeVariants({ variant }), className)}
         {...(props as any)}
      />
   );
}

export { Badge, badgeVariants };
