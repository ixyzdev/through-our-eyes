export type InlineNotificationVariant = 'danger' | 'info' | 'success'

export interface InlineNotificationProps {
  title: string
  description?: string
  actionLabel?: string
  onAction?: () => void
  onClose?: () => void
  variant?: InlineNotificationVariant
  className?: string
}
