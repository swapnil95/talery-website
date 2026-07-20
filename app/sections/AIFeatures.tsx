"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  CloudSun,
  Backpack,
  PiggyBank,
  Utensils,
  Gem,
  ShieldAlert,
  Languages,
  Clock,
  Route,
} from "lucide-react";
import { Container } from "@/components/shared/Container";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/shared/ScrollReveal";

const aiFeatures = [
  { icon: Sparkles, title: "AI itinerary generation", desc: "Full day-by-day plans from a single sentence." },
  { icon: CloudSun, title: "Weather suggestions", desc: "Activities adapt to the forecast automatically." },
  { icon: Backpack, title: "Packing assistant", desc: "Smart packing lists for every destination." },
  { icon: PiggyBank, title: "Budget optimization", desc: "Maximize experiences within your spend." },
  { icon: Utensils, title: "Food recommendations", desc: "Local flavors matched to your dietary preferences." },
  { icon: Gem, title: "Hidden gems", desc: "Discover places only locals know about." },
  { icon: ShieldAlert, title: "Emergency assistance", desc: "Instant help, contacts, and safety tips." },
  { icon: Languages, title: "Language help", desc: "Translate phrases and learn local etiquette." },
  { icon: Clock, title: "Smart scheduling", desc: "Optimal timing for attractions and transit." },
  { icon: Route, title: "Trip optimization", desc: "Reduce travel time and maximize enjoyment." },
];

export function AIFeatures() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 mesh-gradient opacity-40" />
      <Container className="relative z-10">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            AI Superpowers
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Your Personal AI{" "}
            <span className="gradient-text">Travel Agent</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Plan like a pro without the pro price tag. Talery&apos;s AI
            anticipates what you need before you ask.
          </p>
        </ScrollReveal>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
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
