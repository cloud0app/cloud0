"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import * as React from "react";
import { TRPCReactProvider } from "./trpc";

export function Providers({
   children,
   ssrOnlySecret,
   ...props
}: React.ComponentProps<typeof NextThemesProvider> & {
   ssrOnlySecret: string;
}) {
   return (
      <NextThemesProvider {...props}>
         <NuqsAdapter>
            <TRPCReactProvider ssrOnlySecret={ssrOnlySecret}>{children}</TRPCReactProvider>
         </NuqsAdapter>
      </NextThemesProvider>
   );
}
