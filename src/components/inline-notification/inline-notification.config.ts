import { AlertTriangle, Info, CheckCircle } from 'lucide-react'
import type { InlineNotificationVariant } from './inline-notification.types'

export const variantConfig: Record<
  InlineNotificationVariant,
  {
    icon: React.ElementType
    accent: string
    iconBg: string
    iconText: string
  }
> = {
  danger: {
    icon: AlertTriangle,
    accent: 'bg-destructive',
    iconBg: 'bg-destructive/10',
    iconText: 'text-destructive'
  },
  info: {
    icon: Info,
    accent: 'bg-ring',
    iconBg: 'bg-muted',
    iconText: 'text-foreground'
  },
  success: {
    icon: CheckCircle,
    accent: 'bg-emerald-500',
    iconBg: 'bg-emerald-500/10',
    iconText: 'text-emerald-600'
  }
}
