import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

function Slot({
  children,
  ...props
}: React.HTMLAttributes<HTMLElement> & { children: React.ReactElement }) {
  return React.cloneElement(children, {
    ...props,
    className: cn(props.className, children.props.className)
  })
}

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/80 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-[0_12px_30px_-12px_rgb(0,0,0,0.35)] hover:shadow-[0_18px_35px_-14px_rgb(0,0,0,0.35)] hover:from-primary/95 hover:to-primary/85',
        outline:
          'border border-input bg-card text-foreground hover:border-primary/60 hover:bg-primary/5',
        ghost: 'text-muted-foreground hover:text-foreground hover:bg-muted/50',
        secondary:
          'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
        link: 'text-primary underline-offset-4 hover:underline'
      },
      size: {
        default: 'h-11 px-5',
        sm: 'h-9 rounded-full px-4',
        lg: 'h-12 rounded-full px-6 text-base',
        icon: 'h-10 w-10 rounded-full'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
)

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
