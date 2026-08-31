import Link from "next/link";
import { AuthShell, SocialButtons } from "@/components/auth/auth-shell";

function redirectPath(value?: string) {
  if (!value) return "/dashboard";
  if (value.startsWith("/") && !value.startsWith("//")) return value;

  try {
    const url = new URL(value);
    return `${url.pathname}${url.search}${url.hash}`;
  } catch {
    return "/dashboard";
  }
}

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ callbackUrl?: string; error?: string }>;
}) {
  const { callbackUrl, error } = await searchParams;

  return <AuthShell eyebrow="Welcome back" title="Keep your streak moving." description="Sign in to see what today needs from you.">
    {error && <div role="alert" className="mb-4 rounded-[10px] border border-danger/30 bg-danger/5 px-3 py-2.5 text-sm text-danger">Google sign-in could not be completed. Please try again.</div>}
    <SocialButtons redirectTo={redirectPath(callbackUrl)}/>
    <p className="mt-4 text-center text-xs text-muted">Google is currently the supported sign-in method.</p>
    <p className="mt-6 text-center text-sm text-muted">New to StreakUp? <Link href="/signup" className="font-semibold text-primary">Create an account</Link></p>
  </AuthShell>;
}
