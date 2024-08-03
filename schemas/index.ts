import * as z from "zod"

export const LoginSchema = z.object({
  email: z.string().email({
    message: "invalid email address",
  }),
  password: z.string().min(1, { message: "password is required" }),
})

export type LoginSchemaType = z.infer<typeof LoginSchema>
