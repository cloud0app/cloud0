import { cn } from "@cloud0/utils";
import React from "react";

export default function Container({
   children,
   className,
}: React.PropsWithChildren & { className?: string }) {
   return (
      <section className={cn("@container/main flex flex-1 flex-col space-y-6", className)}>
         {children}
      </section>
   );
}
