import { z } from 'zod'

export const LoginFormSchema = z.object({
  email: z.string().pipe(z.email()),
  password: z.string().min(1)
})

export type LoginFormInput = z.infer<typeof LoginFormSchema>
