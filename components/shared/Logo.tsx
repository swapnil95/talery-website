"use client";

import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showText?: boolean;
  textClassName?: string;
}

export function Logo({ className, showText = true, textClassName }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 240 200"
        fill="none"
        className="h-9 w-auto text-foreground"
        aria-hidden="true"
      >
        <path
          d="M28 52C28 52 88 32 148 48C178 56 202 70 202 70C202 70 172 66 132 58C92 50 28 52 28 52Z"
          fill="currentColor"
        />
        <path
          d="M32 88C32 88 92 74 148 88C176 95 194 108 194 108C194 108 164 102 124 94C84 86 32 88 32 88Z"
          fill="currentColor"
        />
        <path
          d="M50 120C50 120 95 112 130 126C155 136 172 164 172 164C172 164 145 144 115 132C85 120 50 120 50 120Z"
          fill="currentColor"
        />
      </svg>
      {showText && (
        <span className={cn("text-xl font-bold tracking-tight", textClassName)}>
          Talery
        </span>
      )}
    </div>
  );
}
