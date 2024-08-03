import * as z from "zod"

export const LoginSchema = z.object({
  email: z.string().email({
    message: "invalid email address",
  }),
  password: z.string().min(1, { message: "password is required" }),
})

export type LoginSchemaType = z.infer<typeof LoginSchema>

export const RegisterSchema = z.object({
  name: z.string().min(1, { message: "name is required" }),
  email: z.string().email({
    message: "invalid email address",
  }),
  password: z.string().min(8, { message: "minimum 8 characters!" }),
})

export type RegisterSchemaType = z.infer<typeof RegisterSchema>
