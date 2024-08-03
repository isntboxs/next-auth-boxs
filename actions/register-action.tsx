"use server"

import { RegisterSchema, RegisterSchemaType } from "@/schemas"

export const REGISTER_ACTION = async (value: RegisterSchemaType) => {
  const validatedFields = RegisterSchema.safeParse(value)

  if (!validatedFields.success) {
    return { error: "invalid email or password" }
  }

  return { success: "email sent!" }
}
