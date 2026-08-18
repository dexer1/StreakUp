"use client";

import { useEffect } from "react";
import * as Tooltip from "@radix-ui/react-tooltip";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, Info, XCircle } from "lucide-react";
import { useAppStore } from "@/store/app-store";

export function Providers({ children }: { children: React.ReactNode }) {
  const theme = useAppStore((s) => s.theme);
  const toast = useAppStore((s) => s.toast);
  const pushDemoEvent = useAppStore((s) => s.pushDemoEvent);
  useEffect(() => {
    const root = document.documentElement;
    const apply = () => root.classList.toggle("dark", theme === "dark" || (theme === "system" && matchMedia("(prefers-color-scheme: dark)").matches));
    apply(); const query = matchMedia("(prefers-color-scheme: dark)"); query.addEventListener("change", apply); return () => query.removeEventListener("change", apply);
  }, [theme]);
  useEffect(() => { const timer = window.setTimeout(pushDemoEvent, 90000); return () => window.clearTimeout(timer); }, [pushDemoEvent]);
  return <Tooltip.Provider delayDuration={250}>{children}<AnimatePresence>{toast && <motion.div key={toast.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="fixed bottom-24 left-1/2 z-[100] flex -translate-x-1/2 items-center gap-2 rounded-xl border border-border bg-surface px-4 py-3 text-sm font-semibold shadow-xl md:bottom-6">{toast.tone === "success" ? <CheckCircle2 className="h-4 w-4 text-success" /> : toast.tone === "error" ? <XCircle className="h-4 w-4 text-danger" /> : <Info className="h-4 w-4 text-primary" />}{toast.message}</motion.div>}</AnimatePresence></Tooltip.Provider>;
}
