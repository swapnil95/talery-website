import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/shared/Container";
import { PageHeader } from "@/components/shared/PageHeader";
import { StaggerContainer, StaggerItem } from "@/components/shared/ScrollReveal";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Sparkles, Bug, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Changelog",
  description:
    "Stay up to date with the latest Talery releases, new features, improvements, and bug fixes.",
};

const releases = [
  {
    version: "v2.4.0",
    date: "January 10, 2026",
    type: "feature",
    title: "AI Itinerary Sharing",
    description:
      "Share your AI-generated itineraries with a public link, embed them in blog posts, and export them as PDFs.",
    highlights: ["Public itinerary links", "PDF export", "Embed widget", "Social sharing cards"],
  },
  {
    version: "v2.3.2",
    date: "December 22, 2025",
    type: "fix",
    title: "Offline Mode Improvements",
    description:
      "Fixed several issues with offline map rendering and itinerary syncing for Explorer and Creator Pro users.",
    highlights: ["Faster sync recovery", "Offline map tile caching", "Better error messaging"],
  },
  {
    version: "v2.3.0",
    date: "December 5, 2025",
    type: "feature",
    title: "Creator Payout Dashboard",
    description:
      "Creators can now track earnings, view payout history, and manage tax information from one place.",
    highlights: ["Earnings overview", "Payout history", "Tax document management"],
  },
  {
    version: "v2.2.1",
    date: "November 18, 2025",
    type: "improvement",
    title: "Faster AI Planning",
    description:
      "Reduced itinerary generation time by 40% and improved recommendation relevance for multi-city trips.",
    highlights: ["40% faster generation", "Better multi-city logic", "Improved caching"],
  },
  {
    version: "v2.2.0",
    date: "November 1, 2025",
    type: "feature",
    title: "Travel Communities Launch",
    description:
      "Introduced destination and interest-based communities where travelers can ask questions and share tips.",
    highlights: ["Community creation", "Discussion threads", "Moderation tools"],
  },
  {
    version: "v2.1.0",
    date: "October 12, 2025",
    type: "feature",
    title: "Group Trip Budget Pooling",
    description:
      "Collect, split, and track group expenses directly inside your shared itinerary.",
    highlights: ["Shared expense tracking", "Split calculations", "Receipt uploads"],
  },
];

const typeConfig: Record<
  string,
  { label: string; icon: React.ElementType; color: string }
> = {
  feature: { label: "Feature", icon: Sparkles, color: "bg-primary/10 text-primary" },
  improvement: { label: "Improvement", icon: Zap, color: "bg-teal-500/10 text-teal-500" },
  fix: { label: "Bug Fix", icon: Bug, color: "bg-orange-500/10 text-orange-500" },
};

export default function ChangelogPage() {
  return (
    <main className="min-h-screen">
      <PageHeader
        badge="Changelog"
        title="Release Notes"
        subtitle="The latest updates, improvements, and fixes from the Talery team."
      />

      <section className="section-padding">
        <Container>
          <StaggerContainer className="max-w-3xl mx-auto space-y-8">
            {releases.map((release) => {
              const config = typeConfig[release.type];
              const Icon = config.icon;
              return (
                <StaggerItem key={release.version}>
                  <Card className="hover-lift">
                    <CardHeader className="p-6 pb-0">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <Badge variant="outline">{release.version}</Badge>
                        <span className="text-sm text-muted-foreground">{release.date}</span>
                        <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold ${config.color}`}>
                          <Icon className="h-3 w-3" /> {config.label}
                        </span>
                      </div>
                      <CardTitle className="text-xl">{release.title}</CardTitle>
                      <CardDescription className="mt-1">{release.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="p-6">
                      <ul className="space-y-2">
                        {release.highlights.map((highlight) => (
                          <li key={highlight} className="flex items-center gap-2 text-sm">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </Container>
      </section>
    </main>
  );
}
