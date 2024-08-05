"use server"

import { NextResponse } from "next/server"
import { getUserByEmail } from "@/data/user"
import { RegisterSchema, RegisterSchemaType } from "@/schemas"
import bcrypt from "bcryptjs"

import { db } from "@/lib/db"

export const REGISTER_ACTION = async (value: RegisterSchemaType) => {
  const validatedFields = RegisterSchema.safeParse(value)

  if (!validatedFields.success) {
    return { error: "invalid email or password" }
  }

  const { name, email, password } = validatedFields.data
  // hash password
  const hashedPassword = await bcrypt.hash(password, 10)

  // check if user already exists
  const existingUser = await getUserByEmail(email)

  // if user already exists by email return error
  if (existingUser) {
    return { error: "email already registered" }
  }

  // create user in db
  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  })

  // todo: send verification token to email

  return { success: "user created!" }
}
