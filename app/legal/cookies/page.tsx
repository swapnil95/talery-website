import type { Metadata } from "next";
import {
  Cookie,
  Settings,
  Shield,
  Eye,
  BarChart3,
  Megaphone,
  ExternalLink,
  Mail,
} from "lucide-react";
import { Container } from "@/components/shared/Container";
import { PageHeader } from "@/components/shared/PageHeader";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Talery's Cookie Policy explains how we use cookies and similar technologies to operate, analyze, and improve our AI-powered social travel platform.",
};

const cookieTypes = [
  {
    icon: Shield,
    title: "Essential Cookies",
    description:
      "Necessary for the platform to function. They enable authentication, security, session management, and core features such as account access and trip saving.",
  },
  {
    icon: Eye,
    title: "Preference Cookies",
    description:
      "Remember your settings and choices, such as language, region, theme, and display preferences, to provide a more personalized experience.",
  },
  {
    icon: BarChart3,
    title: "Analytics Cookies",
    description:
      "Help us understand how visitors interact with Talery by collecting anonymized data about page views, features used, errors, and performance.",
  },
  {
    icon: Megaphone,
    title: "Marketing Cookies",
    description:
      "Used to deliver relevant advertisements, measure campaign effectiveness, and track conversions across Talery and partner platforms.",
  },
];

const thirdParties = [
  "Analytics providers such as Google Analytics and Amplitude",
  "Advertising and social media platforms where permitted",
  "Authentication and security services",
  "Payment processors for subscription and creator transactions",
];

export default function CookiesPage() {
  return (
    <main className="min-h-screen pb-20">
      <PageHeader
        badge="Legal"
        title="Cookie Policy"
        subtitle="How Talery uses cookies and similar technologies."
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
                    <Cookie className="h-5 w-5" />
                  </div>
                  <div className="space-y-4">
                    <h2 className="text-xl font-bold tracking-tight">What Are Cookies?</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Cookies are small text files placed on your device when you visit a website or use an app. They help us recognize your device, remember your preferences, understand how you use Talery, and improve your experience.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      In addition to cookies, we use similar technologies such as local storage, pixels, and web beacons for these purposes.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="text-2xl font-bold tracking-tight mb-6">Types of Cookies We Use</h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {cookieTypes.map((type, index) => (
              <ScrollReveal key={type.title} delay={0.15 + index * 0.05}>
                <Card className="h-full glass-card border-primary/10 hover-lift">
                  <CardContent className="p-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                      <type.icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{type.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {type.description}
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
                    <Settings className="h-5 w-5" />
                  </div>
                  <div className="space-y-4">
                    <h2 className="text-xl font-bold tracking-tight">Managing Cookies</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      You can manage your cookie preferences through our cookie consent banner or your browser settings. Most browsers allow you to block, delete, or be notified before a cookie is stored.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Please note that disabling essential cookies may prevent Talery from functioning correctly. Disabling analytics or marketing cookies will not affect your ability to use core platform features.
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
                    <ExternalLink className="h-5 w-5" />
                  </div>
                  <div className="space-y-4">
                    <h2 className="text-xl font-bold tracking-tight">Third-Party Cookies</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Talery may allow trusted third parties to set cookies for the following purposes:
                    </p>
                    <ul className="space-y-3 text-muted-foreground leading-relaxed">
                      {thirdParties.map((item, i) => (
                        <li key={i} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-muted-foreground leading-relaxed">
                      These third parties are responsible for their own cookies and data practices. We encourage you to review their privacy policies.
                    </p>
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
                    <h2 className="text-xl font-bold tracking-tight mb-3">Changes and Contact</h2>
                    <div className="space-y-3 text-muted-foreground leading-relaxed">
                      <p>
                        We may update this Cookie Policy as our Services or cookie practices evolve. Please review this page periodically for the latest information.
                      </p>
                      <p>
                        If you have questions about our use of cookies, contact us:
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
