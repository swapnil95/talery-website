"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/shared/Container";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/shared/ScrollReveal";
import { cn } from "@/lib/utils";

const screens = [
  {
    src: "/screenshots/trip-settings.jpg",
    alt: "Trip Settings — Manage members, sharing, and group decisions",
    label: "Trip Settings",
    span: "md:col-span-1 md:row-span-2",
  },
  {
    src: "/screenshots/thailand-map.jpg",
    alt: "Interactive map with cities and destinations across Thailand",
    label: "Interactive Maps",
    span: "md:col-span-2",
  },
  {
    src: "/screenshots/city-selection.jpg",
    alt: "City selection with suggested destinations",
    label: "City Selection",
    span: "",
  },
  {
    src: "/screenshots/bangkok-itinerary.jpg",
    alt: "Day-by-day itinerary builder with map and AI suggestions",
    label: "Itinerary Builder",
    span: "md:col-span-1 md:row-span-2",
  },
  {
    src: "/screenshots/add-location.jpg",
    alt: "Add locations from links, Instagram, or custom places",
    label: "Add Locations",
    span: "",
  },
  {
    src: "/screenshots/saved-places.jpg",
    alt: "Saved places with ratings, reviews, and itinerary actions",
    label: "Saved Places",
    span: "md:col-span-2",
  },
  {
    src: "/screenshots/route-map.jpg",
    alt: "Visual route planning between cities with distances",
    label: "Route Planning",
    span: "",
  },
  {
    src: "/screenshots/add-stay.jpg",
    alt: "Add and manage stays with duration and check-in details",
    label: "Stay Booking",
    span: "",
  },
  {
    src: "/screenshots/day-planning.jpg",
    alt: "Detailed day planning with timeline and activities",
    label: "Day Planning",
    span: "md:col-span-2",
  },
  {
    src: "/screenshots/profile-trips.jpg",
    alt: "User profile with upcoming and past trips",
    label: "Travel Profile",
    span: "",
  },
];

function PhoneFrame({
  src,
  alt,
  label,
  className,
}: {
  src: string;
  alt: string;
  label: string;
  className?: string;
}) {
  const [error, setError] = useState(false);
  const imageSrc = error || !src ? "/screenshots/placeholder.svg" : src;

  return (
    <div className={cn("group relative", className)}>
      <div className="relative mx-auto max-w-[280px] rounded-[2.5rem] border-[8px] border-slate-900 bg-slate-900 p-2 shadow-2xl transition-transform duration-500 group-hover:-translate-y-2">
        {/* Notch */}
        <div className="absolute left-1/2 top-2 z-20 h-5 w-20 -translate-x-1/2 rounded-full bg-slate-900" />
        {/* Screen */}
        <div className="relative aspect-[9/19.5] overflow-hidden rounded-[2rem] bg-white">
          <img
            src={imageSrc}
            alt={alt}
            onError={() => setError(true)}
            className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
        </div>
      </div>
      <p className="mt-4 text-center text-sm font-medium text-muted-foreground">
        {label}
      </p>
    </div>
  );
}

export function Screenshots() {
  return (
    <section className="section-padding bg-muted/20 dark:bg-slate-950/30 overflow-hidden">
      <Container>
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
            App Preview
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Designed For Real{" "}
            <span className="gradient-text">Travelers</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Every screen is crafted to make planning, sharing, and experiencing
            trips effortless.
          </p>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
          {screens.map((screen) => (
            <StaggerItem key={screen.label} className={screen.span}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="h-full"
              >
                <PhoneFrame
                  src={screen.src}
                  alt={screen.alt}
                  label={screen.label}
                />
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
