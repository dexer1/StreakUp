import { Lock, Zap } from "lucide-react";
import { Badge, Card, Progress } from "@/components/ui/primitives";
import { DynamicIcon } from "@/components/shared/icon-map";
import { cn } from "@/lib/utils";
import type { Achievement } from "@/types";

export function AchievementCard({ achievement, compact = false }: { achievement: Achievement; compact?: boolean }) {
  const percentage = achievement.target ? Math.round(((achievement.progress ?? 0) / achievement.target) * 100) : 0;
  return <Card className={cn("relative overflow-hidden p-5", compact && "p-4", !achievement.unlocked && "bg-surface-2/45")}>
    <div className="flex items-start gap-4">
      <span className={cn("grid h-12 w-12 shrink-0 place-items-center rounded-xl", achievement.unlocked ? "bg-primary-soft text-primary" : "bg-surface-2 text-muted")}><DynamicIcon name={achievement.icon} className="h-6 w-6" /></span>
      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-2"><h3 className="font-bold">{achievement.name}</h3>{achievement.unlocked ? <Badge className="border-success/20 bg-success-soft text-success">Unlocked</Badge> : <Lock className="h-4 w-4 text-muted" />}</div>
        <p className="mt-1 text-sm text-muted">{achievement.description}</p>
        <div className="mt-3 flex items-center justify-between"><span className="flex items-center gap-1 text-xs font-bold text-primary"><Zap className="h-3.5 w-3.5" />+{achievement.xpReward} XP</span>{achievement.unlockedAt && <span className="text-xs text-muted">{achievement.unlockedAt}</span>}</div>
        {!achievement.unlocked && achievement.target && <div className="mt-3"><div className="mb-1 flex justify-between text-[11px] text-muted"><span>Progress</span><span>{achievement.progress}/{achievement.target}</span></div><Progress value={percentage} /></div>}
      </div>
    </div>
  </Card>;
}
