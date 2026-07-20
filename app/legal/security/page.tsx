import type { Metadata } from "next";
import {
  Shield,
  Lock,
  Server,
  Key,
  FileCheck,
  Bug,
  Mail,
} from "lucide-react";
import { Container } from "@/components/shared/Container";
import { PageHeader } from "@/components/shared/PageHeader";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Security Policy",
  description:
    "Talery's Security Policy describes the measures we take to protect your data, encryption practices, and how to report security vulnerabilities.",
};

const measures = [
  {
    icon: Lock,
    title: "Encryption",
    description:
      "Data is encrypted in transit using TLS and at rest using industry-standard encryption algorithms to protect your information from unauthorized access.",
  },
  {
    icon: Key,
    title: "Authentication",
    description:
      "We support strong authentication methods, including password protection, secure session management, and multi-factor authentication where available.",
  },
  {
    icon: Server,
    title: "Infrastructure Security",
    description:
      "Our infrastructure is hosted on secure cloud providers with network segmentation, firewalls, access logging, and regular vulnerability scanning.",
  },
  {
    icon: FileCheck,
    title: "Compliance and Audits",
    description:
      "We perform regular security assessments, code reviews, and access audits to maintain a strong security posture and compliance with applicable standards.",
  },
];

const reportingSteps = [
  "Provide a clear description of the vulnerability and its potential impact.",
  "Include steps to reproduce the issue or proof-of-concept if possible.",
  "Avoid accessing, modifying, deleting, or exfiltrating user data beyond what is necessary to demonstrate the issue.",
  "Give us a reasonable amount of time to address the issue before disclosing it publicly.",
];

export default function SecurityPage() {
  return (
    <main className="min-h-screen pb-20">
      <PageHeader
        badge="Legal"
        title="Security Policy"
        subtitle="How Talery protects your data and our platform."
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
                    <Shield className="h-5 w-5" />
                  </div>
                  <div className="space-y-4">
                    <h2 className="text-xl font-bold tracking-tight">Our Security Commitment</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Talery takes the security of our platform and your data seriously. We implement technical, administrative, and physical safeguards designed to protect personal information and ensure the reliability of our services.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="text-2xl font-bold tracking-tight mb-6">Security Measures</h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {measures.map((measure, index) => (
              <ScrollReveal key={measure.title} delay={0.15 + index * 0.05}>
                <Card className="h-full glass-card border-primary/10 hover-lift">
                  <CardContent className="p-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                      <measure.icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{measure.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {measure.description}
                    </p>
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
                    <Bug className="h-5 w-5" />
                  </div>
                  <div className="space-y-4">
                    <h2 className="text-xl font-bold tracking-tight">Reporting Vulnerabilities</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      We welcome responsible disclosure of security vulnerabilities. If you believe you have discovered a security issue affecting Talery, please report it to us at legal@talery.co.
                    </p>
                    <ul className="space-y-3 text-muted-foreground leading-relaxed">
                      {reportingSteps.map((item, i) => (
                        <li key={i} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
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
                        For security questions or vulnerability reports, please contact:
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
