"use client";

import Link from "next/link";
import { Check, Ellipsis, RotateCcw } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import { Badge, Card, DropdownContent, DropdownItem, DropdownMenu, DropdownPortal, DropdownTrigger, Progress } from "@/components/ui/primitives";
import { DynamicIcon } from "@/components/shared/icon-map";
import { StreakBadge } from "@/components/shared/shared";
import { useAppStore } from "@/store/app-store";
import type { Habit } from "@/types";

export function HabitCard({ habit, compact = false, onEdit }: { habit: Habit; compact?: boolean; onEdit?: (habit: Habit) => void }) {
  const toggle=useAppStore(s=>s.toggleHabit); const archive=useAppStore(s=>s.archiveHabit);
  return <Card className={`relative overflow-hidden p-4 ${habit.completedToday ? "border-success/25 bg-success-soft/35" : ""}`}>
    <div className="flex items-start gap-3"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl" style={{background:`${habit.color}18`,color:habit.color}}><DynamicIcon name={habit.icon} className="h-5 w-5"/></span><div className="min-w-0 flex-1"><div className="flex items-start justify-between gap-2"><div><Link href={`/habits/${habit.id}`} className="font-bold hover:text-primary">{habit.title}</Link><div className="mt-1 flex flex-wrap items-center gap-2"><Badge>{habit.category}</Badge><span className="text-xs text-muted">{habit.frequency}</span></div></div>{onEdit && <DropdownMenu><DropdownTrigger asChild><button className="rounded-lg p-2 text-muted hover:bg-surface-2" aria-label={`Options for ${habit.title}`}><Ellipsis className="h-4 w-4"/></button></DropdownTrigger><DropdownPortal><DropdownContent align="end"><DropdownItem onSelect={()=>onEdit(habit)}>Edit habit</DropdownItem><DropdownItem onSelect={()=>archive(habit.id)}>{habit.archived?"Restore":"Archive"}</DropdownItem><DropdownItem asChild><Link href={`/habits/${habit.id}`}>View details</Link></DropdownItem></DropdownContent></DropdownPortal></DropdownMenu>}</div>
      {!compact && <><div className="mt-4 flex items-center justify-between text-sm"><StreakBadge days={habit.currentStreak}/><span className="text-muted">Best {habit.bestStreak} days</span></div><div className="mt-3"><div className="mb-1.5 flex justify-between text-xs text-muted"><span>Completion rate</span><strong className="text-foreground">{habit.completionRate}%</strong></div><Progress value={habit.completionRate}/></div></>}
    </div></div>
    <div className="mt-4 flex items-center gap-3"><Button className="flex-1" variant={habit.completedToday?"secondary":"default"} onClick={()=>toggle(habit.id)}><AnimatePresence mode="wait"><motion.span key={habit.completedToday?"done":"todo"} initial={{scale:.6,opacity:0}} animate={{scale:1,opacity:1}} className="inline-flex items-center gap-2">{habit.completedToday?<><RotateCcw className="h-4 w-4"/>Undo</>:<><Check className="h-4 w-4"/>Mark Complete</>}</motion.span></AnimatePresence></Button>{habit.completedToday && <motion.span initial={{opacity:0,y:6}} animate={{opacity:1,y:0}} className="text-xs font-bold text-success">+10 XP</motion.span>}</div>
  </Card>;
}
