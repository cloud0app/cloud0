import { Body, Button, Container, Heading, Text } from "@react-email/components";
import React from "react";

export const MailTitle = ({ children }: { children: React.ReactNode }) => (
   <Heading className="my-6 p-0 text-2xl leading-[35px] font-semibold text-zinc-900">
      {children}
   </Heading>
);

export const MailContainer = ({ children }: { children: React.ReactNode }) => (
   <Container className="m-auto px-5">{children}</Container>
);

export const MailBody = ({ children }: { children: React.ReactNode }) => (
   <Body className="m-auto bg-white font-sans">{children}</Body>
);

export const MailText = ({ children }: { children: React.ReactNode }) => (
   <Text className="mb-8 text-sm leading-7">{children}</Text>
);

export const MailButton = ({ href, children }: { href: string; children: React.ReactNode }) => (
   <Button
      className="box-border w-full rounded-xl bg-zinc-900 p-3 text-center font-semibold text-white"
      href={href}
   >
      {children}
   </Button>
);

export const MailFooterText = ({ children }: { children: React.ReactNode }) => (
   <Text className="mt-8 text-xs leading-6 text-gray-600">{children}</Text>
);
