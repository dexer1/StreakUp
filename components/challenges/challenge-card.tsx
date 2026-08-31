"use client";

import Link from "next/link";
import { CalendarDays, Check, Users } from "lucide-react";
import { format } from "date-fns";
import { Badge, Card, Progress } from "@/components/ui/primitives";
import { Button } from "@/components/ui/button";
import { DynamicIcon } from "@/components/shared/icon-map";
import { formatNumber } from "@/lib/utils";
import { useAppStore } from "@/store/app-store";
import type { Challenge } from "@/types";

export function ChallengeCard({challenge}:{challenge:Challenge}){const toggle=useAppStore(s=>s.toggleChallenge);return <Card className="flex h-full flex-col p-5"><div className="flex items-start justify-between gap-3"><span className="grid h-11 w-11 place-items-center rounded-xl bg-primary-soft text-primary"><DynamicIcon name={challenge.icon} className="h-5 w-5"/></span><Badge className={challenge.difficulty==="Hard"?"bg-warning-soft text-warning":challenge.difficulty==="Easy"?"bg-success-soft text-success":""}>{challenge.difficulty}</Badge></div><Link href={`/challenges/${challenge.id}`} className="mt-4 text-lg font-bold hover:text-primary">{challenge.title}</Link><p className="mt-1 line-clamp-2 text-sm text-muted">{challenge.description}</p><div className="mt-5 space-y-2 text-xs text-muted"><div className="flex items-center gap-2"><Users className="h-4 w-4"/>{formatNumber(challenge.participants)} participants</div><div className="flex items-center gap-2"><CalendarDays className="h-4 w-4"/>{format(new Date(challenge.startDate+"T12:00"),"MMM d")} — {format(new Date(challenge.endDate+"T12:00"),"MMM d")}</div></div>{challenge.joined&&<div className="mt-5"><div className="mb-1.5 flex justify-between text-xs"><span>Your progress</span><strong>{challenge.progress}%</strong></div><Progress value={challenge.progress}/></div>}<div className="mt-auto flex gap-2 pt-5"><Button className="flex-1" variant={challenge.joined?"secondary":"default"} onClick={()=>toggle(challenge.id)}>{challenge.joined?<><Check className="h-4 w-4"/>Joined</>:"Join Challenge"}</Button><Button asChild variant="ghost"><Link href={`/challenges/${challenge.id}`}>Details</Link></Button></div></Card>}
