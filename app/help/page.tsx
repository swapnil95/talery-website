import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MessageCircle, Phone, ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { PageHeader } from "@/components/shared/PageHeader";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/shared/ScrollReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Help Center",
  description:
    "Browse frequently asked questions about Talery. Learn about accounts, billing, AI features, creators, safety, and more.",
};

const faqs = [
  {
    question: "What is Talery?",
    answer:
      "Talery is an AI-powered social travel platform that helps you discover destinations, plan itineraries, connect with other travelers, and share your journeys with the world.",
  },
  {
    question: "Is Talery free to use?",
    answer:
      "Yes. Talery offers a generous free plan with essential AI planning and community features. You can upgrade anytime for unlimited itineraries, offline access, and creator tools.",
  },
  {
    question: "How does the AI travel planner work?",
    answer:
      "Describe your dream trip in plain language — destination, budget, vibe, and dates. Talery's AI generates a complete, editable itinerary with activities, logistics, and local recommendations.",
  },
  {
    question: "Can I collaborate with friends on a trip?",
    answer:
      "Absolutely. Invite friends to co-plan your itinerary in real time, vote on activities, split expenses, and chat within the trip.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, debit cards, PayPal, and Apple Pay. Business plans can also be invoiced annually.",
  },
  {
    question: "How do I become a creator?",
    answer:
      "Apply through our Creator Program page. Once approved, you can publish premium guides, host group trips, and earn affiliate commissions.",
  },
  {
    question: "Is my data safe on Talery?",
    answer:
      "Yes. We use industry-standard encryption, secure authentication, and strict access controls. You can review our Privacy Policy and Security page for more details.",
  },
  {
    question: "Can I use Talery without internet access?",
    answer:
      "Paid plans include offline access to your itineraries, maps, and saved guides so you can travel confidently without roaming.",
  },
  {
    question: "How do I delete my account?",
    answer:
      "You can request account deletion from your settings, or visit our Data Deletion page for a complete walkthrough.",
  },
  {
    question: "How do I contact support?",
    answer:
      "You can email us at hello@talery.co, use the contact form on our website, or reach out through the in-app chat during business hours.",
  },
];

const contactOptions = [
  {
    icon: Mail,
    title: "Email Support",
    desc: "hello@talery.co",
    href: "mailto:hello@talery.co",
  },
  {
    icon: MessageCircle,
    title: "Live Chat",
    desc: "Available in the app",
    href: "#",
  },
  {
    icon: Phone,
    title: "Phone",
    desc: "+1 (555) 123-4567",
    href: "tel:+15551234567",
  },
];

export default function HelpPage() {
  return (
    <main className="min-h-screen">
      <PageHeader
        badge="Help Center"
        title="Frequently Asked Questions"
        subtitle="Quick answers to common questions about using Talery, your account, and our creator tools."
      />

      {/* FAQ */}
      <section className="section-padding">
        <Container>
          <ScrollReveal className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-base font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ScrollReveal>
        </Container>
      </section>

      {/* Contact Options */}
      <section className="section-padding bg-muted/20 dark:bg-slate-950/30">
        <Container>
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Still Need Help?
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
              Contact Our Support Team
            </h2>
          </ScrollReveal>
          <StaggerContainer className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {contactOptions.map((option) => (
              <StaggerItem key={option.title}>
                <a href={option.href} className="block group h-full">
                  <Card className="h-full text-center hover-lift">
                    <CardContent className="p-8">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500/10 to-teal-500/10 text-primary mx-auto mb-4">
                        <option.icon className="h-7 w-7" />
                      </div>
                      <h3 className="font-semibold text-lg mb-1">{option.title}</h3>
                      <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                        {option.desc}
                      </p>
                    </CardContent>
                  </Card>
                </a>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <ScrollReveal className="text-center mt-10">
            <Button asChild>
              <Link href="/contact">
                Contact Us <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </ScrollReveal>
        </Container>
      </section>
    </main>
  );
}
