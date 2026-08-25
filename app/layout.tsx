import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/providers";

const deploymentHost = process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;
const siteUrl = process.env.NEXT_PUBLIC_APP_URL ?? (deploymentHost ? `https://${deploymentHost}` : "http://localhost:3000");
const description = "Turn daily habits into visible momentum with streaks, focus sessions, challenges, and a supportive community.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "StreakUp — Build habits that stick", template: "%s · StreakUp" },
  description,
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: { title: "StreakUp — Build habits that actually stick.", description, type: "website", images: [{ url: "/og.png", width: 1536, height: 1024, alt: "StreakUp habit tracking and community progress" }] },
  twitter: { card: "summary_large_image", title: "StreakUp — Build habits that actually stick.", description, images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><body><Providers>{children}</Providers></body></html>;
}
