import type { Metadata } from "next";
import {
  FileText,
  UserCircle,
  Shield,
  Camera,
  Scale,
  Mail,
} from "lucide-react";
import { Container } from "@/components/shared/Container";
import { PageHeader } from "@/components/shared/PageHeader";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "User Agreement",
  description:
    "Talery's User Agreement outlines the key terms all users agree to when using our AI-powered social travel platform.",
};

const sections = [
  {
    icon: FileText,
    title: "1. Welcome to Talery",
    content: [
      "This User Agreement is a binding contract between you and Talery Inc. It governs your use of the Talery website, mobile apps, and related services.",
      "By creating an account or using Talery, you agree to this User Agreement, our Privacy Policy, Community Guidelines, Content Policy, and other applicable policies.",
    ],
  },
  {
    icon: UserCircle,
    title: "2. Your Account",
    content: [
      "You must provide accurate information and keep your account secure.",
      "You are responsible for all activity that occurs under your account.",
      "You must be at least 13 years old to use Talery, and users under the age of majority must have appropriate consent.",
      "Talery may suspend or terminate accounts for violations of this agreement or for security reasons.",
    ],
  },
  {
    icon: Camera,
    title: "3. Content and Conduct",
    content: [
      "You retain ownership of content you post, and you grant Talery the rights needed to operate and promote the platform.",
      "You may not post illegal, harmful, hateful, infringing, fraudulent, or sexually explicit content.",
      "You may not harass other users, manipulate rankings, or use automated tools without permission.",
      "Talery may remove content and take enforcement action for violations.",
    ],
  },
  {
    icon: Shield,
    title: "4. Services and AI Features",
    content: [
      "Talery provides AI-powered travel planning, social features, booking tools, and creator services.",
      "AI-generated recommendations and itineraries are for planning purposes only. Always verify travel details independently.",
      "Talery does not guarantee the availability, accuracy, or suitability of third-party travel offerings.",
    ],
  },
  {
    icon: Scale,
    title: "5. Disputes and Governing Law",
    content: [
      "This agreement is governed by the laws of the State of California, USA.",
      "Disputes will be resolved through binding arbitration in San Francisco, California, except where prohibited by applicable law.",
      "You agree to resolve disputes individually and not as part of a class action.",
    ],
  },
];

export default function UserAgreementPage() {
  return (
    <main className="min-h-screen pb-20">
      <PageHeader
        badge="Legal"
        title="User Agreement"
        subtitle="The key terms all Talery users agree to."
      />

      <section className="pt-16 md:pt-24">
        <Container className="max-w-4xl">
          <ScrollReveal>
            <p className="text-sm text-muted-foreground mb-10">
              Last updated: July 14, 2026
            </p>
          </ScrollReveal>

          <div className="space-y-8">
            {sections.map((section, index) => (
              <ScrollReveal key={section.title} delay={index * 0.05}>
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

          <ScrollReveal delay={0.3}>
            <Card className="mt-8 glass-card border-secondary/10">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-secondary/10 text-teal-500">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold tracking-tight mb-3">Contact Us</h2>
                    <div className="space-y-3 text-muted-foreground leading-relaxed">
                      <p>
                        For questions about this User Agreement, contact us:
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
