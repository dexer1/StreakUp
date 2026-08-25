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

Use `npm run verify` to run strict TypeScript validation, lint, project checks, and the same native Next.js production build used by Vercel.

The prototype stores mutable demo state in browser storage. The service layer under `services/` is intentionally isolated so a REST API, Server Actions, Supabase, or another backend can replace the mock implementation without rewriting page UI.

## Deploy to Vercel

1. Push the repository to GitHub, GitLab, or Bitbucket.
2. Import it from the Vercel dashboard.
3. Keep the detected framework as **Next.js** and the root directory as `./`.
4. No environment variables are required for the current demo frontend. Optionally set `NEXT_PUBLIC_APP_URL` to your canonical custom domain for social metadata.
5. Deploy. Future backend or authentication credentials should be added through Vercel Project Settings, never committed to the repository.

The project pins Node.js `22.x` and includes a minimal `vercel.json`, while build and output settings remain on Vercel's native Next.js defaults.
