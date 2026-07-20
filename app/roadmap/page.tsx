import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/shared/Container";
import { PageHeader } from "@/components/shared/PageHeader";
import { StaggerContainer, StaggerItem } from "@/components/shared/ScrollReveal";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CheckCircle2, Clock, Rocket } from "lucide-react";

export const metadata: Metadata = {
  title: "Roadmap",
  description:
    "See what is next for Talery. Explore our product roadmap, upcoming features, and recently shipped improvements.",
};

const quarters = [
  {
    quarter: "Q1 2026",
    status: "In Progress",
    statusColor: "default",
    items: [
      "AI itinerary sharing and embedding",
      "Improved offline maps and downloads",
      "Creator payout dashboard v1",
      "Mobile app beta launch",
    ],
  },
  {
    quarter: "Q2 2026",
    status: "Planned",
    statusColor: "secondary",
    items: [
      "Group trip expense splitting",
      "Real-time collaborative editing",
      "AI voice assistant for travel queries",
      "Integration with major hotel booking partners",
    ],
  },
  {
    quarter: "Q3 2026",
    status: "Planned",
    statusColor: "secondary",
    items: [
      "AI-generated travel videos",
      "Localized recommendations in 20 languages",
      "Advanced creator analytics",
      "Loyalty and rewards program",
    ],
  },
  {
    quarter: "Q4 2026",
    status: "Exploring",
    statusColor: "outline",
    items: [
      "Augmented reality city guides",
      "Enterprise white-label solutions",
      "Carbon footprint tracking",
      "AI trip insurance recommendations",
    ],
  },
];

const statusIcons: Record<string, React.ReactNode> = {
  "In Progress": <Clock className="h-5 w-5 text-primary" />,
  Planned: <Rocket className="h-5 w-5 text-teal-500" />,
  Exploring: <CheckCircle2 className="h-5 w-5 text-muted-foreground" />,
};

export default function RoadmapPage() {
  return (
    <main className="min-h-screen">
      <PageHeader
        badge="Roadmap"
        title="Where We Are Headed"
        subtitle="A transparent look at what we are building next. Have feedback? We would love to hear it."
      />

      <section className="section-padding">
        <Container>
          <StaggerContainer className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {quarters.map((quarter) => (
              <StaggerItem key={quarter.quarter}>
                <Card className="h-full hover-lift">
                  <CardHeader className="p-6 pb-0 flex flex-row items-start justify-between">
                    <div>
                      <CardTitle className="text-2xl">{quarter.quarter}</CardTitle>
                      <CardDescription className="mt-1">Talery product roadmap</CardDescription>
                    </div>
                    <Badge variant={quarter.statusColor as "default" | "secondary" | "outline"}>
                      {quarter.status}
                    </Badge>
                  </CardHeader>
                  <CardContent className="p-6">
                    <ul className="space-y-4">
                      {quarter.items.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          {statusIcons[quarter.status]}
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>
    </main>
  );
}
