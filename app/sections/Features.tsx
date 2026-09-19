"use client";

import { motion } from "framer-motion";
import {
  Sparkles, Users, Wallet, Map, BookOpen, Download, CalendarCheck, Share2,
} from "lucide-react";
import { Container } from "@/components/shared/Container";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/shared/ScrollReveal";

const features = [
  { icon: Sparkles, title: "AI Trip Planner", desc: "Build and refine itineraries around your saved places and preferences." },
  { icon: Users, title: "Shared Trips", desc: "Invite travel companions and give each person a role in your trip." },
  { icon: Wallet, title: "Shared Expenses", desc: "Record expenses, split costs, and track settlements made outside Talery." },
  { icon: Map, title: "Maps and Places", desc: "Find destinations and keep your saved stops together on a map." },
  { icon: BookOpen, title: "Trip Media", desc: "Keep selected photos, documents, and notes with your travel plans." },
  { icon: Download, title: "Itinerary Export", desc: "Export a PDF copy of your itinerary to take with you." },
  { icon: CalendarCheck, title: "Group Decisions", desc: "Use trip polls to help your group choose places to visit." },
  { icon: Share2, title: "Trip Sharing", desc: "Invite others to collaborate and choose whether to make a trip public." },
];

export function Features() {
  return (
    <section className="section-padding bg-muted/20 dark:bg-slate-950/30">
      <Container>
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Features
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Everything You Need To{" "}
            <span className="gradient-text">Travel Smarter</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Bring your plans, saved places, travel companions, and shared expenses
            together. Availability may vary during early access.
          </p>
        </ScrollReveal>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature) => (
            <StaggerItem key={feature.title}>
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                className="group h-full p-6 rounded-2xl bg-card border border-border shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500/10 to-teal-500/10 text-primary mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
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
