import type { Metadata } from "next";
import {
  Copyright,
  FileText,
  AlertCircle,
  CheckCircle,
  XCircle,
  Mail,
} from "lucide-react";
import { Container } from "@/components/shared/Container";
import { PageHeader } from "@/components/shared/PageHeader";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Copyright Policy",
  description:
    "Talery's Copyright Policy explains how we protect intellectual property and respond to copyright infringement claims.",
};

const takedownRequirements = [
  "A physical or electronic signature of the copyright owner or authorized agent.",
  "Identification of the copyrighted work claimed to have been infringed.",
  "Identification of the material on Talery that is claimed to be infringing, with enough detail for us to locate it.",
  "Your contact information, including address, telephone number, and email address.",
  "A statement that you have a good-faith belief that the use is not authorized by the copyright owner, its agent, or the law.",
  "A statement, under penalty of perjury, that the information in the notice is accurate and that you are authorized to act on behalf of the copyright owner.",
];

const counterNoticeRequirements = [
  "Your physical or electronic signature.",
  "Identification of the material that was removed and its location before removal.",
  "A statement, under penalty of perjury, that you have a good-faith belief the material was removed by mistake or misidentification.",
  "Your name, address, telephone number, and email address.",
  "A statement that you consent to the jurisdiction of the federal court in your district, or the Northern District of California if outside the United States.",
];

export default function CopyrightPage() {
  return (
    <main className="min-h-screen pb-20">
      <PageHeader
        badge="Legal"
        title="Copyright Policy"
        subtitle="How Talery handles copyright infringement and protects intellectual property."
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
                    <Copyright className="h-5 w-5" />
                  </div>
                  <div className="space-y-4">
                    <h2 className="text-xl font-bold tracking-tight">Respect for Intellectual Property</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Talery respects the intellectual property rights of others and expects users of our platform to do the same. We respond to notices of alleged copyright infringement in accordance with the Digital Millennium Copyright Act (DMCA) and other applicable laws.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <Card className="glass-card border-secondary/10 mb-8">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-secondary/10 text-teal-500">
                    <FileText className="h-5 w-5" />
                  </div>
                  <div className="space-y-4">
                    <h2 className="text-xl font-bold tracking-tight">DMCA Takedown Notice Requirements</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      If you believe that content on Talery infringes your copyright, please send a written notice to our designated agent containing the following:
                    </p>
                    <ul className="space-y-3 text-muted-foreground leading-relaxed">
                      {takedownRequirements.map((item, i) => (
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

          <ScrollReveal delay={0.2}>
            <Card className="glass-card border-accent/10 mb-8">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-orange-500">
                    <AlertCircle className="h-5 w-5" />
                  </div>
                  <div className="space-y-4">
                    <h2 className="text-xl font-bold tracking-tight">Counter-Notices</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      If you believe your content was removed by mistake or misidentification, you may submit a counter-notice. Your counter-notice must include:
                    </p>
                    <ul className="space-y-3 text-muted-foreground leading-relaxed">
                      {counterNoticeRequirements.map((item, i) => (
                        <li key={i} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />
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
              <Card className="h-full glass-card border-primary/10">
                <CardContent className="p-6 md:p-8">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <h2 className="text-xl font-bold tracking-tight mb-4">Repeat Infringers</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Talery maintains a policy to terminate the accounts of users who are repeat copyright infringers in appropriate circumstances.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <Card className="h-full glass-card border-primary/10">
                <CardContent className="p-6 md:p-8">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                    <XCircle className="h-5 w-5" />
                  </div>
                  <h2 className="text-xl font-bold tracking-tight mb-4">Misrepresentation</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Please be aware that under Section 512(f) of the DMCA, any person who knowingly materially misrepresents that material is infringing may be liable for damages.
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
                    <h2 className="text-xl font-bold tracking-tight mb-3">Designated Agent Contact</h2>
                    <div className="space-y-3 text-muted-foreground leading-relaxed">
                      <p>
                        Copyright notices and counter-notices should be sent to:
                      </p>
                      <ul className="space-y-1 pl-4">
                        <li>Email: legal@talery.co</li>
                        <li>Talery Inc., Attn: Copyright Agent</li>
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
