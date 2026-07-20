"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, CheckCircle } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { toast } from "@/components/ui/sonner";

export function WaitlistCTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email address.");
      return;
    }
    setSubmitted(true);
    toast.success("You're on the waitlist! We'll be in touch soon.");
  };

  return (
    <section id="waitlist" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-teal-500/10 to-orange-500/10 dark:from-sky-500/5 dark:via-teal-500/5 dark:to-orange-500/5" />
      <div className="absolute inset-0 mesh-gradient opacity-30" />
      <Container className="relative z-10">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4 text-primary" />
              <span>Limited early access spots</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight mb-6">
              Join the Future of{" "}
              <span className="gradient-text">Travel</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              Be the first to experience AI-powered travel planning, creator
              monetization, and a global community of explorers.
            </p>

            {!submitted ? (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              >
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-14 px-5 rounded-xl"
                />
                <Button type="submit" size="lg" className="h-14 px-8 group">
                  Join Waitlist
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center justify-center gap-3 text-lg font-medium text-teal-600 dark:text-teal-300"
              >
                <CheckCircle className="h-6 w-6" />
                You&apos;re on the list! Check your inbox soon.
              </motion.div>
            )}

            <p className="text-xs text-muted-foreground mt-4">
              No spam. Unsubscribe anytime. By joining, you agree to our{" "}
              <a href="/legal/privacy" className="underline hover:text-foreground">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
