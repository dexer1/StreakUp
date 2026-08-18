export type Category = "Health" | "Learning" | "Fitness" | "Mindfulness" | "Productivity" | "Other";
export type Visibility = "Private" | "Friends" | "Public";

export interface User {
  id: string;
  name: string;
  username: string;
  initials: string;
  bio: string;
  joinedAt: string;
  level: number;
  xp: number;
  nextLevelXp: number;
  points: number;
  currentStreak: number;
  longestStreak: number;
  accent: string;
}

export interface Habit {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  category: Category;
  frequency: string;
  currentStreak: number;
  bestStreak: number;
  completionRate: number;
  completedToday: boolean;
  archived: boolean;
  goalType: "completion" | "duration" | "quantity";
  goalValue?: number;
  goalUnit?: string;
  visibility: Visibility;
  reminder?: string;
  createdAt: string;
}

export interface HabitLog { id: string; habitId: string; date: string; completed: boolean; value?: number; }

export interface Challenge {
  id: string;
  title: string;
  description: string;
  category: Category;
  icon: string;
  startDate: string;
  endDate: string;
  participants: number;
  joined: boolean;
  progress: number;
  difficulty: "Easy" | "Medium" | "Hard";
  creatorId: string;
  visibility: Visibility;
  goal: string;
}

export interface ChallengeParticipant { challengeId: string; userId: string; progress: number; streak: number; rank: number; }
export interface Reaction { type: "fire" | "clap" | "strong"; count: number; reacted: boolean; }
export interface Activity { id: string; userId: string; type: "streak" | "challenge" | "level" | "focus" | "achievement"; message: string; detail: string; createdAt: string; reactions: Reaction[]; }
export interface AppNotification { id: string; type: "streak" | "challenge" | "social" | "achievement" | "friend"; message: string; createdAt: string; read: boolean; }
export interface Achievement { id: string; name: string; description: string; icon: string; xpReward: number; unlocked: boolean; unlockedAt?: string; progress?: number; target?: number; }
export interface FocusSession { id: string; date: string; durationMinutes: number; habitId?: string; completed: boolean; }
export interface LeaderboardEntry { rank: number; userId: string; xp: number; currentStreak: number; longestStreak: number; challengesCompleted: number; }

export interface CreateHabitInput {
  title: string;
  description: string;
  icon: string;
  color: string;
  category: Category;
  frequency: string;
  reminder?: string;
  goalType: Habit["goalType"];
  goalValue?: number;
  goalUnit?: string;
  visibility: Visibility;
}
