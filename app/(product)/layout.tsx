import { AppShell } from "@/components/layout/app-shell";
import { auth } from "@/auth";

export default async function ProductLayout({children}:{children:React.ReactNode}) {
  const session = await auth();
  return <AppShell viewer={session?.user}>{children}</AppShell>;
}
