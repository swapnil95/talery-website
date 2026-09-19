"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/shared/ThemeProvider";
import { Logo } from "@/components/shared/Logo";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "py-3" : "py-5"
      )}
    >
      <div className="container-padding">
        <nav
          className={cn(
            "mx-auto max-w-7xl rounded-2xl border px-4 sm:px-6 transition-all duration-300",
            isScrolled
              ? "glass-strong py-2.5 shadow-lg"
              : "bg-white/40 dark:bg-slate-950/40 backdrop-blur-md border-white/20 dark:border-slate-700/20 py-3"
          )}
        >
          <div className="flex items-center justify-between">
            <Link href="/" className="group">
              <Logo />
            </Link>

            <div className="flex items-center gap-3">
              <button
                onClick={() =>
                  setTheme(resolvedTheme === "dark" ? "light" : "dark")
                }
                className="relative flex h-9 w-9 items-center justify-center rounded-lg hover:bg-muted transition-colors"
                aria-label="Toggle theme"
              >
                <AnimatePresence mode="wait">
                  {resolvedTheme === "dark" ? (
                    <motion.div
                      key="sun"
                      initial={{ scale: 0, rotate: -90 }}
                      animate={{ scale: 1, rotate: 0 }}
                      exit={{ scale: 0, rotate: 90 }}
                    >
                      <Sun className="h-5 w-5" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="moon"
                      initial={{ scale: 0, rotate: 90 }}
                      animate={{ scale: 1, rotate: 0 }}
                      exit={{ scale: 0, rotate: -90 }}
                    >
                      <Moon className="h-5 w-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
              <Button size="sm" asChild>
                <Link href="/#waitlist">Join Waitlist</Link>
              </Button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
