"use client";
import { api } from "@/lib/api/trpc/react";
import { Button, Heading, Input } from "@cloud0/ui";
import { confettiBurst } from "@cloud0/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import NumberFlow from "@number-flow/react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const formSchema = z.object({
   email: z.string().email(),
});
export function WaitlistForm() {
   const [isJoined, setIsJoined] = useState<{
      auto: boolean;
      joined: boolean;
   }>({
      auto: false,
      joined: false,
   });
   const { register, handleSubmit } = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
         email: "",
      },
   });

   const utils = api.useUtils();
   const addToWaitlist = api.waitlist.add.useMutation({
      onSuccess: () => {
         confettiBurst({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
         });
         toast.success("Successfully joined the waitlist! 🎉", {
            description:
               "We'll let you know when we're ready to show you what we've been working on.",
         });
         if (typeof window !== "undefined") {
            localStorage.setItem("waitlist-joined", "true");
         }
         utils.waitlist.count.invalidate();
      },
   });

   const { data: waitlist } = api.waitlist.count.useQuery(undefined, {
      refetchOnWindowFocus: true,
      refetchOnReconnect: true,
      refetchInterval: 50000,
   });

   const { isPending, isSuccess } = addToWaitlist;

   useEffect(() => {
      if (isSuccess) {
         setIsJoined({
            auto: false,
            joined: true,
         });
      } else if (typeof window !== "undefined") {
         const joined = localStorage.getItem("waitlist-joined");
         if (joined === "true") {
            setIsJoined({
               auto: true,
               joined: true,
            });
         }
      }
   }, [isSuccess]);
   return (
      <div
         className={
            "mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center gap-3"
         }
      >
         {isJoined.joined ? (
            <div className="bg-muted/60 flex h-9 w-full max-w-lg flex-col items-center justify-center gap-4 rounded-md border px-3 text-center">
               <Heading className="!text-base font-medium">
                  {isJoined.auto
                     ? "You have already joined the waitlist!"
                     : "Thank you for joining the waitlist! 🎉"}
               </Heading>
            </div>
         ) : (
            <form
               className="mx-auto flex w-full max-w-lg flex-col gap-3 sm:flex-row"
               onSubmit={handleSubmit((data) => addToWaitlist.mutate(data))}
            >
               <Input
                  placeholder="example@0.email"
                  className="placeholder:text-muted-foreground w-full rounded-lg px-4 font-medium outline placeholder:font-medium md:text-base"
                  {...register("email")}
               />
               <Button
                  processing={isPending}
                  className="relative w-full overflow-hidden rounded-lg sm:w-fit"
                  type="submit"
               >
                  {isPending ? "Joining..." : "Join the waitlist"}
               </Button>
            </form>
         )}
         <div className="relative flex flex-row items-center justify-center gap-3">
            {waitlist?.data && (
               <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="bg-muted/30 text-muted-foreground mt-6 inline-flex items-center gap-2 rounded-full border border-transparent px-4 py-2 text-sm"
               >
                  <div className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
                  <NumberFlow value={waitlist?.data.count ?? 0} /> people already joined
               </motion.div>
            )}
         </div>
      </div>
   );
}
