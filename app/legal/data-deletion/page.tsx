import type { Metadata } from "next";
import {
  Trash2,
  FileSearch,
  Clock,
  ShieldAlert,
  Mail,
  CheckCircle,
} from "lucide-react";
import { Container } from "@/components/shared/Container";
import { PageHeader } from "@/components/shared/PageHeader";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Data Deletion Policy",
  description:
    "Talery's Data Deletion Policy explains how to request account and data deletion, what we delete, retention exceptions, and expected timelines.",
};

const steps = [
  {
    icon: FileSearch,
    title: "1. Request Deletion",
    description:
      "You can request deletion of your Talery account and personal data by emailing legal@talery.co or using the \"Delete Account\" option in your account settings.",
  },
  {
    icon: CheckCircle,
    title: "2. Verify Identity",
    description:
      "To protect your privacy and security, we may ask you to verify your identity before processing a deletion request.",
  },
  {
    icon: Clock,
    title: "3. Processing Timeline",
    description:
      "We aim to complete deletion requests within 30 days of verification. Some data may remain in backups for a limited period as described below.",
  },
];

const deletedData = [
  "Profile information, including name, email, bio, and profile photo",
  "Travel itineraries, saved trips, and preferences",
  "User-generated content such as posts, reviews, and public travel stories",
  "Messages, comments, and social interactions",
  "Payment and billing history, subject to legal retention requirements",
  "AI interaction history tied to your account",
];

const retainedData = [
  "Records required for legal, tax, accounting, or regulatory compliance",
  "Aggregated or de-identified data that cannot reasonably identify you",
  "Data necessary to resolve disputes, enforce agreements, or protect rights",
  "Information retained by third-party service providers in accordance with their own policies",
  "Backups that are securely deleted according to our standard retention schedule",
];

export default function DataDeletionPage() {
  return (
    <main className="min-h-screen pb-20">
      <PageHeader
        badge="Legal"
        title="Data Deletion Policy"
        subtitle="How to request deletion of your Talery account and data."
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
                    <Trash2 className="h-5 w-5" />
                  </div>
                  <div className="space-y-4">
                    <h2 className="text-xl font-bold tracking-tight">Your Right to Deletion</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      You have the right to request the deletion of your personal data and Talery account. We are committed to honoring valid deletion requests in accordance with applicable privacy laws, including the GDPR and CCPA.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="text-2xl font-bold tracking-tight mb-6">How to Request Deletion</h2>
          </ScrollReveal>

          <div className="space-y-6 mb-8">
            {steps.map((step, index) => (
              <ScrollReveal key={step.title} delay={0.15 + index * 0.05}>
                <Card className="glass-card border-primary/10">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <step.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <ScrollReveal delay={0.2}>
              <Card className="h-full glass-card border-secondary/10">
                <CardContent className="p-6 md:p-8">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/10 text-teal-500 mb-4">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <h2 className="text-xl font-bold tracking-tight mb-4">What We Delete</h2>
                  <ul className="space-y-3 text-muted-foreground leading-relaxed">
                    {deletedData.map((item, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <Card className="h-full glass-card border-accent/10">
                <CardContent className="p-6 md:p-8">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-orange-500 mb-4">
                    <ShieldAlert className="h-5 w-5" />
                  </div>
                  <h2 className="text-xl font-bold tracking-tight mb-4">Retention Exceptions</h2>
                  <ul className="space-y-3 text-muted-foreground leading-relaxed">
                    {retainedData.map((item, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>

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
                        For deletion requests or questions about this policy, please contact:
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
