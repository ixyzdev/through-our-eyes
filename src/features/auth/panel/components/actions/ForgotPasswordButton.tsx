import * as React from 'react'

interface ForgotPasswordButtonProps {
  onClick: () => void
}

export function ForgotPasswordButton({ onClick }: ForgotPasswordButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="text-muted-foreground hover:text-foreground text-sm transition-colors"
    >
      ¿Olvidaste tu contraseña?
    </button>
  )
}
