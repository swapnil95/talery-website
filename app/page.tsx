import { Hero } from "@/app/sections/Hero";
import { TrustedBy } from "@/app/sections/TrustedBy";
import { WhyTalery } from "@/app/sections/WhyTalery";
import { Features } from "@/app/sections/Features";
import { HowItWorks } from "@/app/sections/HowItWorks";
import { CreatorEconomy } from "@/app/sections/CreatorEconomy";
import { AIFeatures } from "@/app/sections/AIFeatures";
import { Screenshots } from "@/app/sections/Screenshots";
import { Testimonials } from "@/app/sections/Testimonials";
import { Statistics } from "@/app/sections/Statistics";
import { Pricing } from "@/app/sections/Pricing";
import { FAQ } from "@/app/sections/FAQ";
import { WaitlistCTA } from "@/app/sections/WaitlistCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <WhyTalery />
      <Features />
      <HowItWorks />
      <CreatorEconomy />
      <AIFeatures />
      <Screenshots />
      <Testimonials />
      <Statistics />
      <Pricing />
      <FAQ />
      <WaitlistCTA />
    </>
  );
}
