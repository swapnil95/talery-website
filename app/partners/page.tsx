import type { Metadata } from "next";
import Link from "next/link";
import {
  Building2,
  Plane,
  Hotel,
  Landmark,
  Check,
  ArrowRight,
  Globe,
  TrendingUp,
  Users,
} from "lucide-react";
import { Container } from "@/components/shared/Container";
import { PageHeader } from "@/components/shared/PageHeader";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/shared/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Partner With Us",
  description:
    "Partner with Talery to reach high-intent travelers. Explore partnership tiers for hotels, airlines, travel brands, and experience providers.",
};

const partnerTypes = [
  {
    icon: Hotel,
    title: "Hotels & Stays",
    desc: "Showcase properties to travelers actively planning trips and receive AI-curated placement.",
  },
  {
    icon: Plane,
    title: "Airlines & Transport",
    desc: "Integrate flights, trains, and car rentals directly into user itineraries.",
  },
  {
    icon: Landmark,
    title: "Experience Providers",
    desc: "List tours, activities, and unique experiences where travelers are already planning.",
  },
  {
    icon: Building2,
    title: "Travel Brands",
    desc: "Co-marketing, affiliate programs, and branded content opportunities with creators.",
  },
];

const tiers = [
  {
    name: "Explorer",
    description: "For boutique partners testing the platform.",
    features: [
      "Basic listing on Talery",
      "Monthly performance report",
      "Email support",
      "Standard commission rates",
    ],
    cta: "Apply Now",
    highlighted: false,
  },
  {
    name: "Advantage",
    description: "For growing partners ready to scale.",
    features: [
      "Featured placements",
      "AI itinerary integration",
      "Creator collaboration access",
      "Priority support",
      "Co-marketing opportunities",
    ],
    cta: "Become a Partner",
    highlighted: true,
  },
  {
    name: "Enterprise",
    description: "For global brands and chains.",
    features: [
      "Dedicated account manager",
      "Custom API integration",
      "White-label options",
      "Advanced analytics",
      "Strategic co-branding",
      "Volume-based pricing",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

const benefits = [
  { icon: Globe, title: "Global Reach", desc: "Access millions of travelers planning trips across 150+ countries." },
  { icon: TrendingUp, title: "High Intent", desc: "Connect with users actively building itineraries and booking experiences." },
  { icon: Users, title: "Creator Network", desc: "Leverage our creator community for authentic, travel-focused content." },
];

export default function PartnersPage() {
  return (
    <main className="min-h-screen">
      <PageHeader
        badge="Partners"
        title="Partner With Talery"
        subtitle="Reach travelers at the moment of inspiration. Build integrations, co-marketing campaigns, and creator collaborations that drive real results."
      />

      {/* Partner Types */}
      <section className="section-padding">
        <Container>
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Who We Work With
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
              Partnerships For Every Travel Vertical
            </h2>
          </ScrollReveal>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerTypes.map((type) => (
              <StaggerItem key={type.title}>
                <Card className="h-full hover-lift">
                  <CardContent className="p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500/10 to-teal-500/10 text-primary mb-4">
                      <type.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{type.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{type.desc}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* Tiers */}
      <section className="section-padding bg-muted/20 dark:bg-slate-950/30">
        <Container>
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-teal-500 text-sm font-medium mb-4">
              Partnership Tiers
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
              Choose Your Level
            </h2>
          </ScrollReveal>
          <StaggerContainer className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {tiers.map((tier) => (
              <StaggerItem key={tier.name}>
                <Card
                  className={`h-full flex flex-col ${
                    tier.highlighted
                      ? "border-primary shadow-xl shadow-primary/10"
                      : "border-border"
                  }`}
                >
                  <CardHeader className="p-6 pb-0">
                    <CardTitle className="text-xl">{tier.name}</CardTitle>
                    <CardDescription>{tier.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <ul className="space-y-3 mb-8 flex-1">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm">
                          <Check className="h-4 w-4 text-teal-500 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button variant={tier.highlighted ? "default" : "outline"} className="w-full" asChild>
                      <Link href="/contact">{tier.cta}</Link>
                    </Button>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* Benefits */}
      <section className="section-padding">
        <Container>
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-orange-500 text-sm font-medium mb-4">
              Why Partner
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
              Grow With Us
            </h2>
          </ScrollReveal>
          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <StaggerItem key={benefit.title}>
                <Card className="h-full text-center hover-lift">
                  <CardContent className="p-8">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500/10 to-teal-500/10 text-primary mx-auto mb-4">
                      <benefit.icon className="h-7 w-7" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{benefit.desc}</p>
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
                  Ready to Reach Travelers?
                </h2>
                <p className="text-lg opacity-90 mb-8">
                  Talk to our partnerships team about the right tier for your business.
                </p>
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/contact">
                    Contact Sales <ArrowRight className="h-4 w-4" />
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
