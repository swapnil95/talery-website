"use client";

import { motion } from "framer-motion";
import {
  AppWindow,
  Globe,
  UserX,
  FileText,
  BrainCircuit,
  Users,
  Sliders,
  Handshake,
} from "lucide-react";
import { Container } from "@/components/shared/Container";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/shared/ScrollReveal";

const problems = [
  { icon: AppWindow, text: "Too many tabs open" },
  { icon: Globe, text: "Scattered information" },
  { icon: UserX, text: "No personalization" },
  { icon: FileText, text: "Generic itineraries" },
  { icon: BrainCircuit, text: "Planning is stressful" },
];

const solutions = [
  { icon: BrainCircuit, title: "AI", desc: "Planning suggestions guided by your preferences" },
  { icon: Users, title: "Community", desc: "Tools for sharing travel plans with other people" },
  { icon: UserX, title: "Discovery", desc: "Keep interesting places together for your next trip" },
  { icon: Sliders, title: "Customization", desc: "Tailor every detail to your taste" },
  { icon: Handshake, title: "Collaboration", desc: "Plan trips together, seamlessly" },
];

export function WhyTalery() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 gradient-radial opacity-50" />
      <Container className="relative z-10">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Travel Planning Is{" "}
            <span className="gradient-text">Broken.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We are building Talery because planning a trip shouldn&apos;t feel like a
            second job. No more endless tabs, copy-pasted itineraries, or
            one-size-fits-none recommendations.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <StaggerContainer className="space-y-4">
            <h3 className="text-xl font-semibold mb-6 text-muted-foreground">
              The old way
            </h3>
            {problems.map((problem) => (
              <StaggerItem key={problem.text}>
                <motion.div
                  whileHover={{ x: 8 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border shadow-sm"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-300">
                    <problem.icon className="h-5 w-5" />
                  </div>
                  <span className="font-medium">{problem.text}</span>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <StaggerContainer className="space-y-4">
            <h3 className="text-xl font-semibold mb-6 text-primary">
              The Talery way
            </h3>
            {solutions.map((solution) => (
              <StaggerItem key={solution.title}>
                <motion.div
                  whileHover={{ x: 8 }}
                  className="flex items-start gap-4 p-4 rounded-xl glass-card hover-lift"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-300 shrink-0">
                    <solution.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{solution.title}</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      {solution.desc}
                    </p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </Container>
    </section>
  );
}
