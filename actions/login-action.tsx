"use server"

import { LoginSchema, LoginSchemaType } from "@/schemas"

export const LOGIN_ACTION = async (value: LoginSchemaType) => {
  const validatedFields = LoginSchema.safeParse(value)

  if (!validatedFields.success) {
    return { error: "invalid email or password" }
  }

  return { success: "email sent!" }
}
