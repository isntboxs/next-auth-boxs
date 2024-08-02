import { Poppins } from "next/font/google"

import { siteConfig } from "@/config/site-config"
import { cn } from "@/lib/utils"
import BoxsLogo from "@/components/global/boxs-logo"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

interface AuthHeaderProps {
  label: string
}

export const AuthHeader = ({ label }: AuthHeaderProps) => {
  return (
    <div className="flex w-full flex-col items-center gap-y-4 text-center">
      <h1 className={cn("text-6xl font-bold", poppins.className)}>
        <BoxsLogo className="inline-block w-11 fill-current" />
        <span className="ml-3">{siteConfig.name}</span>
      </h1>
      <p className="text-muted-foreground">{label}</p>
    </div>
  )
}
