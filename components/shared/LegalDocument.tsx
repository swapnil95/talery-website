import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { PageHeader } from "@/components/shared/PageHeader";

export type LegalSection = { id: string; title: string; paragraphs: string[] };

export function LegalDocument({ title, subtitle, sections }: {
  title: string;
  subtitle: string;
  sections: LegalSection[];
}) {
  return (
    <main className="min-h-screen pb-20">
      <PageHeader badge="Legal" title={title} subtitle={subtitle} />
      <Container className="max-w-4xl pt-12 md:pt-16">
        {/* Policy text stays readable without JavaScript or scroll animations. */}
        <p className="mb-8 text-sm text-muted-foreground">
          Last updated: <time dateTime="2026-09-19">September 19, 2026</time>
        </p>
        <nav aria-label={`${title} contents`} className="mb-10 rounded-2xl border border-border bg-card p-6">
          <h2 className="mb-4 font-semibold">On this page</h2>
          <ol className="grid gap-3 sm:grid-cols-2">
            {sections.map((section, index) => (
              <li key={section.id}>
                <a className="text-sm text-primary underline underline-offset-4" href={`#${section.id}`}>
                  {index + 1}. {section.title}
                </a>
              </li>
            ))}
            <li><a className="text-sm text-primary underline underline-offset-4" href="#contact">Contact Talery</a></li>
          </ol>
        </nav>
        <div className="space-y-8">
          {sections.map((section, index) => (
            <section key={section.id} id={section.id} aria-labelledby={`${section.id}-title`} className="scroll-mt-32 rounded-2xl border border-border bg-card p-6 md:p-8">
              <h2 id={`${section.id}-title`} className="mb-4 text-xl font-bold tracking-tight">{index + 1}. {section.title}</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </section>
          ))}
          <section id="contact" className="scroll-mt-32 rounded-2xl border border-primary/20 bg-card p-6 md:p-8">
            <h2 className="mb-4 text-xl font-bold">Contact Talery</h2>
            <address className="mb-4 not-italic text-muted-foreground leading-relaxed">
              <span className="font-medium text-foreground">Talery Private Limited</span><br />
              CIN: U52290DL2026PTC466558<br />
              Registered office:<br />
              FL. NO. A3 U/G/F BACK SIDE<br />
              Property no. 220 KHNO 603<br />
              Sangam Vihar, Delhi 110080, India
            </address>
            <p className="mb-3 text-muted-foreground">Contact person: Aditya Dhal</p>
            <p className="mb-3 text-muted-foreground">
              Telephone: <a href="tel:+917008065412" className="text-primary underline underline-offset-4">+91 70080 65412</a>
            </p>
            <p className="text-muted-foreground leading-relaxed">
              For company enquiries, product support, legal questions, privacy requests,
              or content concerns, email{" "}
              <a href="mailto:hr@talery.co" className="text-primary underline underline-offset-4">hr@talery.co</a>.
              Please do not send passwords, payment-card details, or identity documents in your initial message.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm">
              <Link href="/legal/privacy" className="text-primary underline underline-offset-4">Privacy Policy</Link>
              <Link href="/legal/terms" className="text-primary underline underline-offset-4">Terms and Conditions</Link>
            </div>
          </section>
        </div>
      </Container>
    </main>
  );
}
