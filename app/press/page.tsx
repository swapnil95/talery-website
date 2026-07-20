import type { Metadata } from "next";
import Link from "next/link";
import {
  Download,
  Mail,
  Newspaper,
  Palette,
  Image as ImageIcon,
  ExternalLink,
  ArrowRight,
} from "lucide-react";
import { Container } from "@/components/shared/Container";
import { PageHeader } from "@/components/shared/PageHeader";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/shared/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";


export const metadata: Metadata = {
  title: "Press Kit",
  description:
    "Download Talery brand assets, read recent press coverage, and contact our media team.",
};

const assets = [
  { icon: ImageIcon, title: "Logo Pack", desc: "PNG, SVG, and monochrome versions of the Talery logo.", format: "ZIP" },
  { icon: Palette, title: "Brand Guidelines", desc: "Colors, typography, and usage rules for partners and press.", format: "PDF" },
  { icon: Newspaper, title: "Fact Sheet", desc: "Key company facts, milestones, and leadership bios.", format: "PDF" },
];

const news = [
  {
    title: "Talery Raises $12M to Build the Future of AI Travel",
    outlet: "TechCrunch",
    date: "Dec 15, 2025",
    href: "#",
  },
  {
    title: "How Talery Is Turning Creators Into Travel Agents",
    outlet: "The Verge",
    date: "Nov 28, 2025",
    href: "#",
  },
  {
    title: "Solo Travelers Are Flocking to AI-Powered Planners",
    outlet: "Condé Nast Traveler",
    date: "Oct 10, 2025",
    href: "#",
  },
];

export default function PressPage() {
  return (
    <main className="min-h-screen">
      <PageHeader
        badge="Press"
        title="Press Kit & Media Resources"
        subtitle="Official Talery brand assets, recent news, and contact information for journalists and partners."
      />

      {/* Brand Assets */}
      <section className="section-padding">
        <Container>
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Brand Assets
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
              Download Official Resources
            </h2>
          </ScrollReveal>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {assets.map((asset) => (
              <StaggerItem key={asset.title}>
                <Card className="h-full hover-lift">
                  <CardContent className="p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500/10 to-teal-500/10 text-primary mb-4">
                      <asset.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold text-lg mb-1">{asset.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{asset.desc}</p>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="#">
                        <Download className="h-4 w-4 mr-2" /> Download {asset.format}
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* Color Palette */}
      <section className="section-padding bg-muted/20 dark:bg-slate-950/30">
        <Container>
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-teal-500 text-sm font-medium mb-4">
              Colors
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
              Brand Palette
            </h2>
          </ScrollReveal>
          <StaggerContainer className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <StaggerItem>
              <Card className="overflow-hidden">
                <div className="h-32 bg-sky-500" />
                <CardContent className="p-4">
                  <p className="font-semibold">Sky Blue</p>
                  <p className="text-sm text-muted-foreground font-mono">#0EA5E9</p>
                </CardContent>
              </Card>
            </StaggerItem>
            <StaggerItem>
              <Card className="overflow-hidden">
                <div className="h-32 bg-teal-500" />
                <CardContent className="p-4">
                  <p className="font-semibold">Teal</p>
                  <p className="text-sm text-muted-foreground font-mono">#14B8A6</p>
                </CardContent>
              </Card>
            </StaggerItem>
            <StaggerItem>
              <Card className="overflow-hidden">
                <div className="h-32 bg-orange-500" />
                <CardContent className="p-4">
                  <p className="font-semibold">Orange</p>
                  <p className="text-sm text-muted-foreground font-mono">#F97316</p>
                </CardContent>
              </Card>
            </StaggerItem>
          </StaggerContainer>
        </Container>
      </section>

      {/* Media Contact */}
      <section className="section-padding">
        <Container>
          <ScrollReveal className="max-w-3xl mx-auto">
            <Card className="glass-card border-primary/10">
              <CardContent className="p-8 md:p-12 text-center">
                <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
                <h2 className="text-2xl sm:text-3xl font-bold mb-3">Media Contact</h2>
                <p className="text-muted-foreground mb-6">
                  For press inquiries, interview requests, and partnership opportunities, reach out to
                  our communications team.
                </p>
                <Button asChild size="lg">
                  <a href="mailto:press@talery.co">
                    press@talery.co <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </ScrollReveal>
        </Container>
      </section>

      {/* Recent News */}
      <section className="section-padding bg-muted/20 dark:bg-slate-950/30">
        <Container>
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-orange-500 text-sm font-medium mb-4">
              Recent News
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
              Talery in the Press
            </h2>
          </ScrollReveal>
          <StaggerContainer className="grid gap-4 max-w-4xl mx-auto">
            {news.map((item) => (
              <StaggerItem key={item.title}>
                <Card className="hover:border-primary/30 transition-colors">
                  <CardHeader className="p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <CardTitle className="text-lg mb-1">{item.title}</CardTitle>
                      <CardDescription>
                        {item.outlet} · {item.date}
                      </CardDescription>
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <a href={item.href} target="_blank" rel="noopener noreferrer">
                        Read <ExternalLink className="h-4 w-4 ml-2" />
                      </a>
                    </Button>
                  </CardHeader>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>
    </main>
  );
}
