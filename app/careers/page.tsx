import type { Metadata } from "next";
import Link from "next/link";
import {
  Briefcase,
  Globe,
  Heart,
  Zap,
  Users,
  Coffee,
  Plane,
  ArrowRight,
  MapPin,
  Clock,
} from "lucide-react";
import { Container } from "@/components/shared/Container";
import { PageHeader } from "@/components/shared/PageHeader";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/shared/ScrollReveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Talery and help build the future of AI-powered social travel. Explore open roles across engineering, product, design, and community.",
};

const benefits = [
  { icon: Globe, title: "Remote-First", desc: "Work from anywhere with flexible schedules and async collaboration." },
  { icon: Heart, title: "Travel Stipend", desc: "Annual budget to explore new destinations and test our own product." },
  { icon: Zap, title: "Growth Budget", desc: "Learning allowance for courses, conferences, books, and coaching." },
  { icon: Users, title: "Equity", desc: "Meaningful ownership in a company shaping the future of travel." },
  { icon: Coffee, title: "Wellness", desc: "Mental health support, fitness allowance, and generous time off." },
  { icon: Plane, title: "Team Retreats", desc: "Quarterly offsites in inspiring locations around the world." },
];

const roles = [
  { title: "Senior Frontend Engineer", team: "Engineering", location: "Remote", type: "Full-time" },
  { title: "AI Product Manager", team: "Product", location: "Remote", type: "Full-time" },
  { title: "Travel Community Lead", team: "Community", location: "Remote", type: "Full-time" },
  { title: "UX Designer", team: "Design", location: "Remote", type: "Full-time" },
  { title: "Backend Engineer", team: "Engineering", location: "Remote", type: "Full-time" },
  { title: "Content Marketing Manager", team: "Marketing", location: "Remote", type: "Full-time" },
];

export default function CareersPage() {
  return (
    <main className="min-h-screen">
      <PageHeader
        badge="Careers"
        title="Build the Future of Travel"
        subtitle="Join a remote-first team of travelers, technologists, and storytellers creating the next generation of travel experiences."
      />

      {/* Culture */}
      <section className="section-padding">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Our Culture
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
                Work Where You Belong
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We believe great ideas come from diverse perspectives and lived experiences. At Talery,
                you will find a culture of curiosity, autonomy, and radical transparency — all while
                building something millions of travelers will love.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge variant="secondary">Remote-first</Badge>
                <Badge variant="default">Async-friendly</Badge>
                <Badge variant="accent">Travel-obsessed</Badge>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div className="grid grid-cols-2 gap-4">
                <div className="glass-card rounded-2xl p-6 text-center">
                  <p className="text-3xl font-bold text-primary">25+</p>
                  <p className="text-sm text-muted-foreground">Countries represented</p>
                </div>
                <div className="glass-card rounded-2xl p-6 text-center">
                  <p className="text-3xl font-bold text-teal-500">4.9</p>
                  <p className="text-sm text-muted-foreground">Employee NPS</p>
                </div>
                <div className="glass-card rounded-2xl p-6 text-center">
                  <p className="text-3xl font-bold text-orange-500">Unlimited</p>
                  <p className="text-sm text-muted-foreground">PTO policy</p>
                </div>
                <div className="glass-card rounded-2xl p-6 text-center">
                  <p className="text-3xl font-bold">$2K</p>
                  <p className="text-sm text-muted-foreground">Annual travel stipend</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-muted/20 dark:bg-slate-950/30">
        <Container>
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-teal-500 text-sm font-medium mb-4">
              Benefits
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
              Why Talery?
            </h2>
          </ScrollReveal>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <StaggerItem key={benefit.title}>
                <Card className="h-full hover-lift">
                  <CardContent className="p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500/10 to-teal-500/10 text-primary mb-4">
                      <benefit.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{benefit.desc}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* Open Positions */}
      <section className="section-padding">
        <Container>
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-orange-500 text-sm font-medium mb-4">
              Open Positions
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
              Find Your Next Adventure
            </h2>
          </ScrollReveal>
          <StaggerContainer className="grid gap-4 max-w-4xl mx-auto">
            {roles.map((role) => (
              <StaggerItem key={role.title}>
                <Card className="hover:border-primary/30 transition-colors">
                  <CardHeader className="p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Briefcase className="h-4 w-4 text-primary" />
                        {role.title}
                      </CardTitle>
                      <CardDescription className="mt-1 flex flex-wrap items-center gap-3">
                        <span>{role.team}</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" /> {role.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" /> {role.type}
                        </span>
                      </CardDescription>
                    </div>
                    <Button asChild>
                      <Link href="/contact">
                        Apply <ArrowRight className="h-4 w-4" />
                      </Link>
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
