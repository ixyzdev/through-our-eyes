import * as React from 'react'

import { Button } from '@/components/ui/button'

interface SubmitButtonProps {
  label: string
  disabled?: boolean
  isLoading?: boolean
}

export function SubmitButton({
  label,
  disabled = false,
  isLoading = false
}: SubmitButtonProps) {
  return (
    <Button type="submit" className="w-full" disabled={disabled || isLoading}>
      {isLoading ? 'Procesando…' : label}
    </Button>
  )
}
