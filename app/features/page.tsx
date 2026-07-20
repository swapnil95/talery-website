import type { Metadata } from "next";
import Link from "next/link";
import {
  Sparkles,
  Map,
  Users,
  Globe,
  ArrowRight,
} from "lucide-react";
import { Container } from "@/components/shared/Container";
import { PageHeader } from "@/components/shared/PageHeader";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/shared/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Discover everything Talery can do. AI trip planning, collaborative tools, creator monetization, travel journals, and more.",
};

const categories = [
  {
    title: "AI-Powered Planning",
    icon: Sparkles,
    description: "Plan smarter with tools that understand your travel style.",
    features: [
      { title: "AI Trip Planner", desc: "Generate complete itineraries from a single prompt." },
      { title: "Smart Recommendations", desc: "Personalized suggestions based on your preferences and past trips." },
      { title: "AI Chat Assistant", desc: "Ask questions about destinations, visas, packing, and more." },
      { title: "Dynamic Itineraries", desc: "Plans that adapt to weather, events, and real-time changes." },
    ],
  },
  {
    title: "Social Travel",
    icon: Users,
    description: "Travel is better together. Plan, split, and share with ease.",
    features: [
      { title: "Collaborative Planning", desc: "Build trips together with friends in real time." },
      { title: "Budget Pooling", desc: "Collect, split, and track group expenses transparently." },
      { title: "Travel Communities", desc: "Join destination and interest-based groups." },
      { title: "Trip Sharing", desc: "Share beautiful itineraries with one link." },
    ],
  },
  {
    title: "Creator Economy",
    icon: Globe,
    description: "Monetize your travel expertise and grow your audience.",
    features: [
      { title: "Premium Guides", desc: "Sell downloadable itineraries and local recommendations." },
      { title: "Group Trips", desc: "Host and monetize creator-led adventures." },
      { title: "Creator Analytics", desc: "Track views, sales, and audience engagement." },
      { title: "Affiliate Commissions", desc: "Earn when your audience books through your links." },
    ],
  },
  {
    title: "Travel Tools",
    icon: Map,
    description: "Everything you need before and during your trip.",
    features: [
      { title: "Interactive Maps", desc: "Visualize routes, stops, and activities on dynamic maps." },
      { title: "Offline Access", desc: "Download itineraries and access them without internet." },
      { title: "Booking Integrations", desc: "Book hotels, activities, and transport in one place." },
      { title: "Travel Journal", desc: "Document moments with photos, notes, and stories." },
    ],
  },
];

export default function FeaturesPage() {
  return (
    <main className="min-h-screen">
      <PageHeader
        badge="Features"
        title="Everything You Need to Travel Smarter"
        subtitle="From AI itineraries to creator monetization — explore the complete Talery feature set designed for modern travelers."
      />

      {categories.map((category, index) => (
        <section
          key={category.title}
          className={`section-padding ${index % 2 === 1 ? "bg-muted/20 dark:bg-slate-950/30" : ""}`}
        >
          <Container>
            <ScrollReveal className="max-w-3xl mb-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500/10 to-teal-500/10 text-primary">
                  <category.icon className="h-6 w-6" />
                </div>
                <span className="text-sm font-medium text-primary">{category.title}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                {category.title}
              </h2>
              <p className="text-lg text-muted-foreground">{category.description}</p>
            </ScrollReveal>
            <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {category.features.map((feature) => (
                <StaggerItem key={feature.title}>
                  <Card className="h-full hover-lift">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
                    </CardContent>
                  </Card>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </Container>
        </section>
      ))}

      {/* CTA */}
      <section className="section-padding">
        <Container>
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-sky-500 to-teal-500 text-white p-10 md:p-16 text-center">
              <div className="relative z-10 max-w-2xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                  Experience Talery For Yourself
                </h2>
                <p className="text-lg opacity-90 mb-8">
                  Join the waitlist and be the first to try our full feature set.
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
