"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Store,
  Users,
  Wallet,
  Map,
  Lightbulb,
  BookOpen,
  Rss,
  Download,
  CalendarCheck,
  MessageCircle,
  CircleDollarSign,
  Share2,
  Plane,
} from "lucide-react";
import { Container } from "@/components/shared/Container";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/shared/ScrollReveal";

const features = [
  { icon: Sparkles, title: "AI Trip Planner", desc: "Generate complete itineraries in seconds from any prompt." },
  { icon: Store, title: "Creator Marketplace", desc: "Buy, sell, and discover curated travel guides." },
  { icon: Users, title: "Collaborative Planning", desc: "Build trips together with friends in real time." },
  { icon: Wallet, title: "Budget Pooling", desc: "Collect, split, and track group trip expenses." },
  { icon: Map, title: "Real-time Maps", desc: "Interactive maps with live routes and locations." },
  { icon: Lightbulb, title: "Smart Recommendations", desc: "Personalized suggestions based on your taste." },
  { icon: BookOpen, title: "Travel Journal", desc: "Document every moment with photos and stories." },
  { icon: Rss, title: "Social Feed", desc: "Follow creators and explore trending trips." },
  { icon: Download, title: "Offline Itinerary", desc: "Access your plans without internet." },
  { icon: CalendarCheck, title: "Booking Integrations", desc: "Book hotels, activities, and transport in one place." },
  { icon: MessageCircle, title: "Travel Communities", desc: "Join groups for every destination and interest." },
  { icon: Plane, title: "Group Trips", desc: "Join influencer-led adventures around the world." },
  { icon: Sparkles, title: "AI Chat", desc: "Ask anything about your destination." },
  { icon: CircleDollarSign, title: "Creator Earnings", desc: "Monetize your travel knowledge effortlessly." },
  { icon: Share2, title: "Trip Sharing", desc: "Share beautiful itineraries with one link." },
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
            From AI-powered planning to creator monetization — Talery is the
            all-in-one platform for modern travelers.
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
