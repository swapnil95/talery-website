import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { PageHeader } from "@/components/shared/PageHeader";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/shared/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing for every traveler. Compare Talery plans and find the one that fits your adventure.",
};

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for casual travelers exploring Talery.",
    features: [
      "3 AI itineraries/month",
      "Discover public trips",
      "Basic travel journal",
      "Community access",
      "Mobile app access",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Explorer",
    price: "$9",
    period: "/month",
    description: "For travelers who plan trips regularly.",
    features: [
      "Unlimited AI itineraries",
      "Offline access",
      "Budget pooling",
      "Advanced customization",
      "Ad-free experience",
      "Priority support",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Creator Pro",
    price: "$29",
    period: "/month",
    description: "For creators ready to monetize their travel content.",
    features: [
      "Everything in Explorer",
      "Sell premium guides",
      "Creator analytics",
      "Affiliate commissions",
      "Brand partnership tools",
      "Host group trips",
    ],
    cta: "Become a Creator",
    popular: false,
  },
  {
    name: "Business",
    price: "$99",
    period: "/month",
    description: "For travel agencies, brands, and teams.",
    features: [
      "5 team members",
      "White-label options",
      "API access",
      "Advanced reporting",
      "Dedicated manager",
      "Custom integrations",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

const comparisonFeatures = [
  { name: "AI itineraries", free: "3/month", explorer: "Unlimited", creator: "Unlimited", business: "Unlimited" },
  { name: "Offline access", free: false, explorer: true, creator: true, business: true },
  { name: "Budget pooling", free: false, explorer: true, creator: true, business: true },
  { name: "Ad-free", free: false, explorer: true, creator: true, business: true },
  { name: "Sell guides", free: false, explorer: false, creator: true, business: true },
  { name: "Affiliate commissions", free: false, explorer: false, creator: true, business: true },
  { name: "Team members", free: false, explorer: false, creator: false, business: "5" },
  { name: "API access", free: false, explorer: false, creator: false, business: true },
];

const faqs = [
  { q: "Can I change plans later?", a: "Yes. You can upgrade, downgrade, or cancel your plan at any time from your account settings." },
  { q: "Is there a free trial?", a: "Explorer and Creator Pro plans include a 14-day free trial with no credit card required." },
  { q: "What happens if I cancel?", a: "You keep access until the end of your billing period, then return to the free plan." },
  { q: "Do you offer refunds?", a: "We offer refunds within 14 days of purchase if you are not satisfied. See our Refund Policy for details." },
  { q: "Can I use Talery for my travel agency?", a: "Yes. The Business plan is designed for agencies and teams, with white-label and API options." },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen">
      <PageHeader
        badge="Pricing"
        title="Simple Pricing For Every Traveler"
        subtitle="Start free and upgrade when you are ready. No hidden fees, no surprise charges."
      />

      {/* Plans */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-30" />
        <Container className="relative z-10">
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan) => (
              <StaggerItem key={plan.name}>
                <Card
                  className={cn(
                    "h-full flex flex-col relative",
                    plan.popular
                      ? "border-primary shadow-xl shadow-primary/10"
                      : "border-border hover:border-primary/30"
                  )}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                      Most Popular
                    </div>
                  )}
                  <CardHeader className="p-6 pb-0">
                    <CardTitle className="text-lg">{plan.name}</CardTitle>
                    <div className="flex items-baseline gap-1 mt-2">
                      <span className="text-3xl font-bold">{plan.price}</span>
                      <span className="text-sm text-muted-foreground">{plan.period}</span>
                    </div>
                    <CardDescription className="mt-2">{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <ul className="space-y-3 mb-8 flex-1">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm">
                          <Check className="h-4 w-4 text-teal-500 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button variant={plan.popular ? "default" : "outline"} className="w-full" asChild>
                      <Link href="/contact">{plan.cta}</Link>
                    </Button>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* Comparison */}
      <section className="section-padding bg-muted/20 dark:bg-slate-950/30 overflow-x-auto">
        <Container>
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-teal-500 text-sm font-medium mb-4">
              Compare
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
              Feature Comparison
            </h2>
          </ScrollReveal>
          <ScrollReveal>
            <div className="min-w-[600px]">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 px-4 font-semibold">Feature</th>
                    <th className="text-center py-4 px-4 font-semibold">Free</th>
                    <th className="text-center py-4 px-4 font-semibold text-primary">Explorer</th>
                    <th className="text-center py-4 px-4 font-semibold text-teal-500">Creator Pro</th>
                    <th className="text-center py-4 px-4 font-semibold">Business</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((feature) => (
                    <tr key={feature.name} className="border-b border-border">
                      <td className="py-4 px-4">{feature.name}</td>
                      {[feature.free, feature.explorer, feature.creator, feature.business].map(
                        (value, i) => (
                          <td key={i} className="text-center py-4 px-4">
                            {typeof value === "boolean" ? (
                              value ? (
                                <Check className="h-4 w-4 text-teal-500 mx-auto" />
                              ) : (
                                <span className="text-muted-foreground">—</span>
                              )
                            ) : (
                              value
                            )}
                          </td>
                        )
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <Container>
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-orange-500 text-sm font-medium mb-4">
              FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
              Pricing Questions
            </h2>
          </ScrollReveal>
          <ScrollReveal className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-base font-medium">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent>{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ScrollReveal>
        </Container>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <Container>
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-sky-500 to-teal-500 text-white p-10 md:p-16 text-center">
              <div className="relative z-10 max-w-2xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                  Still Have Questions?
                </h2>
                <p className="text-lg opacity-90 mb-8">
                  Our team is happy to help you choose the right plan.
                </p>
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/contact">
                    Talk to Sales <ArrowRight className="h-4 w-4" />
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
