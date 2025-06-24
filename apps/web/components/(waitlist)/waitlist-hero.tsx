"use client";
import { WaitlistForm } from "@/components/(waitlist)/waitlist-form";
import { AnimatedGroup, TextEffect } from "@cloud0/ui";
import { motion, type Variants } from "motion/react";
import Link from "next/link";
const transitionVariants: { item: Variants } = {
   item: {
      hidden: {
         opacity: 0,
         filter: "blur(5px)",
         y: 5,
      },
      visible: {
         opacity: 1,
         filter: "blur(0px)",
         y: 0,
         transition: {
            type: "spring",
            bounce: 0.3,
            duration: 1,
         },
      },
   },
};
export function WaitlistHero() {
   return (
      <main className="relative flex flex-1 flex-col items-center justify-center overflow-hidden">
         <div className="z-10 mx-auto max-w-4xl text-center">
            <TextEffect
               preset="fade-in-blur"
               speedSegment={1.5}
               as="h1"
               className="text-4xl font-medium text-balance sm:text-5xl md:text-6xl"
            >
               Like Resend, But for Uploads
            </TextEffect>
            <TextEffect
               per="line"
               preset="fade-in-blur"
               speedSegment={1.5}
               delay={0.5}
               as="p"
               className="mx-auto mt-4 max-w-2xl text-base text-pretty"
            >
               Resend made email easy. We&apos;re doing the same for file uploads.
            </TextEffect>

            <AnimatedGroup
               variants={{
                  container: {
                     visible: {
                        transition: {
                           staggerChildren: 0.05,
                           delayChildren: 0.75,
                        },
                     },
                  },
                  ...transitionVariants,
               }}
               className="mt-6 pb-2"
            >
               <div className="absolute inset-0 -top-8 left-1/2 -z-20 h-56 w-full -translate-x-1/2 dark:opacity-10"></div>
               <WaitlistForm />
            </AnimatedGroup>
         </div>
         <AnimatedGroup>
            <motion.div
               className="text-muted-foreground absolute right-0 bottom-12 left-0 text-center text-sm"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.8, duration: 0.8 }}
            >
               Currently in beta • Open source on{" "}
               <Link
                  href="https://github.com/cloud0app/cloud0"
                  className="text-foreground underline"
               >
                  GitHub {289}+
               </Link>
            </motion.div>
         </AnimatedGroup>
      </main>
   );
}
