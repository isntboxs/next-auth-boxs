"use client"

import Link from "next/link"

import { Button } from "@/components/ui/button"

interface LoginButtonProps {
  href: string
  label: string
}

export const BackButton = ({ href, label }: LoginButtonProps) => {
  return (
    <Button variant="link" size="sm" className="w-full font-normal" asChild>
      <Link href={href}>{label}</Link>
    </Button>
  )
}
