"use client";

import { motion } from "framer-motion";
import { Play, ArrowRight, Sparkles, MapPin, Users, Plane } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/Container";

function WorldMapBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 mesh-gradient opacity-60" />
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.08] dark:opacity-[0.05]"
        viewBox="0 0 1200 600"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern
            id="dots"
            width="30"
            height="30"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="1.5" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>

      {/* Animated travel paths */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1200 600"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0" />
            <stop offset="50%" stopColor="#0ea5e9" stopOpacity="1" />
            <stop offset="100%" stopColor="#14b8a6" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[
          "M 200 300 Q 400 200 600 280 T 1000 250",
          "M 150 400 Q 350 350 550 420 T 950 380",
          "M 300 150 Q 500 250 700 180 T 1100 220",
          "M 250 480 Q 450 400 650 460 T 1050 420",
        ].map((path, i) => (
          <motion.path
            key={i}
            d={path}
            fill="none"
            stroke="url(#pathGradient)"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0, 1, 1, 0] }}
            transition={{
              duration: 4,
              delay: i * 1.2,
              repeat: Infinity,
              repeatDelay: 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>

      {/* Floating orbs */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{
            width: [200, 300, 250, 180, 220][i],
            height: [200, 300, 250, 180, 220][i],
            background: [
              "rgba(14, 165, 233, 0.15)",
              "rgba(20, 184, 166, 0.12)",
              "rgba(249, 115, 22, 0.08)",
              "rgba(14, 165, 233, 0.1)",
              "rgba(20, 184, 166, 0.1)",
            ][i],
            left: [`${10 + i * 18}%`, `${60 - i * 8}%`, `${20 + i * 15}%`, `${70}%`, `${5}%`][i],
            top: [`${20 + i * 10}%`, `${60 - i * 5}%`, `${10 + i * 12}%`, `${40}%`, `${70}%`][i],
          }}
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -30, 20, 0],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
      <WorldMapBackground />

      <Container className="relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-foreground/80 mb-8"
          >
            <Sparkles className="h-4 w-4 text-primary" />
            <span>In development · coming soon</span>
            <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance mb-8"
          >
            Every Journey Has A{" "}
            <span className="gradient-text">Story.</span>
            <br />
            Tell Yours.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            Talery Private Limited is building a social travel planning app to help
            you discover places, plan together, and keep shared trips organized.
            The app is not yet available; explore what we are working on.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Button size="lg" className="w-full sm:w-auto group" asChild>
              <Link href="/#waitlist">
                Register Your Interest
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto"
              asChild
            >
              <Link href="/#waitlist">Contact Us</Link>
            </Button>
          </motion.div>

          {/* Floating UI Preview */}
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative mx-auto max-w-4xl"
          >
            <p className="mb-3 text-sm text-muted-foreground">Product preview · illustrative trip and activity data</p>
            <div className="relative rounded-3xl glass-strong p-2 shadow-2xl">
              <div className="absolute -top-6 -left-6 hidden lg:flex items-center gap-3 glass-strong px-4 py-3 rounded-2xl shadow-xl animate-float">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-100 dark:bg-teal-900/50 text-teal-600 dark:text-teal-300">
                  <MapPin className="h-5 w-5" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-muted-foreground">Next stop</p>
                  <p className="text-sm font-semibold">Santorini, Greece</p>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 hidden lg:flex items-center gap-3 glass-strong px-4 py-3 rounded-2xl shadow-xl animate-float">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 dark:bg-orange-900/50 text-orange-600 dark:text-orange-300">
                  <Users className="h-5 w-5" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-muted-foreground">Trip mates</p>
                  <p className="text-sm font-semibold">+12 joined</p>
                </div>
              </div>

              <div className="rounded-2xl bg-gradient-to-br from-sky-50 to-teal-50 dark:from-slate-900 dark:to-slate-800 p-6 sm:p-10 overflow-hidden">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    {
                      title: "AI Itinerary",
                      desc: "Tokyo • 7 days",
                      icon: Sparkles,
                      color: "bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-300",
                    },
                    {
                      title: "Trip Budget",
                      desc: "$4,250 recorded",
                      icon: Plane,
                      color: "bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-300",
                    },
                    {
                      title: "Trip Story",
                      desc: "1.2K views",
                      icon: Play,
                      color: "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-300",
                    },
                  ].map((item, i) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 + i * 0.1 }}
                      className="rounded-xl bg-white/80 dark:bg-slate-950/50 backdrop-blur-sm p-4 shadow-sm border border-border/50 hover-lift"
                    >
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-lg ${item.color} mb-3`}
                      >
                        <item.icon className="h-5 w-5" />
                      </div>
                      <h3 className="font-semibold text-sm">{item.title}</h3>
                      <p className="text-xs text-muted-foreground mt-1">
                        {item.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-4 p-4 rounded-xl bg-white/60 dark:bg-slate-950/40 border border-border/50">
                  <div className="flex -space-x-2">
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className="h-8 w-8 rounded-full border-2 border-background bg-gradient-to-br from-sky-300 to-teal-300"
                      />
                    ))}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Community trip to Bali</p>
                    <p className="text-xs text-muted-foreground">
                      8 creators • 24 travelers
                    </p>
                  </div>
                  <span className="rounded-lg bg-secondary/10 px-3 py-2 text-xs font-medium">Trip preview</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
