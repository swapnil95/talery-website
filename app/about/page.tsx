import type { Metadata } from "next";
import Link from "next/link";
import {
  Compass,
  Heart,
  Sparkles,
  Users,
  Globe,
  Shield,
  Zap,
  Target,
  ArrowRight,
} from "lucide-react";
import { Container } from "@/components/shared/Container";
import { PageHeader } from "@/components/shared/PageHeader";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/shared/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet the team behind Talery — the AI-powered social travel platform reimagining how the world plans, shares, and experiences travel.",
};

const values = [
  {
    icon: Sparkles,
    title: "AI-First",
    desc: "We believe artificial intelligence should remove friction from travel planning, not add to it.",
  },
  {
    icon: Users,
    title: "Community-Driven",
    desc: "Every feature we build is shaped by the travelers, creators, and explorers who use Talery.",
  },
  {
    icon: Heart,
    title: "Purposeful Travel",
    desc: "We champion experiences that are meaningful, sustainable, and respectful of local cultures.",
  },
  {
    icon: Shield,
    title: "Trust & Safety",
    desc: "Your data, your trips, and your community interactions are protected by design.",
  },
];

const team = [
  { name: "Alex Rivera", role: "Co-Founder & CEO", initials: "AR" },
  { name: "Priya Sharma", role: "Co-Founder & CTO", initials: "PS" },
  { name: "Marcus Chen", role: "Head of Product", initials: "MC" },
  { name: "Sofia Andersson", role: "Head of Community", initials: "SA" },
];

const investors = [
  "Horizon Ventures",
  "Northstar Capital",
  "Global Founders Fund",
  "Travel Tech Angels",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <PageHeader
        badge="About Talery"
        title="Travel, Reimagined"
        subtitle="We are building the most intelligent, social, and delightful way to discover, plan, and share trips around the world."
      />

      {/* Our Story */}
      <section className="section-padding relative overflow-hidden">
        <Container className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Our Story
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
                Born From a Missed Connection
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Talery began when two backpackers missed the same sunset ferry in Lisbon. Stranded
                  for a night, they realized the best travel moments rarely come from spreadsheets —
                  they come from people, spontaneity, and a little bit of local magic.
                </p>
                <p>
                  Today, Talery combines generative AI with a passionate global community to turn any
                  trip idea into a living, shareable journey. From solo explorers to creator-led group
                  adventures, we are building the future of travel, one story at a time.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-sky-500/20 via-teal-500/20 to-orange-500/20 flex items-center justify-center">
                <div className="glass-card rounded-2xl p-8 max-w-xs text-center">
                  <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                  <p className="text-3xl font-bold">150+</p>
                  <p className="text-sm text-muted-foreground">Countries explored by Talery travelers</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-muted/20 dark:bg-slate-950/30">
        <Container>
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal>
              <Card className="h-full glass-card border-primary/10">
                <CardContent className="p-8">
                  <Target className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-2xl font-bold mb-3">Our Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To empower every traveler with AI-driven tools and a supportive community so they
                    can plan less, experience more, and share stories that inspire others.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <Card className="h-full glass-card border-secondary/10">
                <CardContent className="p-8">
                  <Compass className="h-10 w-10 text-teal-500 mb-4" />
                  <h3 className="text-2xl font-bold mb-3">Our Vision</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    A world where travel planning is joyful, accessible, and deeply personal — where
                    technology and human connection work hand in hand.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="section-padding">
        <Container>
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-teal-500 text-sm font-medium mb-4">
              Our Values
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
              What Guides Us
            </h2>
          </ScrollReveal>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <Card className="h-full hover-lift">
                  <CardContent className="p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500/10 to-teal-500/10 text-primary mb-4">
                      <value.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{value.desc}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* Team */}
      <section className="section-padding bg-muted/20 dark:bg-slate-950/30">
        <Container>
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-orange-500 text-sm font-medium mb-4">
              The Team
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
              Meet the Travelers Building Talery
            </h2>
          </ScrollReveal>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <StaggerItem key={member.name}>
                <Card className="h-full text-center hover-lift">
                  <CardContent className="p-6">
                    <div className="h-24 w-24 rounded-full bg-gradient-to-br from-sky-500 to-teal-500 text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                      {member.initials}
                    </div>
                    <h3 className="font-semibold text-lg">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* Investors */}
      <section className="section-padding">
        <Container>
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Investors
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
              Backed by World-Class Partners
            </h2>
          </ScrollReveal>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {investors.map((investor) => (
              <StaggerItem key={investor}>
                <Card className="h-full flex items-center justify-center p-6 hover-lift">
                  <Zap className="h-6 w-6 text-primary mr-3" />
                  <span className="font-semibold">{investor}</span>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <Container>
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-sky-500 to-teal-500 text-white p-10 md:p-16 text-center">
              <div className="relative z-10 max-w-2xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                  Join the Adventure
                </h2>
                <p className="text-lg opacity-90 mb-8">
                  Be part of the community shaping the future of travel.
                </p>
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/#waitlist">
                    Get Early Access <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </main>
  );
}
