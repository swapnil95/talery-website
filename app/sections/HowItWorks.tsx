"use client";

import { motion } from "framer-motion";
import { Search, Pencil, Users2, Plane, Share2, Coins, PlaneIcon } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/shared/ScrollReveal";

const steps = [
  {
    icon: Search,
    title: "Discover",
    desc: "Explore locations and add them to Talery.",
  },
  {
    icon: Pencil,
    title: "Customize",
    desc: "Use AI to adapt any itinerary to your budget, dates and style.",
  },
  {
    icon: Users2,
    title: "Collaborate",
    desc: "Invite friends, split costs, and plan together",
  },
  {
    icon: PlaneIcon,
    title: "Travel",
    desc: "Visit all locations using Talery's live trip features",
  },
  {
    icon: Share2,
    title: "Share",
    desc: "Share your experience and inspire others to explore.",
  },
];

export function HowItWorks() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 mesh-gradient opacity-40" />
      <Container className="relative z-10">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-300 text-sm font-medium mb-4">
            How it works
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Plan, Travel, Share{" "}
            <span className="gradient-text">In Minutes</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A simple loop that turns inspiration into income.
          </p>
        </ScrollReveal>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sky-500 via-teal-500 to-orange-500 hidden md:block" />
          <StaggerContainer className="space-y-8">
            {steps.map((step, i) => (
              <StaggerItem key={step.title}>
                <motion.div
                  whileHover={{ x: 8 }}
                  className="relative flex flex-col md:flex-row md:items-center gap-6 p-6 rounded-2xl glass-card"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-teal-500 text-white shadow-lg shrink-0 z-10">
                    <step.icon className="h-7 w-7" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-bold text-primary uppercase tracking-wider">
                        Step {i + 1}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-1">{step.title}</h3>
                    <p className="text-muted-foreground">{step.desc}</p>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="hidden md:block absolute left-16 top-full h-8 w-0.5 bg-gradient-to-b from-teal-500 to-transparent" />
                  )}
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </Container>
    </section>
  );
}
