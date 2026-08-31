export { auth as proxy } from "@/auth";

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/habits/:path*",
    "/focus/:path*",
    "/challenges/:path*",
    "/leaderboard/:path*",
    "/community/:path*",
    "/achievements/:path*",
    "/notifications/:path*",
    "/profile/:path*",
    "/settings/:path*",
    "/onboarding/:path*",
  ],
};
