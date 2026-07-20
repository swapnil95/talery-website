import type { Metadata } from "next";
import Link from "next/link";
import {
  Heart,
  Shield,
  Users,
  Globe,
  Calendar,
  ArrowRight,
  MessageCircle,
  MapPin,
  Sparkles,
} from "lucide-react";
import { Container } from "@/components/shared/Container";
import { PageHeader } from "@/components/shared/PageHeader";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/shared/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Community",
  description:
    "Join the Talery travel community. Discover featured groups, upcoming events, and the guidelines that keep our community welcoming and safe.",
};

const guidelines = [
  {
    icon: Heart,
    title: "Be Respectful",
    desc: "Treat fellow travelers with kindness, curiosity, and respect for different cultures and perspectives.",
  },
  {
    icon: Shield,
    title: "Stay Safe",
    desc: "Protect your privacy, verify information, and report behavior that makes the community unsafe.",
  },
  {
    icon: Globe,
    title: "Travel Mindfully",
    desc: "Support local communities, minimize environmental impact, and leave places better than you found them.",
  },
  {
    icon: Sparkles,
    title: "Share Authentically",
    desc: "Post genuine experiences, give honest recommendations, and credit creators and locals appropriately.",
  },
];

const communities = [
  { name: "Solo Female Travelers", members: "24K", category: "Solo Travel" },
  { name: "Digital Nomad Hubs", members: "18K", category: "Remote Work" },
  { name: "Budget Backpackers", members: "32K", category: "Budget" },
  { name: "Luxury Escapes", members: "12K", category: "Luxury" },
  { name: "Foodie Adventures", members: "21K", category: "Culinary" },
  { name: "Adventure Seekers", members: "29K", category: "Adventure" },
];

const events = [
  { title: "Tokyo Meetup", date: "Feb 15, 2026", location: "Shibuya, Tokyo" },
  { title: "Creator Workshop: Europe", date: "Mar 4, 2026", location: "Lisbon, Portugal" },
  { title: "Solo Travel Summit", date: "Mar 22, 2026", location: "Online" },
  { title: "Adventure Week: Patagonia", date: "Apr 10, 2026", location: "El Chaltén, Argentina" },
];

export default function CommunityPage() {
  return (
    <main className="min-h-screen">
      <PageHeader
        badge="Community"
        title="Travel Together"
        subtitle="Connect with travelers who share your passions, join local events, and be part of a global community built on curiosity and respect."
      />

      {/* Guidelines */}
      <section className="section-padding">
        <Container>
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Community Guidelines
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
              The Spirit of Talery
            </h2>
          </ScrollReveal>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {guidelines.map((item) => (
              <StaggerItem key={item.title}>
                <Card className="h-full hover-lift">
                  <CardContent className="p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500/10 to-teal-500/10 text-primary mb-4">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* Featured Communities */}
      <section className="section-padding bg-muted/20 dark:bg-slate-950/30">
        <Container>
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-teal-500 text-sm font-medium mb-4">
              Featured Communities
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
              Find Your People
            </h2>
          </ScrollReveal>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {communities.map((community) => (
              <StaggerItem key={community.name}>
                <Card className="h-full hover-lift">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500/10 to-teal-500/10 text-primary">
                        <Users className="h-6 w-6" />
                      </div>
                      <Badge variant="outline">{community.category}</Badge>
                    </div>
                    <h3 className="font-semibold text-lg mb-1">{community.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {community.members} members
                    </p>
                    <Button variant="ghost" size="sm" className="px-0" asChild>
                      <Link href="#">
                        Join community <ArrowRight className="h-3 w-3 ml-1" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* Events */}
      <section className="section-padding">
        <Container>
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-orange-500 text-sm font-medium mb-4">
              Events
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
              Meet Up in Real Life
            </h2>
          </ScrollReveal>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {events.map((event) => (
              <StaggerItem key={event.title}>
                <Card className="h-full hover-lift">
                  <CardContent className="p-6">
                    <Calendar className="h-8 w-8 text-primary mb-4" />
                    <h3 className="font-semibold text-lg mb-3">{event.title}</h3>
                    <p className="text-sm text-muted-foreground flex items-center gap-2 mb-1">
                      <Calendar className="h-3 w-3" /> {event.date}
                    </p>
                    <p className="text-sm text-muted-foreground flex items-center gap-2">
                      <MapPin className="h-3 w-3" /> {event.location}
                    </p>
                  </CardContent>
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
                <MessageCircle className="h-12 w-12 mx-auto mb-4 opacity-90" />
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                  Join the Conversation
                </h2>
                <p className="text-lg opacity-90 mb-8">
                  Download the app and become part of a community that turns every trip into a shared
                  story.
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
