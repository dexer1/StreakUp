"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, ChevronLeft, Command, Focus, Home, LayoutGrid, Menu, Medal, Moon, Settings, Sun, Trophy, Users, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAppStore } from "@/store/app-store";
import { currentUser } from "@/data/mock-data";
import { AppTooltip, DropdownContent, DropdownItem, DropdownMenu, DropdownPortal, DropdownTrigger } from "@/components/ui/primitives";
import { BrandMark, UserAvatar, XPBar } from "@/components/shared/shared";
import { Button } from "@/components/ui/button";
import { CommandMenu } from "./command-menu";

const nav = [
  { href: "/dashboard", label: "Home", icon: Home }, { href: "/habits", label: "My Habits", icon: LayoutGrid }, { href: "/focus", label: "Focus", icon: Focus }, { href: "/challenges", label: "Challenges", icon: Trophy }, { href: "/leaderboard", label: "Leaderboard", icon: Medal }, { href: "/community", label: "Community", icon: Users }, { href: "/achievements", label: "Achievements", icon: Zap },
];
const utilityNav = [{ href: "/notifications", label: "Notifications", icon: Bell }, { href: "/settings", label: "Settings", icon: Settings }];

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname(); const collapsed = useAppStore((s)=>s.sidebarCollapsed); const setCollapsed = useAppStore((s)=>s.setSidebarCollapsed); const setCommandOpen = useAppStore((s)=>s.setCommandOpen); const notifications = useAppStore((s)=>s.notifications); const markRead = useAppStore((s)=>s.markNotificationRead); const theme = useAppStore((s)=>s.theme); const setTheme = useAppStore((s)=>s.setTheme);
  const unread = notifications.filter((n)=>!n.read).length;
  const item = (entry: typeof nav[number]) => { const active = pathname === entry.href || (entry.href !== "/dashboard" && pathname.startsWith(entry.href)); const content = <Link href={entry.href} aria-current={active ? "page" : undefined} className={cn("flex h-10 items-center gap-3 rounded-[10px] px-3 text-sm font-medium transition", active ? "bg-white/12 text-white" : "text-[var(--sidebar-muted)] hover:bg-white/7 hover:text-white", collapsed && "justify-center px-0")}><entry.icon className="h-[18px] w-[18px] shrink-0" />{!collapsed && <span>{entry.label}</span>}{entry.label === "Notifications" && unread > 0 && !collapsed && <span className="ml-auto rounded-full bg-primary px-1.5 py-0.5 text-[10px] font-bold text-white">{unread}</span>}</Link>; return collapsed ? <AppTooltip key={entry.href} label={entry.label}>{content}</AppTooltip> : <div key={entry.href}>{content}</div>; };
  return <div className="min-h-dvh bg-background">
    <aside className={cn("fixed inset-y-0 left-0 z-40 hidden flex-col bg-sidebar p-3 transition-[width] duration-200 md:flex", collapsed ? "w-[76px]" : "w-[248px]")}>
      <div className={cn("flex h-14 items-center px-2", collapsed ? "justify-center" : "justify-between")}><BrandMark compact={collapsed} dark /><button onClick={()=>setCollapsed(!collapsed)} className={cn("rounded-lg p-2 text-[var(--sidebar-muted)] hover:bg-white/10 hover:text-white", collapsed && "absolute -right-3 top-6 border border-white/10 bg-sidebar")} aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}><ChevronLeft className={cn("h-4 w-4 transition-transform", collapsed && "rotate-180")} /></button></div>
      <button onClick={()=>setCommandOpen(true)} className={cn("my-3 flex h-10 items-center gap-3 rounded-[10px] border border-white/10 bg-white/5 px-3 text-sm text-[var(--sidebar-muted)] hover:bg-white/10", collapsed && "justify-center px-0")}><Command className="h-4 w-4" />{!collapsed && <><span>Search</span><kbd className="ml-auto rounded bg-white/10 px-1.5 py-0.5 text-[10px]">⌘K</kbd></>}</button>
      <nav aria-label="Primary" className="space-y-1">{nav.map(item)}</nav><div className="mt-auto space-y-1">{utilityNav.map(item)}
        <div className={cn("mt-3 border-t border-white/10 pt-3", collapsed ? "flex justify-center" : "p-2")}><Link href="/profile" className="flex items-center gap-3"><UserAvatar user={currentUser} size="sm" />{!collapsed && <div className="min-w-0 flex-1"><div className="truncate text-sm font-semibold text-white">{currentUser.name}</div><div className="text-[11px] text-[var(--sidebar-muted)]">Level 8 · 550 XP to go</div></div>}</Link>{!collapsed && <div className="mt-3"><XPBar xp={currentUser.xp} next={currentUser.nextLevelXp} level={currentUser.level} compact /></div>}</div>
      </div>
    </aside>
    <div className={cn("min-h-dvh transition-[padding] duration-200", collapsed ? "md:pl-[76px]" : "md:pl-[248px]")}>
      <div className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-border bg-background/92 px-4 backdrop-blur md:hidden"><BrandMark /><div className="flex items-center gap-1"><button onClick={()=>setCommandOpen(true)} className="rounded-lg p-2 text-muted" aria-label="Search"><Command className="h-5 w-5" /></button><Link href="/notifications" className="relative rounded-lg p-2 text-muted" aria-label={`${unread} unread notifications`}><Bell className="h-5 w-5" />{unread > 0 && <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-primary ring-2 ring-background" />}</Link></div></div>
      <div className="fixed right-5 top-5 z-30 hidden items-center gap-2 md:flex"><DropdownMenu><DropdownTrigger asChild><Button variant="secondary" size="icon" aria-label="Theme"><Sun className="h-4 w-4 dark:hidden" /><Moon className="hidden h-4 w-4 dark:block" /></Button></DropdownTrigger><DropdownPortal><DropdownContent align="end">{(["light","dark","system"] as const).map((value)=><DropdownItem key={value} onClick={()=>setTheme(value)} className={cn(theme===value && "bg-primary-soft text-primary")}><span className="capitalize">{value}</span></DropdownItem>)}</DropdownContent></DropdownPortal></DropdownMenu>
      <DropdownMenu><DropdownTrigger asChild><Button variant="secondary" size="icon" className="relative" aria-label={`${unread} unread notifications`}><Bell className="h-4 w-4" />{unread > 0 && <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-primary" />}</Button></DropdownTrigger><DropdownPortal><DropdownContent align="end" className="w-[350px] p-2"><div className="flex items-center justify-between px-2 py-2"><strong>Notifications</strong><Link href="/notifications" className="text-xs font-semibold text-primary">View all</Link></div>{notifications.slice(0,4).map((n)=><DropdownItem key={n.id} onSelect={()=>markRead(n.id)} className="items-start"><span className={cn("mt-1.5 h-2 w-2 shrink-0 rounded-full", n.read ? "bg-border" : "bg-primary")} /><span className="leading-snug">{n.message}</span></DropdownItem>)}</DropdownContent></DropdownPortal></DropdownMenu></div>
      <main>{children}</main>
    </div>
    <nav aria-label="Mobile navigation" className="fixed bottom-0 left-0 right-0 z-40 grid h-[72px] grid-cols-5 border-t border-border bg-surface/96 px-2 pb-[env(safe-area-inset-bottom)] backdrop-blur md:hidden">{[nav[0],nav[1],nav[2],nav[3],{href:"/community",label:"More",icon:Menu}].map((entry)=>{const active=pathname===entry.href||pathname.startsWith(entry.href+"/");return <Link href={entry.href} key={entry.href} className={cn("flex flex-col items-center justify-center gap-1 text-[10px] font-semibold",active?"text-primary":"text-muted")}><entry.icon className="h-5 w-5"/><span>{entry.label}</span></Link>})}</nav>
    <CommandMenu />
  </div>;
}
