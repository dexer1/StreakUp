import Link from "next/link";
import { AuthShell, SocialButtons } from "@/components/auth/auth-shell";

export default function SignupPage() {
  return <AuthShell eyebrow="Start your streak" title="Build a system you’ll want to keep." description="Your first habit is only a few minutes away.">
    <SocialButtons redirectTo="/onboarding"/>
    <p className="mt-4 text-center text-xs leading-relaxed text-muted">By continuing, you agree to the <Link href="/terms" className="font-semibold text-foreground hover:text-primary">Terms</Link> and acknowledge the <Link href="/privacy" className="font-semibold text-foreground hover:text-primary">Privacy Policy</Link>.</p>
    <p className="mt-6 text-center text-sm text-muted">Already a member? <Link href="/login" className="font-semibold text-primary">Sign in</Link></p>
  </AuthShell>;
}
