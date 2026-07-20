import type { Metadata } from "next";
import {
  Accessibility,
  Eye,
  Keyboard,
  Smartphone,
  MessageSquare,
  Mail,
} from "lucide-react";
import { Container } from "@/components/shared/Container";
import { PageHeader } from "@/components/shared/PageHeader";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description:
    "Talery's Accessibility Statement outlines our commitment to making our platform accessible to all users, including those with disabilities.",
};

const features = [
  {
    icon: Eye,
    title: "Visual Accessibility",
    description:
      "High-contrast color combinations, readable typography, resizable text, and support for screen readers across key user flows.",
  },
  {
    icon: Keyboard,
    title: "Keyboard Navigation",
    description:
      "Full keyboard operability for navigation, forms, dialogs, and interactive components, with visible focus indicators.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description:
      "A mobile-first, responsive layout that adapts to different screen sizes, assistive technologies, and device orientations.",
  },
  {
    icon: Accessibility,
    title: "Semantic Structure",
    description:
      "Semantic HTML, ARIA labels, headings, and landmarks that help assistive technologies understand and navigate content.",
  },
];

const commitments = [
  "Designing and developing with accessibility in mind from the start.",
  "Testing with assistive technologies and automated accessibility tools.",
  "Providing alternative formats or support for users who encounter barriers.",
  "Training our team on inclusive design and accessibility best practices.",
  "Regularly reviewing and improving the accessibility of our platform.",
];

export default function AccessibilityPage() {
  return (
    <main className="min-h-screen pb-20">
      <PageHeader
        badge="Legal"
        title="Accessibility Statement"
        subtitle="Our commitment to an inclusive and accessible travel platform."
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
                    <Accessibility className="h-5 w-5" />
                  </div>
                  <div className="space-y-4">
                    <h2 className="text-xl font-bold tracking-tight">Our Commitment</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Talery is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards, including the Web Content Accessibility Guidelines (WCAG) 2.2 Level AA.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      We believe travel should be accessible to all, and that starts with a platform that works for all users, regardless of ability or assistive technology.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="text-2xl font-bold tracking-tight mb-6">Accessibility Features</h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {features.map((feature, index) => (
              <ScrollReveal key={feature.title} delay={0.15 + index * 0.05}>
                <Card className="h-full glass-card border-primary/10 hover-lift">
                  <CardContent className="p-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                      <feature.icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
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
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <div className="space-y-4">
                    <h2 className="text-xl font-bold tracking-tight">Feedback</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      We welcome your feedback on the accessibility of Talery. If you encounter any accessibility barriers or have suggestions for improvement, please let us know.
                    </p>
                    <ul className="space-y-3 text-muted-foreground leading-relaxed">
                      {commitments.map((item, i) => (
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
                        For accessibility feedback or assistance, please contact us:
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
