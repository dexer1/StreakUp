"use client";

import { useMemo, useState } from "react";
import { Plus, Search, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/primitives";
import { EmptyState, PageHeader } from "@/components/shared/shared";
import { ChallengeCard } from "@/components/challenges/challenge-card";
import { ChallengeForm } from "@/components/challenges/challenge-form";
import { useAppStore } from "@/store/app-store";
import { cn } from "@/lib/utils";

const cats=["All","Fitness","Learning","Health","Productivity","Mindfulness"] as const;
export default function ChallengesPage(){const challenges=useAppStore(s=>s.challenges);const [tab,setTab]=useState<"Discover"|"Joined"|"Created">("Discover");const [cat,setCat]=useState<(typeof cats)[number]>("All");const [query,setQuery]=useState("");const [open,setOpen]=useState(false);const visible=useMemo(()=>challenges.filter(c=>(tab==="Discover"||tab==="Joined"&&c.joined||tab==="Created"&&c.creatorId==="alex")&&(cat==="All"||c.category===cat)&&c.title.toLowerCase().includes(query.toLowerCase())),[challenges,tab,cat,query]);return <div className="page-wrap"><PageHeader title="Challenges" description="Turn personal goals into shared momentum." action={<Button onClick={()=>setOpen(true)}><Plus className="h-4 w-4"/>Create Challenge</Button>}/><div className="mb-5 flex flex-col gap-4"><div className="flex w-fit rounded-xl border bg-surface p-1">{(["Discover","Joined","Created"] as const).map(item=><button key={item} onClick={()=>setTab(item)} className={cn("rounded-lg px-4 py-2 text-sm font-semibold",tab===item?"bg-foreground text-background":"text-muted")}>{item}</button>)}</div><div className="flex flex-col gap-3 md:flex-row"><div className="relative md:w-80"><Search className="absolute left-3 top-3 h-4 w-4 text-muted"/><Input value={query} onChange={e=>setQuery(e.target.value)} className="pl-9" placeholder="Search challenges"/></div><div className="scrollbar-none flex gap-2 overflow-x-auto">{cats.map(item=><button key={item} onClick={()=>setCat(item)} className={cn("whitespace-nowrap rounded-lg border px-3 py-2 text-xs font-semibold",cat===item?"border-primary bg-primary-soft text-primary":"bg-surface text-muted")}>{item}</button>)}</div></div></div>{visible.length?<div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{visible.map(c=><ChallengeCard challenge={c} key={c.id}/>)}</div>:<EmptyState icon={Trophy} title={tab==="Joined"?"You’re not part of any challenges yet.":"No challenges found."} description="Browse active goals and find a group that matches your pace." action={<Button onClick={()=>{setTab("Discover");setCat("All");setQuery("")}}>Browse Challenges</Button>}/>}<ChallengeForm open={open} onOpenChange={setOpen}/></div>}
