import { application, cn } from "@cloud0/utils";
import Image from "next/image";
import LogoMark from "@/assets/logo-mark.png";

export const Logo = ({
   className,
   excludeText,
   excludeIcon = false,
}: {
   className?: string;
   excludeText?: boolean;
   excludeIcon?: boolean;
}) => {
   return (
      <div className="flex items-center gap-1">
         {!excludeIcon && (
            <Image
               alt="Logo"
               height={20}
               width={265}
               src={LogoMark}
               className={cn("h-[21px] w-8 translate-y-[-1px] dark:invert", className)}
            />
         )}
         {!excludeText && (
            <span className={cn("text-2xl font-semibold tracking-tight text-balance ", className)}>
               {application.name}
            </span>
         )}
      </div>
      // <div className="border-background dark:inset-ring dark:inset-ring-white/25 bg-linear-to-b dark:inset-shadow-2xs dark:inset-shadow-white/25 relative flex size-8 items-center justify-center rounded border from-lime-300 to-teal-600 shadow-md shadow-black/20 ring-1 ring-black/10 dark:border-0 dark:shadow-white/10 dark:ring-black/50">
      //     <div className="absolute inset-1 aspect-square rounded-full border border-white/35 bg-black/15"></div>
      //     <div className="absolute inset-px aspect-square rounded-full border border-dashed border-white/25"></div>
      //     <svg
      //         xmlns="http://www.w3.org/2000/svg"
      //         width="24"
      //         height="24"
      //         viewBox="0 0 24 24"
      //         fill="none"
      //         stroke="currentColor"
      //         stroke-width="2"
      //         stroke-linecap="round"
      //         stroke-linejoin="round"
      //         className="lucide lucide-book-open size-3 fill-white stroke-white drop-shadow-sm"
      //     >
      //         <path d="M12 7v14"></path>
      //         <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
      //     </svg>
      // </div>
   );
};
