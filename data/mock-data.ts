import type { Achievement, Activity, AppNotification, Challenge, ChallengeParticipant, FocusSession, Habit, HabitLog, LeaderboardEntry, User } from "@/types";

export const currentUser: User = { id: "alex", name: "Alex Morgan", username: "alexmorgan", initials: "AM", bio: "Building a calmer, stronger life one repeatable day at a time.", joinedAt: "2025-02-14", level: 8, xp: 3450, nextLevelXp: 4000, points: 4280, currentStreak: 12, longestStreak: 34, accent: "#f9734f" };

export const users: User[] = [
  currentUser,
  { id: "sarah", name: "Sarah Chen", username: "sarahc", initials: "SC", bio: "Reader, runner, early riser.", joinedAt: "2024-10-02", level: 12, xp: 7820, nextLevelXp: 8500, points: 9210, currentStreak: 30, longestStreak: 62, accent: "#8b5cf6" },
  { id: "mike", name: "Mike Torres", username: "miket", initials: "MT", bio: "Shipping code and building consistency.", joinedAt: "2025-01-18", level: 10, xp: 6210, nextLevelXp: 7000, points: 7100, currentStreak: 22, longestStreak: 41, accent: "#3b82f6" },
  { id: "emma", name: "Emma Wilson", username: "emmaw", initials: "EW", bio: "Mindful mornings and mountain weekends.", joinedAt: "2025-03-01", level: 9, xp: 5100, nextLevelXp: 5800, points: 6030, currentStreak: 18, longestStreak: 29, accent: "#14b8a6" },
  { id: "daniel", name: "Daniel Kim", username: "dankim", initials: "DK", bio: "Always learning.", joinedAt: "2025-05-20", level: 7, xp: 3180, nextLevelXp: 3500, points: 3970, currentStreak: 9, longestStreak: 19, accent: "#f59e0b" },
  { id: "maya", name: "Maya Patel", username: "mayap", initials: "MP", bio: "Small steps, serious momentum.", joinedAt: "2024-12-04", level: 11, xp: 6990, nextLevelXp: 7600, points: 8040, currentStreak: 26, longestStreak: 47, accent: "#ec4899" },
  { id: "leo", name: "Leo Martin", username: "leom", initials: "LM", bio: "Training for life.", joinedAt: "2025-06-11", level: 6, xp: 2440, nextLevelXp: 2900, points: 3100, currentStreak: 8, longestStreak: 16, accent: "#22c55e" },
  { id: "nora", name: "Nora Blake", username: "norab", initials: "NB", bio: "Designer in deep focus.", joinedAt: "2024-09-24", level: 13, xp: 8990, nextLevelXp: 9600, points: 10240, currentStreak: 35, longestStreak: 71, accent: "#6366f1" },
  { id: "james", name: "James Reed", username: "jamesr", initials: "JR", bio: "One percent better.", joinedAt: "2025-04-16", level: 5, xp: 1810, nextLevelXp: 2200, points: 2330, currentStreak: 6, longestStreak: 13, accent: "#0ea5e9" },
  { id: "zoe", name: "Zoe Brooks", username: "zoeb", initials: "ZB", bio: "Health, books, community.", joinedAt: "2025-01-30", level: 9, xp: 5470, nextLevelXp: 5800, points: 6300, currentStreak: 20, longestStreak: 38, accent: "#e879f9" },
];

export const initialHabits: Habit[] = [
  { id: "morning-run", title: "Morning Run", description: "Start the day with fresh air and movement.", icon: "Footprints", color: "#f9734f", category: "Fitness", frequency: "Every day", currentStreak: 14, bestStreak: 27, completionRate: 92, completedToday: true, archived: false, goalType: "quantity", goalValue: 5, goalUnit: "km", visibility: "Friends", reminder: "06:30", createdAt: "2025-05-02" },
  { id: "read-20", title: "Read 20 min", description: "Read a book without distractions.", icon: "BookOpen", color: "#8b5cf6", category: "Learning", frequency: "Every day", currentStreak: 12, bestStreak: 34, completionRate: 88, completedToday: true, archived: false, goalType: "duration", goalValue: 20, goalUnit: "minutes", visibility: "Public", reminder: "21:00", createdAt: "2025-03-14" },
  { id: "water", title: "Drink 2L Water", description: "Stay hydrated through the day.", icon: "Droplets", color: "#0ea5e9", category: "Health", frequency: "Every day", currentStreak: 8, bestStreak: 22, completionRate: 84, completedToday: true, archived: false, goalType: "quantity", goalValue: 8, goalUnit: "glasses", visibility: "Private", reminder: "09:00", createdAt: "2025-06-18" },
  { id: "coding", title: "Practice Coding", description: "Build or learn something useful.", icon: "Code2", color: "#14b8a6", category: "Productivity", frequency: "Weekdays", currentStreak: 6, bestStreak: 18, completionRate: 78, completedToday: false, archived: false, goalType: "duration", goalValue: 45, goalUnit: "minutes", visibility: "Friends", reminder: "18:30", createdAt: "2025-04-09" },
  { id: "no-sugar", title: "No Sugar", description: "Skip added sugar today.", icon: "Apple", color: "#22c55e", category: "Health", frequency: "Every day", currentStreak: 4, bestStreak: 15, completionRate: 71, completedToday: false, archived: false, goalType: "completion", visibility: "Private", createdAt: "2025-07-20" },
  { id: "meditate", title: "Morning Mindfulness", description: "Breathe and reset before the day begins.", icon: "Brain", color: "#ec4899", category: "Mindfulness", frequency: "Mon, Wed, Fri, Sun", currentStreak: 9, bestStreak: 16, completionRate: 81, completedToday: false, archived: false, goalType: "duration", goalValue: 10, goalUnit: "minutes", visibility: "Public", reminder: "07:15", createdAt: "2025-05-26" },
  { id: "journal", title: "Evening Journal", description: "Write one clear reflection from the day.", icon: "NotebookPen", color: "#f59e0b", category: "Mindfulness", frequency: "Every day", currentStreak: 0, bestStreak: 11, completionRate: 66, completedToday: false, archived: true, goalType: "completion", visibility: "Private", createdAt: "2025-02-01" },
];

