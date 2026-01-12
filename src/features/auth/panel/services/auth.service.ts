import { account, ID } from '@/lib/appwrite/client'
import type { AuthFormData } from '../interfaces/auth-form.types'

export const authService = {
  login: async (data: AuthFormData) => {
    return account.createEmailPasswordSession({
      email: data.email,
      password: data.password
    })
  },

  register: async (data: AuthFormData) => {
    await account.create({
      userId: ID.unique(),
      email: data.email,
      password: data.password,
      name: data.name
    })

    return account.createEmailPasswordSession({
      email: data.email,
      password: data.password
    })
  }
}
