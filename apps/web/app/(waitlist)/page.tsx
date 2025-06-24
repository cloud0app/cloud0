import { WaitlistHeader } from "@/components/(waitlist)/waitlist-header";
import { WaitlistHero } from "@/components/(waitlist)/waitlist-hero";
import Container from "@/components/shared/container";
import "@/styles/waitlist.css";

const Page = () => {
   return (
      <Container className="relative px-4 sm:px-0 mx-auto flex min-h-dvh max-w-5xl flex-col items-center justify-center">
         <WaitlistHeader />
         <WaitlistHero />
      </Container>
   );
};

export default Page;
