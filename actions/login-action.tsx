"use server"

import { signIn } from "@/auth"
import { DEFAULT_LOGIN_REDIRECT } from "@/routes"
import { LoginSchema, LoginSchemaType } from "@/schemas"
import { AuthError } from "next-auth"

export const LOGIN_ACTION = async (value: LoginSchemaType) => {
  const validatedFields = LoginSchema.safeParse(value)

  if (!validatedFields.success) {
    return { error: "invalid email or password" }
  }

  const { email, password } = validatedFields.data

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    })
  } catch (error) {
    // todo:
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "invalid credentials" }
        default:
          return { error: "something went wrong" }
      }
    }

    throw error
  }
}
