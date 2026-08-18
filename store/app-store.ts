"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { initialActivities, initialChallenges, initialHabits, initialNotifications } from "@/data/mock-data";
import type { Activity, AppNotification, Challenge, CreateHabitInput, Habit, Reaction } from "@/types";

type Theme = "light" | "dark" | "system";
interface Preferences { streak: boolean; challenge: boolean; friends: boolean; achievements: boolean; email: boolean; push: boolean; profileVisibility: "Public" | "Friends" | "Private"; showHabits: boolean; showActivity: boolean; showStreaks: boolean; }
interface AppState {
  habits: Habit[]; challenges: Challenge[]; activities: Activity[]; notifications: AppNotification[];
  theme: Theme; sidebarCollapsed: boolean; commandOpen: boolean; toast?: { id: number; message: string; tone: "success" | "error" | "info" };
  preferences: Preferences;
  toggleHabit: (id: string) => void; addHabit: (input: CreateHabitInput) => void; updateHabit: (id: string, input: Partial<CreateHabitInput>) => void; archiveHabit: (id: string) => void; deleteHabit: (id: string) => void;
  toggleChallenge: (id: string) => void; toggleReaction: (activityId: string, reactionType: Reaction["type"]) => void; markNotificationRead: (id: string) => void; markAllRead: () => void;
  pushDemoEvent: () => void;
  setTheme: (theme: Theme) => void; setSidebarCollapsed: (value: boolean) => void; setCommandOpen: (value: boolean) => void; notify: (message: string, tone?: "success" | "error" | "info") => void; updatePreference: <K extends keyof Preferences>(key: K, value: Preferences[K]) => void;
}

export const useAppStore = create<AppState>()(persist((set) => ({
  habits: initialHabits, challenges: initialChallenges, activities: initialActivities, notifications: initialNotifications,
  theme: "system", sidebarCollapsed: false, commandOpen: false,
  preferences: { streak: true, challenge: true, friends: true, achievements: true, email: false, push: true, profileVisibility: "Public", showHabits: true, showActivity: true, showStreaks: true },
  toggleHabit: (id) => set((state) => { const habit = state.habits.find((h) => h.id === id); if (!habit) return state; const completing = !habit.completedToday; return { habits: state.habits.map((h) => h.id === id ? { ...h, completedToday: completing, currentStreak: Math.max(0, h.currentStreak + (completing ? 1 : -1)) } : h), toast: { id: Date.now(), message: completing ? "Habit completed. +10 XP" : "Completion undone.", tone: "success" } }; }),
  addHabit: (input) => set((state) => ({ habits: [{ ...input, id: `${input.title.toLowerCase().replace(/[^a-z0-9]+/g,"-")}-${Date.now()}`, currentStreak: 0, bestStreak: 0, completionRate: 0, completedToday: false, archived: false, createdAt: new Date().toISOString().slice(0,10) }, ...state.habits], toast: { id: Date.now(), message: "Habit created. Your first check-in is ready.", tone: "success" } })),
  updateHabit: (id, input) => set((state) => ({ habits: state.habits.map((h) => h.id === id ? { ...h, ...input } : h), toast: { id: Date.now(), message: "Habit updated.", tone: "success" } })),
  archiveHabit: (id) => set((state) => ({ habits: state.habits.map((h) => h.id === id ? { ...h, archived: !h.archived } : h), toast: { id: Date.now(), message: "Habit moved to archive.", tone: "info" } })),
  deleteHabit: (id) => set((state) => ({ habits: state.habits.filter((h) => h.id !== id), toast: { id: Date.now(), message: "Habit deleted.", tone: "info" } })),
  toggleChallenge: (id) => set((state) => { const item = state.challenges.find((c) => c.id === id); const joining = !item?.joined; return { challenges: state.challenges.map((c) => c.id === id ? { ...c, joined: !c.joined, participants: c.participants + (joining ? 1 : -1) } : c), toast: { id: Date.now(), message: joining ? "Challenge joined." : "You left the challenge.", tone: "success" } }; }),
  toggleReaction: (activityId, reactionType) => set((state) => ({ activities: state.activities.map((activity) => activity.id === activityId ? { ...activity, reactions: activity.reactions.map((r) => r.type === reactionType ? { ...r, reacted: !r.reacted, count: r.count + (r.reacted ? -1 : 1) } : r) } : activity) })),
  markNotificationRead: (id) => set((state) => ({ notifications: state.notifications.map((n) => n.id === id ? { ...n, read: true } : n) })), markAllRead: () => set((state) => ({ notifications: state.notifications.map((n) => ({ ...n, read: true })) })),
  pushDemoEvent: () => set((state) => { const notification = { id: `live-${Date.now()}`, type: "social" as const, message: "Sarah reacted 🔥 to your 12-day streak.", createdAt: new Date().toISOString(), read: false }; return { notifications: [notification, ...state.notifications], toast: { id: Date.now(), message: "New activity from Sarah.", tone: "info" } }; }),
  setTheme: (theme) => set({ theme }), setSidebarCollapsed: (value) => set({ sidebarCollapsed: value }), setCommandOpen: (value) => set({ commandOpen: value }), notify: (message, tone = "info") => set({ toast: { id: Date.now(), message, tone } }), updatePreference: (key, value) => set((state) => ({ preferences: { ...state.preferences, [key]: value } })),
}), { name: "streakup-demo", partialize: (state) => ({ habits: state.habits, challenges: state.challenges, activities: state.activities, notifications: state.notifications, theme: state.theme, preferences: state.preferences }) }));
