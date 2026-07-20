import type { Metadata } from "next";
import {
  Users,
  Heart,
  MessageCircle,
  ShieldAlert,
  Flag,
  Gavel,
  Mail,
} from "lucide-react";
import { Container } from "@/components/shared/Container";
import { PageHeader } from "@/components/shared/PageHeader";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Community Guidelines",
  description:
    "Talery's Community Guidelines define respectful behavior, content standards, safety expectations, reporting, and enforcement on our platform.",
};

const guidelines = [
  {
    icon: Heart,
    title: "Be Respectful",
    description:
      "Treat fellow travelers, creators, and locals with kindness and respect. Talery is a global community built on shared curiosity and mutual appreciation.",
  },
  {
    icon: MessageCircle,
    title: "Communicate Constructively",
    description:
      "Share feedback, reviews, and recommendations in a constructive way. Disagreements are natural, but harassment, bullying, or personal attacks are not allowed.",
  },
  {
    icon: ShieldAlert,
    title: "Keep It Safe",
    description:
      "Do not share personal information publicly, arrange unsafe meetups, or encourage risky behavior. Report suspicious activity to help keep the community safe.",
  },
  {
    icon: Users,
    title: "Celebrate Diversity",
    description:
      "Respect different cultures, identities, backgrounds, and travel styles. Discrimination, hate speech, and intolerance have no place on Talery.",
  },
];

const contentStandards = [
  "Travel content should be authentic, original, and relevant to the community.",
  "Do not post misleading, fraudulent, or spam content.",
  "Respect intellectual property rights when sharing photos, videos, or written content.",
  "Avoid graphic, violent, sexually explicit, or otherwise offensive material.",
  "Do not use Talery to promote illegal activities, scams, or unauthorized commercial solicitation.",
];

const enforcement = [
  "Warning or educational notice for minor violations",
  "Temporary suspension of posting, messaging, or account features",
  "Permanent account termination for severe or repeated violations",
  "Reporting to law enforcement when required by law or necessary to protect safety",
];

export default function CommunityGuidelinesPage() {
  return (
    <main className="min-h-screen pb-20">
      <PageHeader
        badge="Legal"
        title="Community Guidelines"
        subtitle="Help us keep Talery a welcoming, safe, and inspiring place for travelers worldwide."
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
                    <Users className="h-5 w-5" />
                  </div>
                  <div className="space-y-4">
                    <h2 className="text-xl font-bold tracking-tight">Our Community Promise</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Talery thrives because of the travelers, creators, and explorers who share their journeys here. These guidelines exist to ensure everyone feels welcome, respected, and safe while discovering the world together.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      By using Talery, you agree to follow these guidelines as well as our Terms of Service, Privacy Policy, and Content Policy.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="text-2xl font-bold tracking-tight mb-6">Guiding Principles</h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {guidelines.map((item, index) => (
              <ScrollReveal key={item.title} delay={0.15 + index * 0.05}>
                <Card className="h-full glass-card border-primary/10 hover-lift">
                  <CardContent className="p-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
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
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <div className="space-y-4">
                    <h2 className="text-xl font-bold tracking-tight">Content Standards</h2>
                    <ul className="space-y-3 text-muted-foreground leading-relaxed">
                      {contentStandards.map((item, i) => (
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

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <ScrollReveal delay={0.25}>
              <Card className="h-full glass-card border-accent/10">
                <CardContent className="p-6 md:p-8">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-orange-500 mb-4">
                    <Flag className="h-5 w-5" />
                  </div>
                  <h2 className="text-xl font-bold tracking-tight mb-4">Reporting Concerns</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    If you see content or behavior that violates these guidelines, please report it using the reporting tools available throughout the platform. Our Trust & Safety team reviews reports and takes appropriate action.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <Card className="h-full glass-card border-primary/10">
                <CardContent className="p-6 md:p-8">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                    <Gavel className="h-5 w-5" />
                  </div>
                  <h2 className="text-xl font-bold tracking-tight mb-4">Enforcement</h2>
                  <ul className="space-y-3 text-muted-foreground leading-relaxed">
                    {enforcement.map((item, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.35}>
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
                        Questions about our community guidelines? Contact us:
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
