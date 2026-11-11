import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { getSessionEmail, SESSION_COOKIE_NAME } from "@/lib/session";
import { getSupabaseAdmin } from "@/lib/supabase-admin";

const TEAMS_HOST = "teams.sparksforchicago.org";

function unauthorized(pathname: string, request: NextRequest, isTeamsHost: boolean) {
  if (pathname.startsWith("/api/")) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const loginPath = isTeamsHost ? "/login" : "/team/login";
  return NextResponse.redirect(new URL(loginPath, request.url));
}

// Static assets (public/ files, Next's image optimizer, framework internals)
// must never be rewritten into /team or hit the auth check below.
const ASSET_PREFIXES = ["/_next/", "/images/", "/videos/", "/favicon", "/icon"];

export async function proxy(request: NextRequest) {
  const host = request.headers.get("host") || "";
  const isTeamsHost = host === TEAMS_HOST || host.startsWith(`${TEAMS_HOST}:`);

  const url = request.nextUrl.clone();
  let pathname = url.pathname;

  if (ASSET_PREFIXES.some((prefix) => pathname.startsWith(prefix))) {
    return NextResponse.next();
  }

  // teams.sparksforchicago.org serves the /team app at the root, so map
  // every path on that host into the existing /team route tree.
  if (isTeamsHost && !pathname.startsWith("/team") && !pathname.startsWith("/api/team")) {
    pathname = pathname === "/" ? "/team" : `/team${pathname}`;
  }

  const rewriteIfNeeded = () => {
    if (isTeamsHost && url.pathname !== pathname) {
      url.pathname = pathname;
      return NextResponse.rewrite(url);
    }
    return NextResponse.next();
  };

  if (pathname === "/team/login" || pathname === "/api/team/login") {
    return rewriteIfNeeded();
  }

  const session = request.cookies.get(SESSION_COOKIE_NAME)?.value;
  const email = getSessionEmail(session);
  if (!email) {
    return unauthorized(pathname, request, isTeamsHost);
  }

  // Re-check against the admin_users table on every request, not just the
  // cookie signature, so a removed admin loses access immediately instead
  // of keeping a valid session for up to 7 days.
  const supabase = getSupabaseAdmin();
  const { data: admin } = await supabase
    .from("admin_users")
    .select("email")
    .eq("email", email)
    .maybeSingle();

  if (!admin) {
    return unauthorized(pathname, request, isTeamsHost);
  }

  return rewriteIfNeeded();
}

export const config = {
  matcher: [
    "/team/:path*",
    "/api/team/:path*",
    {
      source: "/((?!_next/static|_next/image|favicon.ico).*)",
      has: [{ type: "host", value: "teams.sparksforchicago.org" }],
    },
  ],
};
