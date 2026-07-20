import type { Metadata } from "next";
import Link from "next/link";
import { Map, Compass, Mountain, Camera, Coffee, Umbrella, ArrowRight, Star } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { PageHeader } from "@/components/shared/PageHeader";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/shared/ScrollReveal";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Travel Guides",
  description:
    "Explore curated travel guides for destinations around the world. Find itineraries, local tips, and insider recommendations from Talery creators.",
};

const categories = [
  { icon: Compass, name: "City Breaks", count: 42 },
  { icon: Mountain, name: "Adventure", count: 28 },
  { icon: Coffee, name: "Food & Drink", count: 35 },
  { icon: Umbrella, name: "Beach & Relax", count: 19 },
  { icon: Camera, name: "Photography", count: 24 },
  { icon: Map, name: "Road Trips", count: 16 },
];

const featuredGuides = [
  {
    title: "72 Hours in Lisbon",
    author: "Sofia Andersson",
    category: "City Breaks",
    rating: 4.9,
    gradient: "from-sky-400 to-teal-400",
  },
  {
    title: "Iceland Ring Road Itinerary",
    author: "Marcus Chen",
    category: "Road Trips",
    rating: 4.8,
    gradient: "from-teal-400 to-indigo-400",
  },
  {
    title: "Tokyo Food Lover's Guide",
    author: "Yuki Tanaka",
    category: "Food & Drink",
    rating: 4.9,
    gradient: "from-orange-400 to-sky-400",
  },
  {
    title: "Patagonia Trekking Handbook",
    author: "Alex Rivera",
    category: "Adventure",
    rating: 5.0,
    gradient: "from-emerald-400 to-teal-400",
  },
  {
    title: "Bali Digital Nomad Guide",
    author: "Priya Sharma",
    category: "Beach & Relax",
    rating: 4.7,
    gradient: "from-violet-400 to-orange-400",
  },
  {
    title: "Paris Photography Walks",
    author: "Lucas Bernard",
    category: "Photography",
    rating: 4.8,
    gradient: "from-pink-400 to-sky-400",
  },
];

export default function GuidesPage() {
  return (
    <main className="min-h-screen">
      <PageHeader
        badge="Travel Guides"
        title="Curated By Travelers, For Travelers"
        subtitle="Browse destination guides, itineraries, and local secrets from the Talery creator community."
      />

      {/* Categories */}
      <section className="section-padding">
        <Container>
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Categories
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
              Explore By Interest
            </h2>
          </ScrollReveal>
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <StaggerItem key={category.name}>
                <Link href="#" className="block group">
                  <Card className="h-full text-center hover-lift">
                    <CardContent className="p-5">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500/10 to-teal-500/10 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform">
                        <category.icon className="h-6 w-6" />
                      </div>
                      <h3 className="font-semibold text-sm">{category.name}</h3>
                      <p className="text-xs text-muted-foreground">{category.count} guides</p>
                    </CardContent>
                  </Card>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* Featured Guides */}
      <section className="section-padding bg-muted/20 dark:bg-slate-950/30">
        <Container>
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-teal-500 text-sm font-medium mb-4">
              Featured
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
              Top-Rated Guides This Month
            </h2>
          </ScrollReveal>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredGuides.map((guide) => (
              <StaggerItem key={guide.title}>
                <Link href="#" className="block group h-full">
                  <Card className="h-full overflow-hidden hover-lift">
                    <div
                      className={`h-48 bg-gradient-to-br ${guide.gradient} opacity-90 group-hover:scale-105 transition-transform duration-500`}
                    />
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <Badge variant="default">{guide.category}</Badge>
                        <span className="text-xs font-medium flex items-center gap-1">
                          <Star className="h-3 w-3 text-orange-500 fill-orange-500" /> {guide.rating}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {guide.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">by {guide.author}</p>
                      <span className="text-sm font-semibold text-primary inline-flex items-center gap-1">
                        View guide <ArrowRight className="h-3 w-3" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>
    </main>
  );
}
