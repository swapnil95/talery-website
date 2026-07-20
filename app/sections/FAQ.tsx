"use client";

import { Container } from "@/components/shared/Container";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What is Talery?",
    a: "Talery is an AI-powered social travel platform where travelers, creators, and local experts discover, create, share, and monetize travel itineraries.",
  },
  {
    q: "How does the AI trip planner work?",
    a: "Tell Talery where you want to go, your budget, dates, and travel style. Our AI generates a complete, customizable itinerary with activities, stays, and transport options.",
  },
  {
    q: "Is Talery free to use?",
    a: "Yes. Talery offers a generous free plan with core features. Premium plans unlock unlimited AI itineraries, offline access, creator tools, and more.",
  },
  {
    q: "Can I collaborate with friends on a trip?",
    a: "Absolutely. Invite friends to co-plan, vote on activities, split costs, and keep everyone in sync with a shared itinerary.",
  },
  {
    q: "How do creators earn money?",
    a: "Creators earn through itinerary sales, premium guides, affiliate bookings, brand partnerships, subscriptions, and hosted group trips.",
  },
  {
    q: "Can I book hotels and activities through Talery?",
    a: "Yes. Talery integrates with leading booking providers so you can reserve hotels, activities, and transport without leaving the app.",
  },
  {
    q: "Does Talery work offline?",
    a: "Premium users can download itineraries, maps, and guides for offline access — perfect for destinations with limited connectivity.",
  },
  {
    q: "What makes Talery different from other travel apps?",
    a: "Talery combines AI planning, social discovery, creator monetization, collaborative tools, and booking — all in one beautifully designed platform.",
  },
  {
    q: "Is my data safe?",
    a: "Yes. We use industry-standard encryption, never sell your data, and comply with GDPR, CCPA, and other privacy regulations.",
  },
  {
    q: "Can I delete my account and data?",
    a: "Yes. You can request full data deletion at any time from your account settings or our Data Deletion Policy page.",
  },
  {
    q: "What destinations are supported?",
    a: "Talery supports travel planning for destinations worldwide, with growing local expert communities in major cities and adventure hotspots.",
  },
  {
    q: "How do group trips work?",
    a: "Creators can design and host group trips. Travelers book directly through Talery, and creators earn a commission on each booking.",
  },
  {
    q: "Can I share my itinerary on social media?",
    a: "Yes. Every itinerary has a beautiful shareable link you can post to Instagram, TikTok, X, or anywhere else.",
  },
  {
    q: "What is the Creator Program?",
    a: "Our Creator Program gives travel influencers, bloggers, and local experts tools to monetize content, grow audiences, and partner with brands.",
  },
  {
    q: "Does Talery offer refunds?",
    a: "Refund policies depend on the plan and booking type. See our Refund & Cancellation Policy for full details.",
  },
  {
    q: "Can businesses use Talery?",
    a: "Yes. Our Business and Enterprise plans offer team collaboration, API access, white-label options, and dedicated support.",
  },
  {
    q: "How do I join the waitlist?",
    a: "Enter your email in the waitlist form at the bottom of this page. Early access members receive exclusive perks and updates.",
  },
  {
    q: "What devices support Talery?",
    a: "Talery works on iOS, Android, and the web. Your trips sync seamlessly across all your devices.",
  },
  {
    q: "Can I customize AI-generated itineraries?",
    a: "Every AI-generated plan is fully editable. Swap activities, adjust timing, change budgets, and make it yours.",
  },
  {
    q: "How do I become a local expert?",
    a: "Apply through our Creator Program. We review your travel content and local knowledge before granting expert status.",
  },
];

export function FAQ() {
  return (
    <section className="section-padding bg-muted/20 dark:bg-slate-950/30">
      <Container className="max-w-3xl">
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Questions?{" "}
            <span className="gradient-text">Answered.</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-base font-medium">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollReveal>
      </Container>
    </section>
  );
}