export const habitLogs: HabitLog[] = Array.from({ length: 126 }, (_, i) => ({ id: `log-${i}`, habitId: initialHabits[i % 6].id, date: new Date(Date.now() - i * 86400000).toISOString().slice(0, 10), completed: i % 9 !== 0, value: (i % 5) + 1 }));

export const initialChallenges: Challenge[] = [
  { id: "30-days-reading", title: "30 Days of Reading", description: "Read at least 20 minutes every day.", category: "Learning", icon: "BookOpen", startDate: "2026-08-01", endDate: "2026-08-30", participants: 1284, joined: true, progress: 60, difficulty: "Medium", creatorId: "sarah", visibility: "Public", goal: "20 minutes daily" },
  { id: "10k-steps", title: "10K Steps Daily", description: "Move more and reach 10,000 steps each day.", category: "Fitness", icon: "Footprints", startDate: "2026-08-10", endDate: "2026-09-08", participants: 2310, joined: false, progress: 0, difficulty: "Medium", creatorId: "emma", visibility: "Public", goal: "10,000 steps daily" },
  { id: "no-sugar-week", title: "No Sugar Week", description: "Seven days without added sugar.", category: "Health", icon: "Apple", startDate: "2026-08-17", endDate: "2026-08-23", participants: 842, joined: true, progress: 29, difficulty: "Hard", creatorId: "maya", visibility: "Public", goal: "No added sugar" },
  { id: "code-every-day", title: "Code Every Day", description: "Ship one meaningful coding session daily.", category: "Productivity", icon: "Code2", startDate: "2026-08-01", endDate: "2026-08-31", participants: 965, joined: true, progress: 58, difficulty: "Hard", creatorId: "mike", visibility: "Public", goal: "45 minutes daily" },
  { id: "early-bird", title: "Wake Up Before 7AM", description: "Build an intentional morning routine.", category: "Productivity", icon: "Sunrise", startDate: "2026-09-01", endDate: "2026-09-21", participants: 604, joined: false, progress: 0, difficulty: "Medium", creatorId: "nora", visibility: "Friends", goal: "Wake before 7AM" },
  { id: "meditate-10", title: "Meditate 10 Minutes", description: "Make space for a calmer mind.", category: "Mindfulness", icon: "Brain", startDate: "2026-08-15", endDate: "2026-09-13", participants: 1591, joined: false, progress: 0, difficulty: "Easy", creatorId: "zoe", visibility: "Public", goal: "10 minutes daily" },
  { id: "deep-work", title: "Five Focused Hours", description: "Accumulate five hours of distraction-free work.", category: "Productivity", icon: "Timer", startDate: "2026-08-17", endDate: "2026-08-23", participants: 438, joined: true, progress: 48, difficulty: "Medium", creatorId: "alex", visibility: "Friends", goal: "5 hours this week" },
  { id: "run-50", title: "Run 50K This Month", description: "Build endurance across the month.", category: "Fitness", icon: "Activity", startDate: "2026-08-01", endDate: "2026-08-31", participants: 735, joined: false, progress: 0, difficulty: "Hard", creatorId: "leo", visibility: "Public", goal: "50 km total" },
  { id: "daily-journal", title: "Daily Reflection", description: "Close every day with one honest paragraph.", category: "Mindfulness", icon: "NotebookPen", startDate: "2026-08-20", endDate: "2026-09-18", participants: 512, joined: false, progress: 0, difficulty: "Easy", creatorId: "daniel", visibility: "Public", goal: "One entry daily" },
  { id: "learn-language", title: "Learn 10 New Words", description: "Grow your vocabulary every day.", category: "Learning", icon: "Languages", startDate: "2026-08-05", endDate: "2026-09-03", participants: 1120, joined: false, progress: 0, difficulty: "Medium", creatorId: "james", visibility: "Public", goal: "10 words daily" },
];

