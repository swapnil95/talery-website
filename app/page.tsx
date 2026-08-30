import { Hero } from "@/app/sections/Hero";
import { WhyTalery } from "@/app/sections/WhyTalery";
import { Features } from "@/app/sections/Features";
import { AIFeatures } from "@/app/sections/AIFeatures";
// import { FAQ } from "@/app/sections/FAQ";
import { WaitlistCTA } from "@/app/sections/WaitlistCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyTalery />
      <Features />
      <AIFeatures />
      {/* <FAQ /> */}
      <WaitlistCTA />
    </>
  );
}
