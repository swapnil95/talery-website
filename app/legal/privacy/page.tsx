import type { Metadata } from "next";
import {
  Shield,
  Lock,
  FileText,
  Globe,
  Mail,
  UserCheck,
  Cookie,
  Server,
  Baby,
} from "lucide-react";
import { Container } from "@/components/shared/Container";
import { PageHeader } from "@/components/shared/PageHeader";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Talery's Privacy Policy explains how we collect, use, share, and protect your personal information when you use our AI-powered social travel platform.",
};

const sections = [
  {
    icon: Shield,
    title: "1. Introduction",
    content: [
      "Talery Inc. (\"Talery,\" \"we,\" \"us,\" or \"our\") respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, store, share, and safeguard your information when you use our website, mobile applications, and services (collectively, the \"Services\").",
      "By accessing or using Talery, you agree to the practices described in this Privacy Policy. If you do not agree, please do not use our Services.",
    ],
  },
  {
    icon: FileText,
    title: "2. Information We Collect",
    content: [
      "Account Information: name, email address, phone number, username, password, profile photo, and biography.",
      "Travel Data: itineraries, destinations, bookings, preferences, travel history, and trip-related content.",
      "Usage Data: IP address, device type, browser type, operating system, pages visited, and interactions with our Services.",
      "Location Data: with your consent, we may collect precise or approximate location data to enhance travel recommendations.",
      "Payment Information: billing address and payment method details processed by secure third-party payment providers.",
      "Communications: messages, support requests, and feedback you send to us or other users.",
      "AI Interactions: prompts, queries, and outputs generated through Talery's AI travel planning features.",
    ],
  },
  {
    icon: Lock,
    title: "3. How We Use Your Information",
    content: [
      "To provide, maintain, and improve the Talery platform and AI-powered travel planning tools.",
      "To personalize recommendations, itineraries, and community content based on your preferences.",
      "To process transactions, subscriptions, and creator payouts.",
      "To communicate with you about updates, security alerts, support, and marketing (with your consent where required).",
      "To ensure safety, security, and compliance with our Terms of Service and legal obligations.",
      "To analyze usage trends, train and improve our AI models, and conduct research in aggregated or de-identified form.",
    ],
  },
  {
    icon: Globe,
    title: "4. Sharing Your Information",
    content: [
      "Service Providers: we share data with trusted vendors who help us host, analyze, pay, secure, and support our Services.",
      "Travel Partners: with your consent, we may share booking or itinerary details with airlines, hotels, experience providers, or insurers.",
      "Other Users: profile information and public travel content may be visible to other Talery users based on your privacy settings.",
      "Legal Compliance: we may disclose information if required by law, regulation, legal process, or to protect rights and safety.",
      "Business Transfers: in the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.",
      "We do not sell your personal information to third parties for monetary consideration.",
    ],
  },
  {
    icon: Cookie,
    title: "5. Cookies and Tracking Technologies",
    content: [
      "Talery uses cookies, web beacons, pixels, and similar technologies to operate and improve our Services.",
      "Essential cookies are required for core functionality such as authentication and security.",
      "Analytics and performance cookies help us understand how users interact with Talery.",
      "Advertising and personalization cookies enable relevant recommendations and marketing campaigns.",
      "You can manage cookie preferences through your browser settings or our cookie consent tool.",
    ],
  },
  {
    icon: UserCheck,
    title: "6. Your Rights (GDPR, CCPA, and Others)",
    content: [
      "Access: request a copy of the personal data we hold about you.",
      "Correction: request that we correct inaccurate or incomplete information.",
      "Deletion: request deletion of your personal data, subject to legal exceptions.",
      "Portability: receive your data in a structured, commonly used format.",
      "Restriction and Objection: ask us to limit or stop certain processing activities.",
      "Opt-Out: unsubscribe from marketing emails and opt out of certain data sales or sharing under applicable laws.",
      "To exercise your rights, contact us at legal@talery.co or use the settings available in your account.",
    ],
  },
  {
    icon: Server,
    title: "7. Data Retention and Security",
    content: [
      "We retain personal information for as long as necessary to fulfill the purposes described in this policy, unless a longer retention period is required by law.",
      "We implement industry-standard technical and organizational measures to protect your data, including encryption in transit and at rest, access controls, and regular security assessments.",
      "No method of transmission or storage is completely secure, and we cannot guarantee absolute security.",
    ],
  },
  {
    icon: Baby,
    title: "8. Children's Privacy",
    content: [
      "Talery is not directed to children under the age of 13, and we do not knowingly collect personal information from children under 13.",
      "If we learn that we have collected information from a child under 13 without parental consent, we will delete it promptly.",
      "Users between 13 and the age of majority must use Talery under the supervision of a parent or legal guardian.",
    ],
  },
  {
    icon: Globe,
    title: "9. International Transfers",
    content: [
      "Talery is based in the United States. Your information may be transferred to, stored, and processed in the United States or other countries where our service providers operate.",
      "When transferring personal data from the European Economic Area, United Kingdom, or other jurisdictions, we rely on appropriate safeguards such as Standard Contractual Clauses.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen pb-20">
      <PageHeader
        badge="Legal"
        title="Privacy Policy"
        subtitle="How Talery collects, uses, and protects your personal information."
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
                        We may update this Privacy Policy from time to time. We will notify you of material changes by posting the updated policy on Talery and updating the effective date.
                      </p>
                      <p>
                        If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
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