export const challengeParticipants: ChallengeParticipant[] = [
  { challengeId: "30-days-reading", userId: "sarah", progress: 100, streak: 18, rank: 1 }, { challengeId: "30-days-reading", userId: "mike", progress: 96, streak: 17, rank: 2 }, { challengeId: "30-days-reading", userId: "alex", progress: 93, streak: 8, rank: 3 }, { challengeId: "30-days-reading", userId: "emma", progress: 89, streak: 14, rank: 4 },
];

const activitySeeds: Array<[string, Activity["type"], string, string]> = [
  ["sarah", "streak", "completed a 30-day reading streak.", "A month of pages, one day at a time."], ["mike", "challenge", "joined Code Every Day.", "Ready to ship something small every day."], ["emma", "level", "reached Level 12.", "Consistency pays off."], ["daniel", "focus", "finished a 50-minute focus session.", "Deep work on language practice."], ["maya", "achievement", "unlocked Unstoppable.", "30 days without missing a beat."], ["leo", "streak", "reached an 8-day running streak.", "The hardest part was day one."], ["nora", "challenge", "took the lead in Deep Work Week.", "6 focused sessions completed."], ["zoe", "streak", "protected a 20-day mindfulness streak.", "Ten quiet minutes made the difference."], ["sarah", "focus", "completed 2 hours of focused reading.", "Phone away. Pages turned."], ["mike", "streak", "hit 22 days of coding practice.", "Small commits, real momentum."], ["emma", "challenge", "completed Day 18 of 30 Days of Reading.", "Still going strong."], ["james", "achievement", "unlocked First Step.", "The first check-in is on the board."], ["maya", "level", "reached Level 11.", "Next stop: 7,600 XP."], ["daniel", "challenge", "joined Meditate 10 Minutes.", "Starting with one calm breath."], ["nora", "streak", "extended a 35-day streak.", "A new personal record."], ["zoe", "challenge", "invited friends to Daily Reflection.", "Accountability is better together."], ["leo", "focus", "finished a 25-minute focus sprint.", "Training plan locked in."], ["sarah", "achievement", "unlocked Consistency King.", "100 days of showing up."],
];
export const initialActivities: Activity[] = activitySeeds.map((a, i) => ({ id: `activity-${i}`, userId: a[0], type: a[1], message: a[2], detail: a[3], createdAt: new Date(Date.now() - (i + 2) * 480000).toISOString(), reactions: [{ type: "fire", count: 18 - (i % 7), reacted: false }, { type: "clap", count: 5 + (i % 5), reacted: false }, { type: "strong", count: 3 + (i % 4), reacted: false }] }));

export const initialNotifications: AppNotification[] = [
  { id: "n1", type: "streak", message: "Your Reading streak expires in 3 hours.", createdAt: new Date(Date.now() - 8 * 60000).toISOString(), read: false },
  { id: "n2", type: "challenge", message: "Sarah passed you in Code Every Day.", createdAt: new Date(Date.now() - 34 * 60000).toISOString(), read: false },
  { id: "n3", type: "social", message: "Mike sent a Fire reaction to your 14-day run streak.", createdAt: new Date(Date.now() - 75 * 60000).toISOString(), read: false },
  { id: "n4", type: "achievement", message: "You unlocked ‘On Fire’ and earned 100 XP.", createdAt: new Date(Date.now() - 3 * 3600000).toISOString(), read: false },
  { id: "n5", type: "friend", message: "Emma joined your Deep Work challenge.", createdAt: new Date(Date.now() - 7 * 3600000).toISOString(), read: true },
  { id: "n6", type: "challenge", message: "No Sugar Week starts today.", createdAt: new Date(Date.now() - 15 * 3600000).toISOString(), read: true },
  { id: "n7", type: "social", message: "Nora applauded your focus milestone.", createdAt: new Date(Date.now() - 26 * 3600000).toISOString(), read: true },
  { id: "n8", type: "streak", message: "Your 12-day overall streak is safe for today.", createdAt: new Date(Date.now() - 2 * 86400000).toISOString(), read: true },
  { id: "n9", type: "friend", message: "Daniel started following you.", createdAt: new Date(Date.now() - 3 * 86400000).toISOString(), read: true },
  { id: "n10", type: "achievement", message: "Only 2 focus sessions until Deep Worker.", createdAt: new Date(Date.now() - 4 * 86400000).toISOString(), read: true },
  { id: "n11", type: "challenge", message: "You moved to #3 in 30 Days of Reading.", createdAt: new Date(Date.now() - 5 * 86400000).toISOString(), read: true },
];

