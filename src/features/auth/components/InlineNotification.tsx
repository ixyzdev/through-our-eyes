'use client'

import { cn } from '@/lib/utils'
import { FiAlertTriangle, FiInfo, FiCheckCircle, FiX } from 'react-icons/fi'

type InlineNotificationProps = {
  title: string
  description?: string
  actionLabel?: string
  onAction?: () => void
  onClose?: () => void
  variant?: 'danger' | 'info' | 'success'
  className?: string
}

const variantConfig = {
  danger: {
    icon: FiAlertTriangle,
    accent: 'bg-destructive',
    iconBg: 'bg-destructive/10',
    iconText: 'text-destructive'
  },
  info: {
    icon: FiInfo,
    accent: 'bg-ring',
    iconBg: 'bg-muted',
    iconText: 'text-foreground'
  },
  success: {
    icon: FiCheckCircle,
    accent: 'bg-emerald-500',
    iconBg: 'bg-emerald-500/10',
    iconText: 'text-emerald-600'
  }
} as const

export function InlineNotification({
  title,
  description,
  actionLabel,
  onAction,
  onClose,
  variant = 'danger',
  className
}: InlineNotificationProps) {
  const { icon: Icon, accent, iconBg, iconText } = variantConfig[variant]

  return (
    <div
      className={cn(
        'bg-card relative overflow-hidden rounded-xl border px-5 py-4 shadow-sm',
        variant === 'danger' && 'border-destructive/30',
        variant === 'info' && 'border-border',
        variant === 'success' && 'border-emerald-500/30',
        className
      )}
    >
      {/* Accent bar (INSIDE container) */}
      <div className={cn('absolute inset-y-0 left-0 w-1', accent)} />

      <div className="flex items-start gap-4 pl-2">
        {/* Icon */}
        <div
          className={cn(
            'mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full',
            iconBg,
            iconText
          )}
        >
          <Icon className="h-5 w-5" />
        </div>

        {/* Content */}
        <div className="flex flex-1 items-center justify-between gap-6">
          <div className="space-y-0.5">
            <div className="text-sm leading-tight font-medium">{title}</div>
            {description && (
              <div className="text-muted-foreground text-sm leading-relaxed">
                {description}
              </div>
            )}
          </div>

          <div className="flex items-center gap-3">
            {actionLabel && onAction && (
              <button
                onClick={onAction}
                className="text-primary text-sm font-medium hover:underline"
              >
                {actionLabel}
              </button>
            )}

            {onClose && (
              <button
                onClick={onClose}
                aria-label="Cerrar"
                className="text-muted-foreground hover:bg-muted hover:text-foreground rounded-md p-1.5 transition"
              >
                <FiX className="h-5 w-5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
