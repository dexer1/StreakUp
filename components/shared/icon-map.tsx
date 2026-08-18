import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";

const icons: Record<string, LucideIcon> = {
  Footprints: Icons.Footprints, BookOpen: Icons.BookOpen, Droplets: Icons.Droplets, Code2: Icons.Code2, Apple: Icons.Apple, Brain: Icons.Brain, NotebookPen: Icons.NotebookPen, Timer: Icons.Timer, Sunrise: Icons.Sunrise, Activity: Icons.Activity, Languages: Icons.Languages, Flame: Icons.Flame, Rocket: Icons.Rocket, Crown: Icons.Crown, Users: Icons.Users, Trophy: Icons.Trophy, RotateCcw: Icons.RotateCcw, Hand: Icons.Hand, HeartHandshake: Icons.HeartHandshake, CalendarCheck: Icons.CalendarCheck, Zap: Icons.Zap, Mountain: Icons.Mountain, ChartNoAxesCombined: Icons.ChartNoAxesCombined,
};
export function DynamicIcon({ name, className }: { name: string; className?: string }) { const Icon = icons[name] ?? Icons.Sparkles; return <Icon className={className} />; }
