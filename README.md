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
4. Configure the `AUTH_*` values from `.env.example` in Vercel Project Settings. Add `https://your-domain.example/api/auth/callback/google` as an authorized redirect URI in Google Cloud Console.
5. Optionally set `NEXT_PUBLIC_APP_URL` to your canonical custom domain for social metadata, then deploy. Authentication credentials must never be committed to the repository.

## Google authentication

1. Create an OAuth 2.0 Web application in Google Cloud Console.
2. Add `http://localhost:3000/api/auth/callback/google` for local development and the equivalent HTTPS production URL as authorized redirect URIs.
3. Copy `.env.example` to `.env.local`, set the Google client ID and secret, and generate `AUTH_SECRET` with `npx auth secret`.
4. Start the app with `npm run dev` and use **Continue with Google** on the sign-in or sign-up page.

The project pins Node.js `22.x` and includes a minimal `vercel.json`, while build and output settings remain on Vercel's native Next.js defaults.

## Third-party artwork

Reaction stickers use unmodified [Twemoji](https://github.com/jdecked/twemoji) SVG artwork by Twitter, Inc. and other contributors, licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). The bundled asset attribution is available in `public/stickers/twemoji/ATTRIBUTION.md`.
