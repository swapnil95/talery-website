"use client";

import { useState } from "react";
import { Search, Plane, CreditCard, Users, Wrench, FileText, HelpCircle, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

const categories = [
  { icon: Plane, title: "Getting Started", articles: 12 },
  { icon: CreditCard, title: "Billing & Subscriptions", articles: 8 },
  { icon: Users, title: "Account & Profile", articles: 10 },
  { icon: Wrench, title: "Troubleshooting", articles: 15 },
  { icon: FileText, title: "Creator Tools", articles: 9 },
  { icon: HelpCircle, title: "Safety & Policies", articles: 11 },
];

const popularArticles = [
  "How do I create my first AI itinerary?",
  "What is included in each subscription plan?",
  "How do I reset my password?",
  "Can I use Talery offline?",
  "How do payouts work for creators?",
];

export function SupportClient() {
  const [query, setQuery] = useState("");

  return (
    <section className="section-padding">
      {/* Search */}
      <div className="max-w-2xl mx-auto mb-16">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search help articles..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-12 h-14 text-base rounded-2xl"
          />
        </div>
      </div>

      {/* Categories */}
      <div className="mb-20">
        <h2 className="text-2xl font-bold text-center mb-8">Browse By Topic</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Card key={category.title} className="hover-lift cursor-pointer">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500/10 to-teal-500/10 text-primary">
                  <category.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold">{category.title}</h3>
                  <p className="text-sm text-muted-foreground">{category.articles} articles</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Popular Articles */}
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">Popular Articles</h2>
        <div className="grid gap-3">
          {popularArticles
            .filter((article) => article.toLowerCase().includes(query.toLowerCase()))
            .map((article) => (
              <Card key={article} className="hover:border-primary/30 transition-colors cursor-pointer">
                <CardContent className="p-4 flex items-center justify-between">
                  <span className="font-medium">{article}</span>
                  <ArrowRight className="h-4 w-4 text-muted-foreground" />
                </CardContent>
              </Card>
            ))}
        </div>
      </div>
    </section>
  );
}
