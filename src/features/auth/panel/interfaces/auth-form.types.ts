import { awUser } from '@/lib/appwrite/interfaces/appwrite.interface'

export interface AuthFormData extends Omit<awUser, 'userId'> {
  remember: boolean
}
