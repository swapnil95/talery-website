import type { Metadata } from "next";
import { Hero } from "@/app/sections/Hero";
import { WhyTalery } from "@/app/sections/WhyTalery";
import { Features } from "@/app/sections/Features";
import { AIFeatures } from "@/app/sections/AIFeatures";
// import { FAQ } from "@/app/sections/FAQ";
import { WaitlistCTA } from "@/app/sections/WaitlistCTA";

export const metadata: Metadata = {
  title: { absolute: "Talery — AI-Powered Social Travel Platform" },
  description:
    "Talery Private Limited is developing a social travel planning app. Explore planned features and contact us about future early access.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <WhyTalery />
      <Features />
      <AIFeatures />
      {/* <FAQ /> */}
      <WaitlistCTA />
    </main>
  );
}
