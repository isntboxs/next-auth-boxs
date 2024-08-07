"use client"

import { useState, useTransition } from "react"
import { LOGIN_ACTION } from "@/actions/login-action"
import { LoginSchema, LoginSchemaType } from "@/schemas"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { CardWrapper } from "@/components/global/auth/card-wrapper"
import { FormError } from "@/components/global/form-notif/form-error"
import { FormSuccess } from "@/components/global/form-notif/form-success"

export const LoginForm = () => {
  const [error, setError] = useState<string | undefined>("")
  const [success, setSuccess] = useState<string | undefined>("")

  const [isPending, startTransition] = useTransition()

  const form = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const onSubmit = (value: LoginSchemaType) => {
    setError("")
    setSuccess("")

    startTransition(() =>
      LOGIN_ACTION(value).then((data) => {
        setError(data?.error)
        setSuccess(data?.success)
      })
    )
  }

  return (
    <CardWrapper
      headerLabel={"welcome back!"}
      backButtonLabel={"don't have an account?"}
      backButtonHref={"/auth/register"}
      showSocials
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="username@example.com"
                      type="email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="********"
                      type="password"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormError message={error} />
          <FormSuccess message={success} />
          <Button type="submit" className="w-full">
            login
          </Button>
        </form>
      </Form>
    </CardWrapper>
  )
}
