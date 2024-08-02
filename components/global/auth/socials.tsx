"use client"

import { FaGithub } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"

import { Button } from "@/components/ui/button"

export const Socials = () => {
  return (
    <div className="flex w-full items-center gap-x-2">
      <Button
        variant="outline"
        className="w-full"
        size={"lg"}
        onClick={() => {}}
      >
        <FcGoogle className="h-5 w-5" />
        <span className="ml-2 font-semibold">Google</span>
      </Button>
      <Button
        variant="outline"
        className="w-full"
        size={"lg"}
        onClick={() => {}}
      >
        <FaGithub className="h-5 w-5" />
        <span className="ml-2 font-semibold">GitHub</span>
      </Button>
    </div>
  )
}
