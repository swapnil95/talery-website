"use client";

import { motion } from "framer-motion";
import { Sparkles, Utensils, Clock, Route } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/shared/ScrollReveal";

const aiFeatures = [
  { icon: Sparkles, title: "Itinerary drafts", desc: "Turn saved places and preferences into a day-by-day plan." },
  { icon: Utensils, title: "Meal stops", desc: "Work restaurant options into your sightseeing schedule." },
  { icon: Clock, title: "Travel pace", desc: "Refine your plan around the time you want to spend exploring." },
  { icon: Route, title: "Plan together with AI", desc: "Discuss changes and review suggestions before relying on them." },
];

export function AIFeatures() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 mesh-gradient opacity-40" />
      <Container className="relative z-10">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            AI planning preview
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Your Personal AI{" "}
            <span className="gradient-text">Planning Assistant</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We are developing AI tools to turn your places and preferences into
            an itinerary you can review and refine. The app is not yet available.
          </p>
        </ScrollReveal>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {aiFeatures.map((feature) => (
            <StaggerItem key={feature.title}>
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                className="h-full p-5 rounded-2xl glass-card hover:shadow-xl transition-all group"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-teal-500 text-white mb-4 group-hover:rotate-6 transition-transform">
                  <feature.icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-sm mb-2">{feature.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
