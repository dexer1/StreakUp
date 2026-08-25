import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/providers";

const description = "Turn daily habits into visible momentum with streaks, focus sessions, challenges, and a supportive community.";

function resolveMetadataBase(): URL {
  const candidates = [
    process.env.NEXT_PUBLIC_APP_URL,
    process.env.VERCEL_PROJECT_PRODUCTION_URL,
    process.env.VERCEL_URL,
  ];

  for (const candidate of candidates) {
    const value = candidate?.trim();
    if (!value) continue;

    try {
      return new URL(/^https?:\/\//i.test(value) ? value : `https://${value}`);
    } catch {
      // Ignore malformed optional configuration and try the next Vercel URL.
    }
  }

  return new URL("http://localhost:3000");
}

export const metadata: Metadata = {
  metadataBase: resolveMetadataBase(),
  title: { default: "StreakUp — Build habits that stick", template: "%s · StreakUp" },
  description,
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: { title: "StreakUp — Build habits that actually stick.", description, type: "website", images: [{ url: "/og.png", width: 1536, height: 1024, alt: "StreakUp habit tracking and community progress" }] },
  twitter: { card: "summary_large_image", title: "StreakUp — Build habits that actually stick.", description, images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><body><Providers>{children}</Providers></body></html>;
}
