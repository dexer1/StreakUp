"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Command, Focus, LayoutGrid, Search, Settings, Trophy, User, X } from "lucide-react";
import { initialChallenges, users } from "@/data/mock-data";
import { useAppStore } from "@/store/app-store";

export function CommandMenu() {
  const open = useAppStore((s) => s.commandOpen);
  const setOpen = useAppStore((s) => s.setCommandOpen);
  const habits = useAppStore((s) => s.habits);
  const [query, setQuery] = useState("");
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") { event.preventDefault(); setOpen(!open); }
      if (event.key === "Escape") setOpen(false);
    };
    addEventListener("keydown", handler);
    return () => removeEventListener("keydown", handler);
  }, [open, setOpen]);
  useEffect(() => { if (open) inputRef.current?.focus(); }, [open]);
  const results = useMemo(() => [
    { label: "Go to My Habits", href: "/habits", icon: LayoutGrid, type: "Page" },
    { label: "Start Focus Session", href: "/focus", icon: Focus, type: "Action" },
    { label: "Browse Challenges", href: "/challenges", icon: Trophy, type: "Page" },
    { label: "Go to Settings", href: "/settings", icon: Settings, type: "Page" },
    ...habits.map((habit) => ({ label: habit.title, href: `/habits/${habit.id}`, icon: LayoutGrid, type: "Habit" })),
    ...initialChallenges.map((challenge) => ({ label: challenge.title, href: `/challenges/${challenge.id}`, icon: Trophy, type: "Challenge" })),
    ...users.slice(1).map((user) => ({ label: user.name, href: `/profile/${user.username}`, icon: User, type: "Friend" })),
  ].filter((item) => item.label.toLowerCase().includes(query.toLowerCase())).slice(0, 10), [habits, query]);
  if (!open) return null;
  const go = (href: string) => { router.push(href); setOpen(false); setQuery(""); };
  return <div className="fixed inset-0 z-[90] p-3 pt-[10vh]">
    <button className="absolute inset-0 h-full w-full cursor-default bg-black/55" onClick={() => setOpen(false)} aria-label="Close search" />
    <div role="dialog" aria-modal="true" aria-label="Search StreakUp" className="relative mx-auto w-full max-w-xl overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl">
      <div className="flex items-center gap-3 border-b border-border px-4"><Search className="h-5 w-5 text-muted" /><input ref={inputRef} value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search habits, challenges, friends, or pages…" className="h-14 flex-1 bg-transparent outline-none" /><button onClick={() => setOpen(false)} aria-label="Close search dialog"><X className="h-4 w-4 text-muted" /></button></div>
      <div className="max-h-[55vh] overflow-y-auto p-2">{results.length ? results.map((item) => <button key={`${item.type}-${item.href}`} onClick={() => go(item.href)} className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left hover:bg-surface-2"><span className="rounded-lg bg-surface-2 p-2 text-muted"><item.icon className="h-4 w-4" /></span><span className="flex-1 font-medium">{item.label}</span><span className="text-xs text-muted">{item.type}</span></button>) : <div className="p-10 text-center text-sm text-muted"><Command className="mx-auto mb-3 h-6 w-6" />No matches. Try a habit, challenge, or friend name.</div>}</div>
    </div>
  </div>;
}
