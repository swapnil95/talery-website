import type { Metadata } from "next";
import {
  Scale,
  FileText,
  RotateCcw,
  Ban,
  Mail,
} from "lucide-react";
import { Container } from "@/components/shared/Container";
import { PageHeader } from "@/components/shared/PageHeader";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "DMCA Policy",
  description:
    "Talery's DMCA Policy explains how to submit takedown notices, counter-notices, and our policy regarding repeat infringers.",
};

const noticeItems = [
  "A physical or electronic signature of the copyright owner or a person authorized to act on their behalf.",
  "Identification of the copyrighted work claimed to have been infringed.",
  "Identification of the infringing material and information reasonably sufficient to permit Talery to locate it.",
  "Your contact information, including address, telephone number, and email address.",
  "A statement that you have a good-faith belief that use of the material is not authorized by the copyright owner, its agent, or the law.",
  "A statement that the information in the notification is accurate, and under penalty of perjury, that you are authorized to act on behalf of the copyright owner.",
];

const counterItems = [
  "A physical or electronic signature.",
  "Identification of the material that has been removed or to which access has been disabled.",
  "A statement under penalty of perjury that you have a good-faith belief the material was removed or disabled as a result of mistake or misidentification.",
  "Your name, address, telephone number, and email address.",
  "A statement that you consent to the jurisdiction of the federal court in the district where you are located, or if outside the United States, the Northern District of California.",
];

export default function DMCAPage() {
  return (
    <main className="min-h-screen pb-20">
      <PageHeader
        badge="Legal"
        title="DMCA Policy"
        subtitle="Procedures for reporting and disputing copyright infringement on Talery."
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
                    <Scale className="h-5 w-5" />
                  </div>
                  <div className="space-y-4">
                    <h2 className="text-xl font-bold tracking-tight">Overview</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Talery complies with the Digital Millennium Copyright Act (DMCA). This policy describes how copyright owners can report infringing content, how users can dispute removals, and how we handle repeat infringers.
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
                    <h2 className="text-xl font-bold tracking-tight">Takedown Notice Requirements</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      To be effective, a DMCA takedown notice must be a written communication provided to our designated agent and must include substantially the following:
                    </p>
                    <ul className="space-y-3 text-muted-foreground leading-relaxed">
                      {noticeItems.map((item, i) => (
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
                    <RotateCcw className="h-5 w-5" />
                  </div>
                  <div className="space-y-4">
                    <h2 className="text-xl font-bold tracking-tight">Counter-Notice Procedure</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      If your content was removed due to a DMCA notice and you believe the removal was a mistake, you may submit a counter-notice. A valid counter-notice must include:
                    </p>
                    <ul className="space-y-3 text-muted-foreground leading-relaxed">
                      {counterItems.map((item, i) => (
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

          <ScrollReveal delay={0.25}>
            <Card className="glass-card border-primary/10 mb-8">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Ban className="h-5 w-5" />
                  </div>
                  <div className="space-y-4">
                    <h2 className="text-xl font-bold tracking-tight">Repeat Infringers</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      It is Talery&apos;s policy to terminate, in appropriate circumstances, the accounts of users who are repeat infringers. We also may limit access to the platform for users who submit abusive or fraudulent notices.
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
                    <h2 className="text-xl font-bold tracking-tight mb-3">Designated Agent</h2>
                    <div className="space-y-3 text-muted-foreground leading-relaxed">
                      <p>
                        DMCA notices and counter-notices should be sent to:
                      </p>
                      <ul className="space-y-1 pl-4">
                        <li>Email: legal@talery.co</li>
                        <li>Talery Inc., Attn: DMCA Agent</li>
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
