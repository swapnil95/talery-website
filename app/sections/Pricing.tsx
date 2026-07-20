"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/shared/ScrollReveal";
import { cn } from "@/lib/utils";

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
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Tailored solutions for large organizations.",
    features: [
      "Unlimited team members",
      "SSO & advanced security",
      "Custom AI training",
      "SLA guarantees",
      "On-premise options",
      "24/7 premium support",
    ],
    cta: "Talk to Us",
    popular: false,
  },
];

export function Pricing() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 mesh-gradient opacity-30" />
      <Container className="relative z-10">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Simple Pricing For{" "}
            <span className="gradient-text">Every Traveler</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Start free, upgrade when you&apos;re ready. No hidden fees.
          </p>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {plans.map((plan) => (
            <StaggerItem key={plan.name}>
              <motion.div
                whileHover={{ y: -8 }}
                className={cn(
                  "relative h-full p-6 rounded-2xl border transition-all duration-300 flex flex-col",
                  plan.popular
                    ? "bg-card border-primary shadow-xl shadow-primary/10"
                    : "bg-card border-border hover:border-primary/30 hover:shadow-lg"
                )}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                    Most Popular
                  </div>
                )}
                <h3 className="text-lg font-semibold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-sm text-muted-foreground">{plan.period}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-6">
                  {plan.description}
                </p>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <Check className="h-4 w-4 text-teal-500 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant={plan.popular ? "default" : "outline"}
                  className="w-full"
                  asChild
                >
                  <Link href="/#waitlist">{plan.cta}</Link>
                </Button>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