export const achievements: Achievement[] = [
  { id: "first", name: "First Step", description: "Complete your first habit.", icon: "Footprints", xpReward: 25, unlocked: true, unlockedAt: "2025-02-15" },
  { id: "fire", name: "On Fire", description: "Maintain a 7-day streak.", icon: "Flame", xpReward: 100, unlocked: true, unlockedAt: "2025-02-22" },
  { id: "unstoppable", name: "Unstoppable", description: "Maintain a 30-day streak.", icon: "Rocket", xpReward: 300, unlocked: true, unlockedAt: "2025-04-02" },
  { id: "focused", name: "Focused", description: "Complete 10 focus sessions.", icon: "Timer", xpReward: 100, unlocked: true, unlockedAt: "2025-03-12" },
  { id: "king", name: "Consistency King", description: "Complete habits for 100 days.", icon: "Crown", xpReward: 500, unlocked: false, progress: 82, target: 100 },
  { id: "social", name: "Social Starter", description: "Join your first challenge.", icon: "Users", xpReward: 50, unlocked: true, unlockedAt: "2025-02-20" },
  { id: "champion", name: "Challenge Champion", description: "Win a challenge.", icon: "Trophy", xpReward: 400, unlocked: false, progress: 0, target: 1 },
  { id: "early", name: "Early Bird", description: "Complete 15 habits before 8 AM.", icon: "Sunrise", xpReward: 150, unlocked: true, unlockedAt: "2025-05-04" },
  { id: "hydrated", name: "Well Hydrated", description: "Log water for 21 days.", icon: "Droplets", xpReward: 180, unlocked: true, unlockedAt: "2025-06-30" },
  { id: "reader", name: "Page Turner", description: "Read for 20 total hours.", icon: "BookOpen", xpReward: 220, unlocked: true, unlockedAt: "2025-07-08" },
  { id: "deep", name: "Deep Worker", description: "Complete 50 focus sessions.", icon: "Brain", xpReward: 300, unlocked: false, progress: 48, target: 50 },
  { id: "comeback", name: "Comeback Kid", description: "Restart after a missed week.", icon: "RotateCcw", xpReward: 75, unlocked: true, unlockedAt: "2025-04-19" },
  { id: "five", name: "High Five", description: "Complete five habits in one day.", icon: "Hand", xpReward: 60, unlocked: true, unlockedAt: "2025-03-18" },
  { id: "team", name: "Team Player", description: "Support 25 friend activities.", icon: "HeartHandshake", xpReward: 125, unlocked: false, progress: 19, target: 25 },
  { id: "month", name: "Perfect Month", description: "Finish a month above 95%.", icon: "CalendarCheck", xpReward: 350, unlocked: false, progress: 88, target: 95 },
  { id: "level10", name: "Double Digits", description: "Reach Level 10.", icon: "Zap", xpReward: 250, unlocked: false, progress: 8, target: 10 },
  { id: "weekend", name: "Weekend Warrior", description: "Complete 12 weekend habits.", icon: "Mountain", xpReward: 120, unlocked: true, unlockedAt: "2025-07-27" },
  { id: "steady", name: "Steady Hand", description: "Keep three habits above 90%.", icon: "ChartNoAxesCombined", xpReward: 200, unlocked: false, progress: 2, target: 3 },
];

export const focusSessions: FocusSession[] = [
  { id: "f1", date: "2026-08-18", durationMinutes: 25, habitId: "coding", completed: true }, { id: "f2", date: "2026-08-18", durationMinutes: 25, habitId: "coding", completed: true }, { id: "f3", date: "2026-08-18", durationMinutes: 35, habitId: "read-20", completed: true }, { id: "f4", date: "2026-08-17", durationMinutes: 50, habitId: "coding", completed: true },
];

export const leaderboard: LeaderboardEntry[] = users.map((user, i) => ({ rank: i + 1, userId: user.id, xp: [8990, 7820, 6990, 6210, 5470, 5100, 4280, 3970, 3100, 2330][i], currentStreak: user.currentStreak, longestStreak: user.longestStreak, challengesCompleted: Math.max(1, 12 - i) })).sort((a,b) => b.xp-a.xp).map((entry,i)=>({...entry,rank:i+1}));

export const weeklyActivity = [{ day: "Mon", completed: 4, rate: 80 }, { day: "Tue", completed: 5, rate: 100 }, { day: "Wed", completed: 4, rate: 80 }, { day: "Thu", completed: 5, rate: 100 }, { day: "Fri", completed: 3, rate: 60 }, { day: "Sat", completed: 5, rate: 100 }, { day: "Sun", completed: 5, rate: 100 }];
