import { FcGoogle } from 'react-icons/fc'

interface GoogleButtonProps {
  onClick: () => void
}

export function GoogleLoginButton({ onClick }: GoogleButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="border-border bg-card text-foreground hover:bg-muted flex w-full items-center justify-center gap-3 rounded-lg border py-3 text-sm font-medium shadow-[0_2px_6px_-3px_rgb(0_0_0/0.25)] transition-colors"
    >
      <FcGoogle className="h-5 w-5" />
      Continuar con Google
    </button>
  )
}
