import type { Metadata } from "next";
import {
  Palette,
  DollarSign,
  CreditCard,
  FileSignature,
  Lock,
  XCircle,
  Mail,
} from "lucide-react";
import { Container } from "@/components/shared/Container";
import { PageHeader } from "@/components/shared/PageHeader";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Creator Terms",
  description:
    "Talery's Creator Terms govern participation in our creator program, earnings, payouts, content licensing, exclusivity, and termination.",
};

const sections = [
  {
    icon: Palette,
    title: "1. Creator Program Participation",
    content: [
      "The Talery Creator Program is open to users who meet our eligibility criteria, including age, account standing, and content quality standards.",
      "Creators must comply with our Terms of Service, Privacy Policy, Community Guidelines, and Content Policy.",
      "We reserve the right to accept, reject, or remove creators from the program at our discretion.",
    ],
  },
  {
    icon: DollarSign,
    title: "2. Earnings",
    content: [
      "Creators may earn revenue through tips, paid subscriptions, sponsored collaborations, affiliate referrals, and other monetization features offered by Talery.",
      "Earnings are calculated based on platform metrics, partner terms, and applicable fees.",
      "Talery reserves the right to adjust monetization features, rates, and eligibility requirements with reasonable notice.",
    ],
  },
  {
    icon: CreditCard,
    title: "3. Payouts",
    content: [
      "Payouts are made to the payment method on file once the creator reaches the minimum payout threshold and provides valid tax and identity information.",
      "Payouts are typically processed monthly, subject to review for fraud, chargebacks, or policy violations.",
      "Creators are responsible for any taxes owed on earnings and for complying with applicable financial regulations.",
    ],
  },
  {
    icon: FileSignature,
    title: "4. Content License",
    content: [
      "By participating in the Creator Program, you grant Talery a non-exclusive, royalty-free, worldwide license to use, display, promote, and distribute your creator content on and off the platform.",
      "You retain ownership of your original content and may use it elsewhere, subject to any exclusivity arrangements you enter into with Talery.",
      "You represent that your content does not infringe on third-party rights and that you have obtained all necessary permissions.",
    ],
  },
  {
    icon: Lock,
    title: "5. Exclusivity and Promotions",
    content: [
      "Unless otherwise agreed in writing, participation in the Creator Program is non-exclusive.",
      "Creators participating in exclusive campaigns or sponsorships must honor the terms of those specific agreements.",
      "Sponsored content must be clearly disclosed in accordance with applicable advertising and disclosure laws.",
    ],
  },
  {
    icon: XCircle,
    title: "6. Termination",
    content: [
      "Either party may terminate creator participation with notice. Talery may terminate immediately for violations of these terms or platform policies.",
      "Upon termination, pending payouts may be forfeited or withheld if earned through fraudulent or violative activity.",
      "Licenses granted to Talery for content already distributed may survive termination as needed for archival, legal, or operational purposes.",
    ],
  },
];

export default function CreatorTermsPage() {
  return (
    <main className="min-h-screen pb-20">
      <PageHeader
        badge="Legal"
        title="Creator Terms"
        subtitle="Terms for Talery creators and content monetization."
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
                        For creator program questions or support, contact us:
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
