# StreakUp

StreakUp is a production-oriented social productivity frontend for building habits through visible progress, streaks, focus sessions, challenges, and community accountability.

## Included product surfaces

- Public landing, authentication, password recovery, and five-step onboarding
- Responsive product shell with collapsible desktop sidebar and mobile bottom navigation
- Dashboard, habit tracking and history, focus timer, challenges, leaderboard, community, profiles, achievements, notifications, and settings
- Light, dark, and system appearance modes
- Optimistic habit, challenge, reaction, and notification interactions
- Typed mock data, service abstractions, and a persisted Zustand demo store
- Recharts analytics, consistency heatmap, accessible Radix/shadcn-style primitives, and Motion microinteractions

## Local development

```bash
npm install
npm run dev
```

Use `npm test` for the production build and route smoke suite, `npm run lint` for code quality, and `npx tsc --noEmit` for strict TypeScript validation.

The prototype stores mutable demo state in browser storage. The service layer under `services/` is intentionally isolated so a REST API, Server Actions, Supabase, or another backend can replace the mock implementation without rewriting page UI.
