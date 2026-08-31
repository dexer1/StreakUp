"use client";

import Link from "next/link";
import { Badge, Card } from "@/components/ui/primitives";
import { UserAvatar } from "@/components/shared/shared";
import { ReactionSticker } from "@/components/shared/reaction-sticker";
import { users } from "@/data/mock-data";
import { relativeTime } from "@/lib/utils";
import { useAppStore } from "@/store/app-store";
import type { Activity } from "@/types";

export function ActivityCard({activity}:{activity:Activity}){const user=users.find(u=>u.id===activity.userId)!;const toggle=useAppStore(s=>s.toggleReaction);return <Card className="p-5"><div className="flex items-start gap-3"><Link href={`/profile/${user.username}`}><UserAvatar user={user}/></Link><div className="min-w-0 flex-1"><p className="text-sm leading-relaxed"><Link href={`/profile/${user.username}`} className="font-bold hover:text-primary">{user.name}</Link> {activity.message}</p><p className="mt-1 text-xs text-muted">{relativeTime(activity.createdAt)}</p></div><Badge>{activity.type}</Badge></div><div className="mt-4 rounded-xl bg-surface-2 px-4 py-3 text-sm font-medium">{activity.detail}</div><div className="mt-4 flex gap-2">{activity.reactions.map(reaction=><button key={reaction.type} onClick={()=>toggle(activity.id,reaction.type)} aria-label={`${reaction.type} reaction, ${reaction.count}`} aria-pressed={reaction.reacted} className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold transition ${reaction.reacted?"border-primary bg-primary-soft text-primary":"bg-surface hover:bg-surface-2"}`}><ReactionSticker type={reaction.type}/><span>{reaction.count}</span></button>)}</div></Card>}
