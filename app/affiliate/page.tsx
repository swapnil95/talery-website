import type { Metadata } from "next";
import Link from "next/link";
import {
  DollarSign,
  Check,
  ArrowRight,
  Gift,
  FileText,
  Megaphone,
} from "lucide-react";
import { Container } from "@/components/shared/Container";
import { PageHeader } from "@/components/shared/PageHeader";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/shared/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Affiliate Program",
  description:
    "Earn commissions by referring travelers to Talery. Join our affiliate program and monetize your audience with travel's most innovative platform.",
};

const commissionTiers = [
  { sales: "0–50", rate: "15%", bonus: "$0" },
  { sales: "51–200", rate: "20%", bonus: "$250" },
  { sales: "201–500", rate: "25%", bonus: "$1,000" },
  { sales: "500+", rate: "30%", bonus: "Custom" },
];

const steps = [
  { icon: FileText, title: "Apply", desc: "Fill out a quick application and share your audience details." },
  { icon: Gift, title: "Get Your Link", desc: "Receive a unique referral link and curated marketing assets." },
  { icon: Megaphone, title: "Share Talery", desc: "Promote Talery through content, newsletters, and social posts." },
  { icon: DollarSign, title: "Earn", desc: "Receive commissions on every qualifying subscription and sale." },
];

const resources = [
  { title: "Brand Assets", desc: "Logos, banners, and screenshots ready for your content." },
  { title: "Tracking Dashboard", desc: "Real-time clicks, conversions, and payout tracking." },
  { title: "Email Swipes", desc: "Pre-written copy to announce Talery to your audience." },
  { title: "Dedicated Support", desc: "A partner success manager to help you maximize earnings." },
];

export default function AffiliatePage() {
  return (
    <main className="min-h-screen">
      <PageHeader
        badge="Affiliate"
        title="Earn With Every Adventure"
        subtitle="Join the Talery affiliate program and earn generous commissions by sharing the future of AI-powered travel planning."
      />

      {/* Commission Structure */}
      <section className="section-padding">
        <Container>
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Commission Structure
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
              The More You Share, The More You Earn
            </h2>
          </ScrollReveal>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {commissionTiers.map((tier) => (
              <StaggerItem key={tier.sales}>
                <Card className="h-full text-center hover-lift">
                  <CardContent className="p-6">
                    <p className="text-sm text-muted-foreground mb-2">Monthly sales</p>
                    <p className="text-2xl font-bold mb-4">{tier.sales}</p>
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">
                        Commission: <span className="font-semibold text-foreground">{tier.rate}</span>
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Bonus: <span className="font-semibold text-foreground">{tier.bonus}</span>
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* How to Join */}
      <section className="section-padding bg-muted/20 dark:bg-slate-950/30">
        <Container>
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-teal-500 text-sm font-medium mb-4">
              How to Join
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
              Start Earning in Minutes
            </h2>
          </ScrollReveal>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <StaggerItem key={step.title}>
                <Card className="h-full hover-lift">
                  <CardContent className="p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500/10 to-teal-500/10 text-primary mb-4">
                      <step.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* Resources */}
      <section className="section-padding">
        <Container>
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-orange-500 text-sm font-medium mb-4">
              Resources
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
              Everything You Need to Succeed
            </h2>
          </ScrollReveal>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource) => (
              <StaggerItem key={resource.title}>
                <Card className="h-full hover-lift">
                  <CardContent className="p-6">
                    <Check className="h-6 w-6 text-teal-500 mb-4" />
                    <h3 className="font-semibold text-lg mb-2">{resource.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{resource.desc}</p>
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
                  Become a Talery Affiliate
                </h2>
                <p className="text-lg opacity-90 mb-8">
                  Apply today and start earning from the travel platform your audience will love.
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
