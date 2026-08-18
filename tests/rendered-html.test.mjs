import assert from "node:assert/strict";
import test from "node:test";

const workerUrl = new URL("../dist/server/index.js", import.meta.url);
workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
const { default: worker } = await import(workerUrl.href);

async function render(pathname = "/") {
  return worker.fetch(
    new Request(`http://localhost${pathname}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the StreakUp product landing page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  const html = await response.text();
  assert.match(html, /StreakUp/);
  assert.match(html, /Build habits that/);
  assert.match(html, /Start Your Streak/);
  assert.match(html, /og\.png/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/i);
});

test("renders every primary product surface", async () => {
  const routes = [
    ["/dashboard", "Ready to build momentum"], ["/habits", "My Habits"], ["/habits/read-20", "Completion history"],
    ["/focus", "One task. One timer"], ["/challenges", "Turn personal goals"], ["/challenges/30-days-reading", "30 Days of Reading"],
    ["/leaderboard", "Friendly competition"], ["/community", "Celebrate progress"], ["/profile", "Your progress, identity"],
    ["/profile/sarahc", "Sarah Chen"], ["/achievements", "Milestones that make"], ["/notifications", "moments that need"],
    ["/settings", "Choose how StreakUp"], ["/login", "Keep your streak moving"], ["/signup", "Build a system"],
    ["/forgot-password", "Reset your password"], ["/onboarding", "What do you want to improve"],
  ];
  for (const [pathname, expected] of routes) {
    const response = await render(pathname);
    assert.equal(response.status, 200, pathname);
    assert.match(await response.text(), new RegExp(expected, "i"), pathname);
  }
});
