import type { Metadata } from "next";
import { headers } from "next/headers";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3001";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;
  const description = "Turn daily habits into visible momentum with streaks, focus sessions, challenges, and a supportive community.";
  return {
    title: { default: "StreakUp — Build habits that stick", template: "%s · StreakUp" }, description,
    icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
    openGraph: { title: "StreakUp — Build habits that actually stick.", description, type: "website", images: [{ url: `${origin}/og.png`, width: 1536, height: 1024, alt: "StreakUp habit tracking and community progress" }] },
    twitter: { card: "summary_large_image", title: "StreakUp — Build habits that actually stick.", description, images: [`${origin}/og.png`] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><body className={`${geistSans.variable} ${geistMono.variable}`}><Providers>{children}</Providers></body></html>;
}
