import type { Metadata } from "next";
import Link from "next/link";
import {
  Sparkles,
  DollarSign,
  Users,
  TrendingUp,
  ArrowRight,
  HelpCircle,
} from "lucide-react";
import { Container } from "@/components/shared/Container";
import { PageHeader } from "@/components/shared/PageHeader";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/shared/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EarningsCalculator } from "./EarningsCalculator";

export const metadata: Metadata = {
  title: "Creator Program",
  description:
    "Monetize your travel content with Talery. Sell premium guides, host group trips, and earn affiliate commissions.",
};

const benefits = [
  {
    icon: DollarSign,
    title: "Sell Premium Guides",
    desc: "Package your itineraries into beautiful, downloadable guides and keep the majority of every sale.",
  },
  {
    icon: Users,
    title: "Host Group Trips",
    desc: "Organize and monetize creator-led adventures with built-in planning and communication tools.",
  },
  {
    icon: TrendingUp,
    title: "Affiliate Commissions",
    desc: "Earn when your audience books hotels, activities, and experiences through your recommendations.",
  },
  {
    icon: Sparkles,
    title: "Creator Analytics",
    desc: "Understand what your audience loves with detailed insights on views, sales, and engagement.",
  },
];

const steps = [
  { step: "01", title: "Apply", desc: "Submit your creator profile and tell us about your travel niche." },
  { step: "02", title: "Create", desc: "Build guides, itineraries, and trip listings using Talery tools." },
  { step: "03", title: "Share", desc: "Promote your Talery content to your audience and community." },
  { step: "04", title: "Earn", desc: "Get paid through guide sales, trip bookings, and affiliate commissions." },
];

const faqs = [
  { q: "Who can join the creator program?", a: "Any travel creator, blogger, photographer, or influencer with an engaged audience and original travel content." },
  { q: "How much can I earn?", a: "Earnings vary by audience size and engagement. Use our calculator above to estimate potential monthly revenue." },
  { q: "Is there an application fee?", a: "No. Applying to and participating in the Talery Creator Program is completely free." },
  { q: "How do payouts work?", a: "Creators receive monthly payouts via bank transfer or PayPal once they reach the minimum threshold." },
];

export default function CreatorProgramPage() {
  return (
    <main className="min-h-screen">
      <PageHeader
        badge="Creator Program"
        title="Turn Travel Into Income"
        subtitle="Join thousands of creators monetizing their wanderlust with premium guides, group trips, and affiliate partnerships."
      />

      {/* Benefits */}
      <section className="section-padding">
        <Container>
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Benefits
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
              Everything Creators Need
            </h2>
          </ScrollReveal>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <StaggerItem key={benefit.title}>
                <Card className="h-full hover-lift">
                  <CardContent className="p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500/10 to-teal-500/10 text-primary mb-4">
                      <benefit.icon className="h-6 w-6" />
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

      {/* How It Works */}
      <section className="section-padding bg-muted/20 dark:bg-slate-950/30">
        <Container>
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-teal-500 text-sm font-medium mb-4">
              How It Works
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
              From Creator to Earner
            </h2>
          </ScrollReveal>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s) => (
              <StaggerItem key={s.step}>
                <Card className="h-full relative overflow-hidden">
                  <CardContent className="p-6">
                    <span className="text-5xl font-bold text-muted/50 dark:text-slate-800 absolute top-4 right-4">
                      {s.step}
                    </span>
                    <h3 className="font-semibold text-lg mb-2 relative z-10">{s.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed relative z-10">{s.desc}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* Calculator */}
      <section className="section-padding">
        <Container>
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-orange-500 text-sm font-medium mb-4">
              Earnings Calculator
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
              Estimate Your Potential
            </h2>
          </ScrollReveal>
          <ScrollReveal>
            <EarningsCalculator />
          </ScrollReveal>
        </Container>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-muted/20 dark:bg-slate-950/30">
        <Container>
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
              Common Questions
            </h2>
          </ScrollReveal>
          <StaggerContainer className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {faqs.map((faq) => (
              <StaggerItem key={faq.q}>
                <Card className="h-full">
                  <CardHeader className="p-6">
                    <CardTitle className="text-base flex items-start gap-2">
                      <HelpCircle className="h-5 w-5 text-primary shrink-0" />
                      {faq.q}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-6 pb-6 pt-0">
                    <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
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
                  Ready to Create?
                </h2>
                <p className="text-lg opacity-90 mb-8">
                  Apply to the Talery Creator Program and start turning your travel stories into
                  income.
                </p>
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/contact">
                    Apply Now <ArrowRight className="h-4 w-4" />
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
