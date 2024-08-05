"use client"

import { DEFAULT_LOGIN_REDIRECT } from "@/routes"
import { signIn } from "next-auth/react"
import { FaGithub } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"

import { Button } from "@/components/ui/button"

export const Socials = () => {
  const onClick = (provider: "github" | "spotify") => {
    signIn(provider, { callbackUrl: DEFAULT_LOGIN_REDIRECT })
  }

  return (
    <div className="flex w-full items-center gap-x-2">
      <Button
        variant="outline"
        className="w-full"
        size={"lg"}
        onClick={() => onClick("spotify")}
      >
        <FcGoogle className="h-5 w-5" />
        <span className="ml-2 font-semibold">Google</span>
      </Button>
      <Button
        variant="outline"
        className="w-full"
        size={"lg"}
        onClick={() => onClick("github")}
      >
        <FaGithub className="h-5 w-5" />
        <span className="ml-2 font-semibold">GitHub</span>
      </Button>
    </div>
  )
}
