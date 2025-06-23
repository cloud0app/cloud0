"use client";
import { api } from "@/lib/api/trpc/react";
import { Button } from "@cloud0/ui";
import { toast } from "sonner";

export default function Page() {
   const testEmail = api.auth.testEmail.useMutation({
      onSuccess: () => {
         toast.success("Email sent successfully");
      },
      onError: (error) => {
         toast.error(`Error sending email: ${error.message}`);
      },
   });

   return (
      <div className="flex min-h-svh items-center justify-center">
         <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="text-2xl font-medium">Hello World</h1>
            <Button
               size="sm"
               onClick={() => {
                  testEmail.mutate();
               }}
               processing={testEmail.isPending}
            >
               {testEmail.isPending ? "Sending Test Email..." : "Send Test Email"}
            </Button>
         </div>
      </div>
   );
}
