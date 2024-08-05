import { NextRequest, NextResponse } from "next/server"
import authConfig from "@/auth.config"
import {
  apiAuthPrefix,
  authRoutes,
  DEFAULT_LOGIN_REDIRECT,
  publicRoutes,
} from "@/routes"
import NextAuth from "next-auth"

// Use only one of the two middleware options below
// 1. Use middleware directly
export const { auth } = NextAuth(authConfig)
export default auth((req) => {
  const { nextUrl } = req
  const isLoggedIn = !!req.auth
  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix)
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname)
  const isAuthRoute = authRoutes.includes(nextUrl.pathname)

  if (isApiAuthRoute) {
    return NextResponse.next()
  }

  if (isAuthRoute) {
    if (isLoggedIn) {
      return NextResponse.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl))
    }
    return NextResponse.next()
  }

  if (!isLoggedIn && !isPublicRoute) {
    return NextResponse.redirect(new URL(authRoutes[0], nextUrl))
  }

  return NextResponse.next()
})

// 2. Wrapped middleware option
// const { auth } = NextAuth(authConfig)
// export default auth(async function middleware(req: NextRequest) {
//   // Your custom middleware logic goes here
//   const { nextUrl } = req
//   const isLoggedIn = !!req.cookies.get("next-auth")

//   const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix)
//   const isPublicRoute = publicRoutes.includes(nextUrl.pathname)
//   const isAuthRoute = authRoutes.includes(nextUrl.pathname)

//   if (isApiAuthRoute) {
//     return NextResponse.next()
//   }

//   if (isAuthRoute) {
//     if (isLoggedIn) {
//       return NextResponse.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl))
//     }
//     return NextResponse.next()
//   }

//   if (!isLoggedIn && !isPublicRoute) {
//     return NextResponse.redirect(new URL(authRoutes[0], nextUrl))
//   }

//   return NextResponse.next()
// })

// Optionally, don't invoke Middleware on some paths

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
}
