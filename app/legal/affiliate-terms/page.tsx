import type { Metadata } from "next";
import {
  Handshake,
  UserCheck,
  TrendingUp,
  MousePointerClick,
  Wallet,
  Ban,
  XCircle,
  Mail,
} from "lucide-react";
import { Container } from "@/components/shared/Container";
import { PageHeader } from "@/components/shared/PageHeader";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Affiliate Terms",
  description:
    "Talery's Affiliate Terms govern participation in our affiliate program, commissions, tracking, payments, prohibited activities, and termination.",
};

const sections = [
  {
    icon: UserCheck,
    title: "1. Program Participation",
    content: [
      "The Talery Affiliate Program is open to approved individuals, publishers, influencers, and organizations who refer new users or customers to Talery.",
      "Applicants must provide accurate information and comply with our Terms of Service and applicable laws.",
      "Talery reserves the right to approve or reject any affiliate application at our sole discretion.",
    ],
  },
  {
    icon: MousePointerClick,
    title: "2. Tracking and Attribution",
    content: [
      "Affiliates receive unique tracking links or codes to identify referred users.",
      "Commissions are attributed based on the last-click or first-click model specified in your affiliate agreement.",
      "Tracking relies on cookies, user identifiers, and other technologies. Talery is not responsible for conversions lost due to user cookie blocking or technical issues.",
    ],
  },
  {
    icon: TrendingUp,
    title: "3. Commissions",
    content: [
      "Commissions are earned when a referred user completes a qualifying action, such as signing up, subscribing, or making a purchase, as defined in your affiliate agreement.",
      "Commission rates, qualifying actions, and payout schedules may vary by campaign and are subject to change with notice.",
      "Self-referrals, fraudulent transactions, and refunded purchases do not qualify for commissions.",
    ],
  },
  {
    icon: Wallet,
    title: "4. Payment",
    content: [
      "Affiliates must provide valid payment and tax information to receive payouts.",
      "Payouts are processed according to the minimum threshold and schedule outlined in your affiliate dashboard or agreement.",
      "Affiliates are responsible for any taxes, fees, or compliance obligations related to their earnings.",
    ],
  },
  {
    icon: Ban,
    title: "5. Prohibited Activities",
    content: [
      "Using misleading, deceptive, or false claims to promote Talery.",
      "Bidding on Talery trademarks or confusingly similar keywords without authorization.",
      "Engaging in cookie stuffing, click fraud, bot traffic, or other manipulative practices.",
      "Promoting Talery on websites or channels that contain illegal, hateful, or adult content.",
      "Sending unsolicited spam or bulk email promoting Talery without consent.",
    ],
  },
  {
    icon: XCircle,
    title: "6. Termination",
    content: [
      "Either party may terminate the affiliate relationship at any time with written notice.",
      "Talery may terminate immediately and withhold commissions for violations of these terms, fraud, or conduct that harms our brand.",
      "Upon termination, affiliates must remove Talery affiliate links and materials from their channels.",
    ],
  },
];

export default function AffiliateTermsPage() {
  return (
    <main className="min-h-screen pb-20">
      <PageHeader
        badge="Legal"
        title="Affiliate Terms"
        subtitle="Terms for referring users and earning commissions through Talery."
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
                    <Handshake className="h-5 w-5" />
                  </div>
                  <div className="space-y-4">
                    <h2 className="text-xl font-bold tracking-tight">Overview</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      The Talery Affiliate Program allows approved partners to earn commissions by promoting Talery and referring new users. These terms govern your participation in the program.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>

          <div className="space-y-8">
            {sections.map((section, index) => (
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
                        Questions about the Affiliate Program? Contact us:
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
