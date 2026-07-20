"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Users, UserCheck, MapPinned, Globe } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

const stats = [
  { icon: Users, value: 100000, suffix: "+", label: "Travelers" },
  { icon: UserCheck, value: 10000, suffix: "+", label: "Creators" },
  { icon: MapPinned, value: 500000, suffix: "+", label: "Trips Planned" },
  { icon: Globe, value: 80, suffix: "+", label: "Countries" },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, value]);

  const format = (n: number) => {
    if (n >= 1000) return (n / 1000).toFixed(n >= 10000 ? 0 : 1).replace(/\.0$/, "") + "K";
    return n.toString();
  };

  return (
    <span ref={ref}>
      {format(count)}
      {suffix}
    </span>
  );
}

export function Statistics() {
  return (
    <section className="py-20 bg-gradient-to-r from-sky-500 to-teal-500 text-white">
      <Container>
        <ScrollReveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
                    <stat.icon className="h-7 w-7" />
                  </div>
                </div>
                <div className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-white/80 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
