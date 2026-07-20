import type { Metadata } from "next";
import {
  Shield,
  Lock,
  Scale,
  Activity,
  Mail,
  FileCheck,
} from "lucide-react";
import { Container } from "@/components/shared/Container";
import { PageHeader } from "@/components/shared/PageHeader";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/shared/ScrollReveal";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Trust Center",
  description:
    "Talery's Trust Center provides an overview of our security, privacy, compliance, uptime, and reporting practices.",
};

const trustPillars = [
  {
    icon: Shield,
    title: "Security",
    description:
      "We protect the Talery platform with encryption in transit and at rest, secure authentication, network segmentation, vulnerability scanning, and regular security assessments.",
  },
  {
    icon: Lock,
    title: "Privacy",
    description:
      "Your personal data is handled transparently and responsibly. We minimize data collection, support your privacy rights, and do not sell your personal information.",
  },
  {
    icon: Scale,
    title: "Compliance",
    description:
      "Talery is committed to complying with applicable laws and regulations, including GDPR, CCPA, and the DMCA, and to honoring user rights around the world.",
  },
  {
    icon: Activity,
    title: "Uptime & Reliability",
    description:
      "We work to maintain high availability for the Talery platform with monitoring, incident response, and redundancy designed to keep your travel planning uninterrupted.",
  },
];

const reports = [
  "Security vulnerabilities or suspected abuse",
  "Privacy concerns or data subject requests",
  "Copyright or trademark infringement",
  "Trust and safety issues on the platform",
];

export default function TrustCenterPage() {
  return (
    <main className="min-h-screen pb-20">
      <PageHeader
        badge="Legal"
        title="Trust Center"
        subtitle="Security, privacy, compliance, and reliability at Talery."
      />

      <section className="pt-16 md:pt-24">
        <Container className="max-w-4xl">
          <ScrollReveal>
            <p className="text-sm text-muted-foreground mb-10">
              Last updated: July 14, 2026
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <Card className="glass-card border-primary/10 mb-10">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Shield className="h-5 w-5" />
                  </div>
                  <div className="space-y-4">
                    <h2 className="text-xl font-bold tracking-tight">Our Promise</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Trust is the foundation of the Talery community. This Trust Center summarizes the policies, practices, and commitments that help keep our platform and your data safe.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      For detailed information, please review our Security Policy, Privacy Policy, Terms of Service, and other legal documents.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-2 gap-6 mb-10">
            {trustPillars.map((pillar) => (
              <StaggerItem key={pillar.title}>
                <Card className="h-full glass-card border-primary/10 hover-lift">
                  <CardContent className="p-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                      <pillar.icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{pillar.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {pillar.description}
                    </p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <ScrollReveal delay={0.2}>
              <Card className="h-full glass-card border-secondary/10">
                <CardContent className="p-6 md:p-8">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/10 text-teal-500 mb-4">
                    <FileCheck className="h-5 w-5" />
                  </div>
                  <h2 className="text-xl font-bold tracking-tight mb-4">Certifications and Assessments</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Talery undergoes regular internal and third-party security assessments. We pursue industry-recognized certifications and align our practices with widely accepted security and privacy frameworks.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <Card className="h-full glass-card border-accent/10">
                <CardContent className="p-6 md:p-8">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-orange-500 mb-4">
                    <Activity className="h-5 w-5" />
                  </div>
                  <h2 className="text-xl font-bold tracking-tight mb-4">Incident Response</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We maintain an incident response plan to quickly detect, investigate, and address security or availability issues. Affected users will be notified in accordance with applicable laws.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.3}>
            <Card className="glass-card border-primary/10 mb-10">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="space-y-4">
                    <h2 className="text-xl font-bold tracking-tight">Report a Concern</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      If you need to report any of the following, please contact us at legal@talery.co:
                    </p>
                    <ul className="space-y-3 text-muted-foreground leading-relaxed">
                      {reports.map((item, i) => (
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

          <ScrollReveal delay={0.35}>
            <div className="rounded-2xl border bg-card p-6 md:p-8 text-center">
              <h2 className="text-xl font-bold tracking-tight mb-3">Contact</h2>
              <div className="text-muted-foreground leading-relaxed">
                <p>Email: legal@talery.co</p>
                <p>Talery Inc.</p>
                <p>123 Market Street</p>
                <p>San Francisco, CA 94105, USA</p>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </main>
  );
}
