import { initialActivities, initialChallenges, initialHabits, initialNotifications, leaderboard, users } from "@/data/mock-data";
import type { CreateHabitInput, Habit } from "@/types";

const delay = (ms = 180) => new Promise((resolve) => setTimeout(resolve, ms));
export async function getHabits() { await delay(); return initialHabits; }
export async function getHabit(id: string) { await delay(); return initialHabits.find((h) => h.id === id); }
export async function completeHabit(id: string) { await delay(100); return { id, completed: true, xp: 10 }; }
export async function createHabit(input: CreateHabitInput): Promise<Habit> { await delay(220); return { ...input, id: input.title.toLowerCase().replace(/[^a-z0-9]+/g, "-") || crypto.randomUUID(), currentStreak: 0, bestStreak: 0, completionRate: 0, completedToday: false, archived: false, createdAt: new Date().toISOString().slice(0,10) }; }
export async function getChallenges() { await delay(); return initialChallenges; }
export async function joinChallenge(id: string) { await delay(120); return { id, joined: true }; }
export async function getUsers() { await delay(); return users; }
export async function getLeaderboard() { await delay(); return leaderboard; }
export async function getActivityFeed() { await delay(); return initialActivities; }
export async function getNotifications() { await delay(); return initialNotifications; }
