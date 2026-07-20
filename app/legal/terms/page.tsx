import type { Metadata } from "next";
import {
  Scale,
  FileText,
  UserCircle,
  Camera,
  AlertTriangle,
  Copyright,
  XCircle,
  ShieldAlert,
  Mail,
  Landmark,
} from "lucide-react";
import { Container } from "@/components/shared/Container";
import { PageHeader } from "@/components/shared/PageHeader";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Talery's Terms of Service govern your access to and use of our AI-powered social travel platform, accounts, content, and services.",
};

const sections = [
  {
    icon: FileText,
    title: "1. Acceptance of Terms",
    content: [
      "By accessing, downloading, or using Talery's Services, you agree to be bound by these Terms of Service and our Privacy Policy.",
      "If you use Talery on behalf of a business or organization, you represent that you have authority to bind that entity to these Terms.",
      "We may modify these Terms at any time. Continued use after changes constitutes acceptance of the updated Terms.",
    ],
  },
  {
    icon: UserCircle,
    title: "2. Eligibility and Accounts",
    content: [
      "You must be at least 13 years old to use Talery. Users under the age of majority must have parental or guardian consent.",
      "You are responsible for maintaining the confidentiality of your account credentials and for all activity under your account.",
      "You agree to provide accurate, current, and complete information when creating or updating your account.",
      "We reserve the right to suspend or terminate accounts that violate these Terms or are inactive for an extended period.",
    ],
  },
  {
    icon: Camera,
    title: "3. User Content",
    content: [
      "You retain ownership of any content you post, upload, or share on Talery, including photos, reviews, itineraries, and travel stories.",
      "By posting content, you grant Talery a non-exclusive, royalty-free, worldwide license to use, display, modify, and distribute your content solely to operate and promote the Services.",
      "You represent that you have all necessary rights to your content and that it does not infringe on third-party rights.",
      "We may remove content that violates our policies or applicable law.",
    ],
  },
  {
    icon: AlertTriangle,
    title: "4. Prohibited Conduct",
    content: [
      "You may not use Talery for illegal, fraudulent, harmful, or deceptive purposes.",
      "You may not harass, threaten, defame, discriminate against, or abuse other users.",
      "You may not upload malware, spam, viruses, or other harmful code.",
      "You may not scrape, reverse engineer, or attempt to gain unauthorized access to our systems.",
      "You may not use automated means to create accounts, send messages, or manipulate rankings without our permission.",
    ],
  },
  {
    icon: Copyright,
    title: "5. Intellectual Property",
    content: [
      "Talery and its branding, software, designs, text, graphics, logos, and AI models are owned by Talery Inc. or our licensors and are protected by intellectual property laws.",
      "You may not copy, modify, distribute, sell, or lease any part of Talery without our prior written consent.",
      "Feedback you provide about Talery may be used by us without obligation or compensation.",
    ],
  },
  {
    icon: XCircle,
    title: "6. Termination",
    content: [
      "You may stop using Talery or delete your account at any time through your account settings.",
      "We may suspend or terminate your access if you breach these Terms, pose a safety risk, or if required by law.",
      "Upon termination, licenses granted by you will expire, but provisions related to intellectual property, liability, and dispute resolution will survive.",
    ],
  },
  {
    icon: ShieldAlert,
    title: "7. Disclaimers",
    content: [
      "Talery is provided \"as is\" and \"as available\" without warranties of any kind, express or implied.",
      "We do not guarantee that travel recommendations, bookings, or AI-generated itineraries will be accurate, complete, or suitable for your needs.",
      "You are responsible for verifying travel details, visas, health requirements, and local laws before traveling.",
    ],
  },
  {
    icon: Scale,
    title: "8. Limitation of Liability",
    content: [
      "To the fullest extent permitted by law, Talery Inc. and its affiliates shall not be liable for indirect, incidental, special, consequential, or punitive damages.",
      "Our total liability for any claim arising from these Terms or the Services is limited to the amount you paid to Talery in the 12 months preceding the claim, or $100, whichever is greater.",
      "Some jurisdictions do not allow certain limitations, so these limits may not apply to you.",
    ],
  },
  {
    icon: Landmark,
    title: "9. Governing Law and Arbitration",
    content: [
      "These Terms are governed by the laws of the State of California, without regard to conflict of law principles.",
      "Any dispute arising from these Terms or your use of Talery will be resolved through binding arbitration in San Francisco, California, except that either party may seek injunctive relief in court.",
      "You agree to resolve disputes on an individual basis and waive any right to participate in a class action.",
      "If you are a consumer in the European Union, you retain any mandatory statutory rights under your local law.",
    ],
  },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen pb-20">
      <PageHeader
        badge="Legal"
        title="Terms of Service"
        subtitle="The rules and responsibilities for using Talery."
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
                        <h2 className="text-xl font-bold tracking-tight">
                          {section.title}
                        </h2>
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
                    <h2 className="text-xl font-bold tracking-tight mb-3">
                      10. Changes and Contact
                    </h2>
                    <div className="space-y-3 text-muted-foreground leading-relaxed">
                      <p>
                        We may update these Terms of Service from time to time. Material changes will be posted on this page with an updated effective date.
                      </p>
                      <p>
                        Questions about these Terms? Contact us:
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
