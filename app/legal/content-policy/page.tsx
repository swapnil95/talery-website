import type { Metadata } from "next";
import {
  FileText,
  CheckCircle,
  Ban,
  Copyright,
  Shield,
  MessageSquare,
  Mail,
} from "lucide-react";
import { Container } from "@/components/shared/Container";
import { PageHeader } from "@/components/shared/PageHeader";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Content Policy",
  description:
    "Talery's Content Policy defines acceptable content, prohibited content, copyright rules, moderation practices, and how to appeal decisions.",
};

const acceptableContent = [
  "Original travel photos, videos, itineraries, reviews, and stories",
  "Authentic recommendations and local tips that help other travelers",
  "Respectful questions, comments, and discussions about travel",
  "Creator content that complies with our Creator Terms and disclosure requirements",
];

const prohibitedContent = [
  "Hate speech, harassment, threats, or content that promotes violence or discrimination",
  "Sexually explicit, pornographic, or gratuitously violent material",
  "Misinformation, scams, fraud, or deceptive commercial content",
  "Content that infringes on intellectual property rights",
  "Spam, repetitive posts, or coordinated inauthentic behavior",
  "Private information shared without consent",
  "Content that encourages illegal activity or dangerous behavior",
];

const moderationActions = [
  "Removing content that violates this policy",
  "Restricting visibility or distribution of borderline content",
  "Issuing warnings, suspensions, or permanent bans",
  "Reporting illegal content to relevant authorities",
];

export default function ContentPolicyPage() {
  return (
    <main className="min-h-screen pb-20">
      <PageHeader
        badge="Legal"
        title="Content Policy"
        subtitle="What content is allowed on Talery and how we moderate it."
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
                    <FileText className="h-5 w-5" />
                  </div>
                  <div className="space-y-4">
                    <h2 className="text-xl font-bold tracking-tight">Purpose</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      This Content Policy sets the rules for what can be posted on Talery. It applies to all user-generated content, including profiles, posts, comments, reviews, itineraries, messages, and creator content.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <ScrollReveal delay={0.1}>
              <Card className="h-full glass-card border-secondary/10">
                <CardContent className="p-6 md:p-8">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/10 text-teal-500 mb-4">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <h2 className="text-xl font-bold tracking-tight mb-4">Acceptable Content</h2>
                  <ul className="space-y-3 text-muted-foreground leading-relaxed">
                    {acceptableContent.map((item, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <Card className="h-full glass-card border-accent/10">
                <CardContent className="p-6 md:p-8">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-orange-500 mb-4">
                    <Ban className="h-5 w-5" />
                  </div>
                  <h2 className="text-xl font-bold tracking-tight mb-4">Prohibited Content</h2>
                  <ul className="space-y-3 text-muted-foreground leading-relaxed">
                    {prohibitedContent.map((item, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.2}>
            <Card className="glass-card border-primary/10 mb-8">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Copyright className="h-5 w-5" />
                  </div>
                  <div className="space-y-4">
                    <h2 className="text-xl font-bold tracking-tight">Copyright and Intellectual Property</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      You must own or have permission to share any content you post on Talery. Do not upload photos, videos, music, text, or other material that infringes on someone else&apos;s copyrights, trademarks, or other rights.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      If you believe content on Talery infringes your rights, please submit a takedown notice as described in our Copyright and DMCA Policy.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <ScrollReveal delay={0.25}>
              <Card className="h-full glass-card border-secondary/10">
                <CardContent className="p-6 md:p-8">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/10 text-teal-500 mb-4">
                    <Shield className="h-5 w-5" />
                  </div>
                  <h2 className="text-xl font-bold tracking-tight mb-4">Moderation</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We use a combination of automated tools and human review to enforce this policy. Moderation actions may include:
                  </p>
                  <ul className="space-y-3 text-muted-foreground leading-relaxed">
                    {moderationActions.map((item, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <Card className="h-full glass-card border-primary/10">
                <CardContent className="p-6 md:p-8">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <h2 className="text-xl font-bold tracking-tight mb-4">Appeals</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    If you believe your content was removed or your account was actioned in error, you may submit an appeal through our support channels. We review appeals fairly and respond as quickly as possible.
                  </p>
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
                        Questions about this Content Policy? Contact us:
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
