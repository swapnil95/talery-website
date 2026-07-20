"use client";

import { motion } from "framer-motion";
import {
  Wallet,
  Link2,
  Handshake,
  BookMarked,
  Users,
  Receipt,
  BarChart3,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/shared/ScrollReveal";

const benefits = [
  { icon: Wallet, title: "Earn from itineraries", desc: "Get paid when travelers use your curated trips." },
  { icon: Link2, title: "Affiliate commissions", desc: "Earn on bookings made through your recommendations." },
  { icon: Handshake, title: "Brand partnerships", desc: "Collaborate with tourism boards and travel brands." },
  { icon: BookMarked, title: "Sell premium guides", desc: "Offer exclusive deep-dive destination guides." },
  { icon: Users, title: "Host group trips", desc: "Lead adventures and earn from every booking." },
  { icon: Receipt, title: "Subscriptions", desc: "Build a loyal following with recurring memberships." },
  { icon: BarChart3, title: "Creator analytics", desc: "Understand your audience and grow faster." },
];

export function CreatorEconomy() {
  return (
    <section className="section-padding bg-gradient-to-b from-sky-50/50 to-teal-50/50 dark:from-slate-900/50 dark:to-slate-950/50">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <span className="inline-block px-4 py-1.5 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-300 text-sm font-medium mb-4">
              Creator Economy
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Turn Your Travel Passion{" "}
              <span className="gradient-text">Into Income</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Whether you&apos;re a micro-influencer, local expert, or
              storyteller — Talery gives you the tools to monetize your travel
              knowledge and build a thriving community.
            </p>
            <Button size="lg" asChild>
              <Link href="/creator-program">
                Join Creator Program
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </ScrollReveal>

          <StaggerContainer className="grid sm:grid-cols-2 gap-4">
            {benefits.map((benefit) => (
              <StaggerItem key={benefit.title}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="p-5 rounded-2xl bg-card border border-border shadow-sm hover:shadow-lg hover:border-primary/20 transition-all h-full"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-300 mb-3">
                    <benefit.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold mb-1">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </Container>
    </section>
  );
}
