import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { PageHeader } from "@/components/shared/PageHeader";
import { StaggerContainer, StaggerItem } from "@/components/shared/ScrollReveal";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Travel tips, product updates, creator stories, and AI travel insights from the Talery team.",
};

const posts = [
  {
    slug: "future-of-ai-travel",
    title: "The Future of AI Travel Planning",
    excerpt:
      "How large language models are reshaping the way we research, plan, and experience trips.",
    category: "AI",
    date: "Jan 12, 2026",
    gradient: "from-sky-400 to-teal-400",
  },
  {
    slug: "hidden-gems-europe",
    title: "10 Hidden Gems in Europe for 2026",
    excerpt:
      "Skip the crowds and discover underrated villages, coastlines, and mountain towns across Europe.",
    category: "Destinations",
    date: "Jan 8, 2026",
    gradient: "from-teal-400 to-orange-400",
  },
  {
    slug: "creator-economy-travel",
    title: "How Creators Are Building Travel Businesses",
    excerpt:
      "From sponsored trips to premium guides, creators are turning wanderlust into sustainable income.",
    category: "Creators",
    date: "Dec 28, 2025",
    gradient: "from-orange-400 to-sky-400",
  },
  {
    slug: "group-trip-budgeting",
    title: "Group Trip Budgeting Without the Drama",
    excerpt:
      "Practical strategies for splitting costs, tracking expenses, and keeping friendships intact.",
    category: "Tips",
    date: "Dec 15, 2025",
    gradient: "from-sky-400 to-indigo-400",
  },
  {
    slug: "sustainable-travel-guide",
    title: "A Practical Guide to Sustainable Travel",
    excerpt:
      "Small choices that reduce your footprint while deepening your connection to places you visit.",
    category: "Sustainability",
    date: "Dec 2, 2025",
    gradient: "from-teal-400 to-emerald-400",
  },
  {
    slug: "talery-product-update",
    title: "Talery Product Update: Q4 2025",
    excerpt:
      "New AI itineraries, improved offline mode, and fresh creator tools — here is what shipped.",
    category: "Product",
    date: "Nov 20, 2025",
    gradient: "from-violet-400 to-sky-400",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <PageHeader
        badge="Blog"
        title="Stories & Insights"
        subtitle="Travel inspiration, product updates, and creator spotlights from the Talery community."
      />

      <section className="section-padding">
        <Container>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <StaggerItem key={post.slug}>
                <Link href={`/blog/${post.slug}`} className="block group h-full">
                  <Card className="h-full overflow-hidden hover-lift">
                    <div
                      className={`h-48 bg-gradient-to-br ${post.gradient} opacity-90 group-hover:scale-105 transition-transform duration-500`}
                    />
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <Badge variant="default">{post.category}</Badge>
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Calendar className="h-3 w-3" /> {post.date}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        {post.excerpt}
                      </p>
                      <span className="text-sm font-semibold text-primary inline-flex items-center gap-1">
                        Read article <ArrowRight className="h-3 w-3" />
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
