"use client";

import { useState } from "react";
import { Trophy } from "lucide-react";
import { AchievementCard } from "@/components/achievements/achievement-card";
import { Card, Progress } from "@/components/ui/primitives";
import { PageHeader } from "@/components/shared/shared";
import { achievements } from "@/data/mock-data";
import { cn } from "@/lib/utils";

export default function AchievementsPage(){const [filter,setFilter]=useState("All");const visible=achievements.filter(a=>filter==="All"||filter==="Unlocked"&&a.unlocked||filter==="Locked"&&!a.unlocked);return <div className="page-wrap"><PageHeader title="Achievements" description="Milestones that make your consistency visible."/><Card className="mb-5 flex flex-col gap-5 p-5 sm:flex-row sm:items-center"><span className="grid h-16 w-16 place-items-center rounded-2xl bg-primary-soft text-primary"><Trophy className="h-8 w-8"/></span><div className="flex-1"><div className="flex items-end justify-between"><div><div className="text-2xl font-bold">24 / 60 unlocked</div><p className="text-sm text-muted">Keep showing up to reveal the next set.</p></div><strong className="text-primary">40%</strong></div><Progress value={40} className="mt-3 h-3"/></div></Card><div className="mb-5 flex w-fit rounded-xl border bg-surface p-1">{["All","Unlocked","Locked"].map(v=><button key={v} onClick={()=>setFilter(v)} className={cn("rounded-lg px-4 py-2 text-sm font-semibold",filter===v?"bg-foreground text-background":"text-muted")}>{v}</button>)}</div><div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{visible.map(a=><AchievementCard key={a.id} achievement={a}/>)}</div></div>}
