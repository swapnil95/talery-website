import { ArrowRight, Sparkles } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

export function WaitlistCTA() {
  return (
    <section id="waitlist" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-teal-500/10 to-orange-500/10 dark:from-sky-500/5 dark:via-teal-500/5 dark:to-orange-500/5" />
      <div className="absolute inset-0 mesh-gradient opacity-30" />
      <Container className="relative z-10">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4 text-primary" />
              <span>Stay informed</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight mb-6">
              Join the Future of{" "}
              <span className="gradient-text">Travel</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              Talery is still in development. Email us if you would like to hear
              when early access becomes available.
            </p>

            <Button size="lg" className="h-14 px-8 group" asChild>
              <a href="mailto:hr@talery.co?subject=Talery%20early%20access%20request">
                Register Interest by Email
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Send your request to hr@talery.co. The button opens your email app;
              you will need to send the message to contact us. Requesting access
              does not create an account or guarantee an invitation.
            </p>

            <p className="text-xs text-muted-foreground mt-4">
              We use your message to respond about early access. Read our{" "}
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
