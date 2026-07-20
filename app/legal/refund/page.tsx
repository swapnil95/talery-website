import type { Metadata } from "next";
import {
  RefreshCcw,
  CreditCard,
  Calendar,
  Plane,
  AlertCircle,
  CheckCircle,
  Mail,
} from "lucide-react";
import { Container } from "@/components/shared/Container";
import { PageHeader } from "@/components/shared/PageHeader";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy",
  description:
    "Talery's Refund & Cancellation Policy covers subscriptions, creator earnings, booking refunds, exceptions, and how to request a refund.",
};

const refundTypes = [
  {
    icon: CreditCard,
    title: "Subscriptions",
    content: [
      "Subscription fees are billed in advance on a monthly or annual basis depending on your plan.",
      "You may cancel your subscription at any time through your account settings. Cancellations take effect at the end of the current billing cycle.",
      "Annual subscriptions canceled within 14 days of purchase may be eligible for a full refund if no significant platform usage has occurred.",
      "Monthly subscriptions are generally non-refundable after the billing date, except where required by law.",
    ],
  },
  {
    icon: Plane,
    title: "Bookings and Travel Services",
    content: [
      "Refunds for flights, hotels, experiences, or other third-party travel bookings are subject to the policies of the respective provider.",
      "Talery acts as a platform and does not control supplier refund terms. We will assist you in initiating refund requests where possible.",
      "If a booking is canceled by the travel supplier, we will help you obtain a refund or credit according to the supplier's policy.",
    ],
  },
  {
    icon: CheckCircle,
    title: "Creator Earnings",
    content: [
      "Creator earnings from tips, subscriptions, sponsored content, or affiliate commissions are paid out according to the Creator Terms.",
      "Payouts are processed on a monthly basis once the minimum payout threshold is reached.",
      "Chargebacks, refunds, or fraud related to creator transactions may result in adjustments to creator balances.",
    ],
  },
];

const exceptions = [
  "Services that have been fully performed or consumed",
  "Promotional or discounted purchases marked as non-refundable",
  "Travel bookings canceled outside the supplier's permitted window",
  "Accounts terminated for violations of our Terms of Service",
  "Refund requests made beyond the applicable eligibility window",
];

export default function RefundPage() {
  return (
    <main className="min-h-screen pb-20">
      <PageHeader
        badge="Legal"
        title="Refund & Cancellation Policy"
        subtitle="How subscriptions, bookings, and creator earnings are refunded or canceled."
      />

      <section className="pt-16 md:pt-24">
        <Container className="max-w-4xl">
          <ScrollReveal>
            <p className="text-sm text-muted-foreground mb-10">
              Last updated: July 14, 2026
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <Card className="glass-card border-primary/10 mb-8">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <RefreshCcw className="h-5 w-5" />
                  </div>
                  <div className="space-y-4">
                    <h2 className="text-xl font-bold tracking-tight">Overview</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      At Talery, we want you to be satisfied with your experience. This policy explains how refunds and cancellations work for Talery subscriptions, bookings made through our platform, and creator earnings.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>

          <div className="space-y-8 mb-8">
            {refundTypes.map((section, index) => (
              <ScrollReveal key={section.title} delay={0.1 + index * 0.05}>
                <Card className="glass-card border-primary/10">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <section.icon className="h-5 w-5" />
                      </div>
                      <div className="space-y-4">
                        <h2 className="text-xl font-bold tracking-tight">{section.title}</h2>
                        <ul className="space-y-3 text-muted-foreground leading-relaxed">
                          {section.content.map((item, i) => (
                            <li key={i} className="flex gap-3">
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.2}>
            <Card className="glass-card border-secondary/10 mb-8">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-secondary/10 text-teal-500">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <div className="space-y-4">
                    <h2 className="text-xl font-bold tracking-tight">Refund Process</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      To request a refund, contact our support team with your order or transaction details. Approved refunds are typically processed to the original payment method within 5 to 10 business days, depending on your payment provider.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      You can also initiate refund requests for certain bookings directly within your Talery account under the &quot;Trips&quot; or &quot;Billing&quot; section.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
            <Card className="glass-card border-accent/10 mb-8">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-orange-500">
                    <AlertCircle className="h-5 w-5" />
                  </div>
                  <div className="space-y-4">
                    <h2 className="text-xl font-bold tracking-tight">Exceptions</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      The following are generally not eligible for refunds:
                    </p>
                    <ul className="space-y-3 text-muted-foreground leading-relaxed">
                      {exceptions.map((item, i) => (
                        <li key={i} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <Card className="glass-card border-primary/10">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold tracking-tight mb-3">Contact Us</h2>
                    <div className="space-y-3 text-muted-foreground leading-relaxed">
                      <p>
                        If you have questions about refunds or cancellations, please reach out:
                      </p>
                      <ul className="space-y-1 pl-4">
                        <li>Email: legal@talery.co</li>
                        <li>Talery Inc.</li>
                        <li>123 Market Street</li>
                        <li>San Francisco, CA 94105, USA</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>
        </Container>
      </section>
    </main>
  );
}
