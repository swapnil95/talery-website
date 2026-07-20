"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface Toast {
  id: string;
  message: string;
  type?: "success" | "error" | "info";
}

let toasts: Toast[] = [];
let listeners: ((toasts: Toast[]) => void)[] = [];

function notify(message: string, type: Toast["type"] = "info") {
  const id = Math.random().toString(36).slice(2);
  toasts = [...toasts, { id, message, type }];
  listeners.forEach((l) => l(toasts));
  setTimeout(() => {
    toasts = toasts.filter((t) => t.id !== id);
    listeners.forEach((l) => l(toasts));
  }, 3000);
}

export const toast = {
  success: (message: string) => notify(message, "success"),
  error: (message: string) => notify(message, "error"),
  info: (message: string) => notify(message, "info"),
};

export function Toaster({
  position = "bottom-right",
}: {
  position?: "bottom-right" | "bottom-left" | "top-right" | "top-left";
}) {
  const [list, setList] = useState<Toast[]>([]);

  useEffect(() => {
    listeners.push(setList);
    return () => {
      listeners = listeners.filter((l) => l !== setList);
    };
  }, []);

  const positionClasses = {
    "bottom-right": "bottom-4 right-4",
    "bottom-left": "bottom-4 left-4",
    "top-right": "top-4 right-4",
    "top-left": "top-4 left-4",
  };

  return (
    <div className={cn("fixed z-[100] flex flex-col gap-2", positionClasses[position])}>
      {list.map((toast) => (
        <div
          key={toast.id}
          className={cn(
            "glass-strong px-4 py-3 rounded-xl text-sm font-medium shadow-lg",
            "animate-in fade-in slide-in-from-bottom-2 duration-300",
            toast.type === "success" && "border-l-4 border-l-teal-500",
            toast.type === "error" && "border-l-4 border-l-orange-500",
            toast.type === "info" && "border-l-4 border-l-sky-500"
          )}
        >
          {toast.message}
        </div>
      ))}
    </div>
  );
}
