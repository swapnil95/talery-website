import type { Metadata } from "next";
import Link from "next/link";
import {
  Sparkles,
  Map,
  MessageCircle,
  Wallet,
  ArrowRight,
} from "lucide-react";
import { Container } from "@/components/shared/Container";
import { PageHeader } from "@/components/shared/PageHeader";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/shared/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";


export const metadata: Metadata = {
  title: "AI Travel Planner",
  description:
    "Plan your perfect trip with Talery's AI travel planner. Generate personalized itineraries, get local recommendations, and collaborate with friends.",
};

const capabilities = [
  {
    icon: Sparkles,
    title: "Natural Language Planning",
    desc: "Describe your dream trip in plain language and get a complete itinerary in seconds.",
  },
  {
    icon: Map,
    title: "Smart Route Optimization",
    desc: "AI arranges activities by location, opening hours, and travel time to minimize backtracking.",
  },
  {
    icon: MessageCircle,
    title: "Conversational Refinement",
    desc: "Ask follow-up questions and tweak your plan until it feels just right.",
  },
  {
    icon: Wallet,
    title: "Budget-Aware Suggestions",
    desc: "Set your budget and Talery prioritizes experiences that fit your spending plan.",
  },
];

const useCases = [
  { title: "Solo Adventures", desc: "Build confidence with personalized plans for independent exploration." },
  { title: "Group Trips", desc: "Collaborate with friends and balance everyone's interests." },
  { title: "Family Vacations", desc: "Find kid-friendly activities and flexible schedules." },
  { title: "Weekend Escapes", desc: "Maximize short trips with tightly optimized itineraries." },
];

export default function AITravelPlannerPage() {
  return (
    <main className="min-h-screen">
      <PageHeader
        badge="AI Travel Planner"
        title="Plan Less. Travel More."
        subtitle="Tell Talery where you want to go and what you love. Our AI builds a personalized itinerary while you pack your bags."
      />

      {/* Demo UI Mock */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-30" />
        <Container className="relative z-10">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto">
              <div className="glass-card rounded-3xl p-6 md:p-10 shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-teal-500 text-white">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold">Talery AI Planner</p>
                    <p className="text-xs text-muted-foreground">Online</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-muted/50 dark:bg-slate-900/50 rounded-2xl p-4 max-w-lg">
                    <p className="text-sm">
                      &ldquo;Plan a 5-day trip to Japan in April. I love cherry blossoms, temples, ramen,
                      and quiet neighborhoods. Budget is mid-range.&rdquo;
                    </p>
                  </div>
                  <div className="flex justify-end">
                    <div className="bg-primary text-primary-foreground rounded-2xl p-4 max-w-lg">
                      <p className="text-sm mb-3">
                        Here is a cherry blossom-focused Tokyo &amp; Kyoto itinerary with temple visits,
                        hidden ramen spots, and peaceful neighborhood walks.
                      </p>
                      <div className="space-y-2">
                        <div className="bg-white/10 rounded-xl p-3 text-sm">
                          <p className="font-semibold">Day 1 &mdash; Tokyo</p>
                          <p className="opacity-90">Ueno Park → Yanaka Ginza → Nezu Shrine → Ramen dinner</p>
                        </div>
                        <div className="bg-white/10 rounded-xl p-3 text-sm">
                          <p className="font-semibold">Day 3 &mdash; Kyoto</p>
                          <p className="opacity-90">Philosopher&apos;s Path → Ginkaku-ji → Pontocho Alley</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex gap-2">
                  <div className="flex-1 h-11 rounded-xl border border-input bg-background px-4 flex items-center text-sm text-muted-foreground">
                    Ask a follow-up...
                  </div>
                  <Button size="icon">
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Capabilities */}
      <section className="section-padding bg-muted/20 dark:bg-slate-950/30">
        <Container>
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
              What the AI Can Do
            </h2>
          </ScrollReveal>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cap) => (
              <StaggerItem key={cap.title}>
                <Card className="h-full hover-lift">
                  <CardContent className="p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500/10 to-teal-500/10 text-primary mb-4">
                      <cap.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{cap.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{cap.desc}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* Use Cases */}
      <section className="section-padding">
        <Container>
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-teal-500 text-sm font-medium mb-4">
              Use Cases
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
              Built For Every Kind of Trip
            </h2>
          </ScrollReveal>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase) => (
              <StaggerItem key={useCase.title}>
                <Card className="h-full hover-lift">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-2">{useCase.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{useCase.desc}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <Container>
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-sky-500 to-teal-500 text-white p-10 md:p-16 text-center">
              <div className="relative z-10 max-w-2xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                  Let AI Plan Your Next Trip
                </h2>
                <p className="text-lg opacity-90 mb-8">
                  Join the waitlist and be among the first to experience Talery&apos;s AI travel planner.
                </p>
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/#waitlist">
                    Get Early Access <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </main>
  );
}
