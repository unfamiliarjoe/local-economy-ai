import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const role = req.cookies.get("demo_role")?.value;
  const path = req.nextUrl.pathname;

  if (path.startsWith("/app") && !(role === "staff" || role === "municipality_admin" || role === "platform_admin")) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
  if (path.startsWith("/resident") && role !== "resident") {
    return NextResponse.redirect(new URL("/login", req.url));
  }
  if (path.startsWith("/business") && role !== "vendor") {
    return NextResponse.redirect(new URL("/login", req.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/app/:path*", "/resident/:path*", "/business/:path*"]
};
