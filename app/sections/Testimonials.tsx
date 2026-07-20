"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/shared/ScrollReveal";

const testimonials = [
  {
    role: "Travel Creator",
    name: "Sarah Jenkins",
    quote:
      "Talery transformed how I share trips. My followers now book the exact experiences I recommend, and I earn while I sleep.",
  },
  {
    role: "Backpacker",
    name: "Marcus Chen",
    quote:
      "I planned a 3-month Southeast Asia trip in under an hour. The AI understood my budget better than I did.",
  },
  {
    role: "Family Traveler",
    name: "Emily Rodriguez",
    quote:
      "Finally, a trip planner that thinks about kids, naps, and snacks. Our family vacation was actually relaxing.",
  },
  {
    role: "Solo Traveler",
    name: "Aisha Patel",
    quote:
      "Solo travel felt less lonely with Talery. I met fellow travelers through communities and always had a plan.",
  },
  {
    role: "Digital Nomad",
    name: "Leo Thompson",
    quote:
      "The budget pooling feature saved my friend group so much drama. Everyone paid their share automatically.",
  },
  {
    role: "Local Expert",
    name: "Diego Martinez",
    quote:
      "I turned my neighborhood knowledge into a side income. Hosting small group trips is now my favorite job.",
  },
];

export function Testimonials() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 gradient-radial opacity-40" />
      <Container className="relative z-10">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Loved By Travelers{" "}
            <span className="gradient-text">Worldwide</span>
          </h2>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <motion.div
                whileHover={{ y: -6 }}
                className="h-full p-6 rounded-2xl glass-card hover:shadow-xl transition-all"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-orange-400 text-orange-400"
                    />
                  ))}
                </div>
                <p className="text-foreground/90 mb-6 leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-sky-400 to-teal-400" />
                  <div>
                    <p className="font-semibold text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
