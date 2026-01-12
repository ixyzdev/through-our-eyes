import { z } from 'zod'

export const RegisterFormSchema = z
  .object({
    email: z.string().pipe(z.email()),
    username: z.string().min(3),
    password: z.string().min(8),
    confirmPassword: z.string()
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Las contraseñas no coinciden'
  })
