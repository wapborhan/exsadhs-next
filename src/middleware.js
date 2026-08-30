import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export const middleware = async (req) => {
  const token = await getToken({ req });
  const isToken = Boolean(token);
  const isAdmin = token?.role === "admin";
  const isAdminRoute = req.nextUrl.pathname.startsWith("/event");
  const isAuthPage = req.nextUrl.pathname.startsWith("/auth");

  // If already logged in and trying to access signin page → redirect to home
  if (isToken && isAuthPage) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // If not admin but trying to access admin route
  if (!isAdmin && isAdminRoute) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
};
