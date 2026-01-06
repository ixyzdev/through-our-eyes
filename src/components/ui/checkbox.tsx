import * as React from 'react'

import { cn } from '@/lib/utils'

export interface CheckboxProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'type'
> {
  label?: string
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, ...props }, ref) => (
    <label className="inline-flex items-center gap-2">
      <input
        type="checkbox"
        ref={ref}
        className={cn(
          'border-input bg-background text-primary focus-visible:ring-ring/70 h-5 w-5 rounded-lg border shadow-sm transition duration-150 focus-visible:ring-2 focus-visible:outline-none',
          className
        )}
        {...props}
      />
      {label ? (
        <span className="text-muted-foreground text-sm">{label}</span>
      ) : null}
    </label>
  )
)
Checkbox.displayName = 'Checkbox'

export { Checkbox }
