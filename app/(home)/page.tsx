import { Poppins } from "next/font/google"

import { siteConfig } from "@/config/site-config"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { LoginButton } from "@/components/global/auth/login-button"
import BoxsLogo from "@/components/global/boxs-logo"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

export default function HomePage() {
  return (
    <main className="flex h-full flex-col items-center justify-center">
      <div className="flex flex-col items-center space-y-6 text-center">
        <h1 className={cn("text-6xl font-bold", poppins.className)}>
          <BoxsLogo className="inline-block w-11 fill-current" />
          <span className="ml-3">{siteConfig.name}</span>
        </h1>
        <p>{siteConfig.description}</p>
        <div>
          <LoginButton mode="redirect">
            <Button variant={"default"} size={"lg"}>
              Sign In
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  )
}
