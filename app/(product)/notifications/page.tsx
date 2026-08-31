"use client";

import { Bell, CheckCheck, Flame, Medal, Trophy, UserPlus, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/primitives";
import { EmptyState, PageHeader } from "@/components/shared/shared";
import { relativeTime } from "@/lib/utils";
import { useAppStore } from "@/store/app-store";
import type { AppNotification } from "@/types";
import Link from "next/link";

const iconMap:Record<AppNotification["type"],typeof Bell>={streak:Flame,challenge:Trophy,social:Users,achievement:Medal,friend:UserPlus};
const notificationMessage = (message: string) => message.replace(`reacted ${String.fromCodePoint(0x1f525)} to`, "sent a Fire reaction to");
export default function NotificationsPage(){const notifications=useAppStore(s=>s.notifications);const mark=useAppStore(s=>s.markNotificationRead);const markAll=useAppStore(s=>s.markAllRead);return <div className="page-wrap max-w-5xl"><PageHeader title="Notifications" description="The moments that need your attention — and the wins worth noticing." action={<div className="flex gap-2"><Button variant="secondary" onClick={markAll}><CheckCheck className="h-4 w-4"/>Mark all as read</Button><Button asChild variant="ghost"><Link href="/settings">Settings</Link></Button></div>}/>{notifications.length?<Card className="divide-y divide-border overflow-hidden">{notifications.map(n=>{const Icon=iconMap[n.type];return <button key={n.id} onClick={()=>mark(n.id)} className={`flex w-full items-start gap-4 p-4 text-left transition hover:bg-surface-2 md:p-5 ${!n.read?"bg-primary-soft/40":""}`}><span className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${!n.read?"bg-primary text-white":"bg-surface-2 text-muted"}`}><Icon className="h-5 w-5"/></span><span className="min-w-0 flex-1"><span className="block text-sm font-semibold">{notificationMessage(n.message)}</span><span className="mt-1 block text-xs capitalize text-muted">{n.type} · {relativeTime(n.createdAt)}</span></span>{!n.read&&<span className="mt-2 h-2.5 w-2.5 rounded-full bg-primary"/>}</button>})}</Card>:<EmptyState icon={Bell} title="You’re all caught up." description="New streak, challenge, and community updates will appear here."/>}</div>}
