import { account } from '@/lib/appwrite/client'

export async function changePassword(newPassword: string, oldPassword: string) {
  return account.updatePassword({
    password: newPassword,
    oldPassword: oldPassword
  })
}
