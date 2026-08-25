import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

test("uses the native Next.js runtime expected by Vercel", async () => {
  const [packageSource, vercelSource] = await Promise.all([
    readFile(new URL("package.json", root), "utf8"),
    readFile(new URL("vercel.json", root), "utf8"),
  ]);
  const packageJson = JSON.parse(packageSource);
  const vercel = JSON.parse(vercelSource);

  assert.equal(packageJson.scripts.dev, "next dev");
  assert.equal(packageJson.scripts.build, "next build");
  assert.equal(packageJson.scripts.start, "next start");
  assert.equal(packageJson.engines.node, "22.x");
  assert.ok(packageJson.dependencies.next);
  assert.equal(vercel.framework, "nextjs");
  assert.equal(packageJson.dependencies.vinext, undefined);
  assert.equal(packageJson.devDependencies.wrangler, undefined);
});

test("contains every public and product route required for deployment", async () => {
  const pages = [
    "app/page.tsx",
    "app/(auth)/login/page.tsx",
    "app/(auth)/signup/page.tsx",
    "app/(auth)/forgot-password/page.tsx",
    "app/(onboarding)/onboarding/page.tsx",
    "app/(product)/dashboard/page.tsx",
    "app/(product)/habits/page.tsx",
    "app/(product)/habits/[id]/page.tsx",
    "app/(product)/focus/page.tsx",
    "app/(product)/challenges/page.tsx",
    "app/(product)/challenges/[id]/page.tsx",
    "app/(product)/leaderboard/page.tsx",
    "app/(product)/community/page.tsx",
    "app/(product)/profile/page.tsx",
    "app/(product)/profile/[username]/page.tsx",
    "app/(product)/achievements/page.tsx",
    "app/(product)/notifications/page.tsx",
    "app/(product)/settings/page.tsx",
    "app/not-found.tsx",
  ];
  await Promise.all(pages.map((path) => access(new URL(path, root))));
});

test("keeps secrets and generated output out of the repository", async () => {
  const gitignore = await readFile(new URL(".gitignore", root), "utf8");
  assert.match(gitignore, /\.env\*/);
  assert.match(gitignore, /\.vercel/);
  assert.match(gitignore, /\.next/);
});
