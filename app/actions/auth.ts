"use server";

import { signIn, signOut } from "@/auth";

function safeRedirect(value: FormDataEntryValue | null, fallback: string) {
  return typeof value === "string" && value.startsWith("/") && !value.startsWith("//")
    ? value
    : fallback;
}

export async function signInWithGoogle(formData: FormData) {
  const redirectTo = safeRedirect(formData.get("redirectTo"), "/dashboard");
  await signIn("google", { redirectTo });
}

export async function signOutUser() {
  await signOut({ redirectTo: "/login" });
}
