"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/shared/Container";

const categories = [
  "Future Partners",
  "Hotels",
  "Creators",
  "Travel Companies",
  "Airlines",
  "Adventure Brands",
];

export function TrustedBy() {
  return (
    <section className="py-16 border-y border-border/50 bg-muted/20 dark:bg-slate-950/30">
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-8">
            Trusted by the future of travel
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {categories.map((category, i) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 0.5, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-lg md:text-xl font-semibold text-foreground/40 hover:text-foreground/70 transition-colors cursor-default"
              >
                {category}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
