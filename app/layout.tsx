import type { Metadata } from "next"

import "@/styles/globals.css"

import { siteConfig } from "@/config/site-config"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/providers/theme-provider"

export const metadata: Metadata = {
  title: `boxs ${siteConfig.name}`,
  description: siteConfig.description,
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: dark)",
        href: siteConfig.favicons.dark,
        url: siteConfig.favicons.dark,
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
