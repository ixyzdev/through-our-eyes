import { FaGithub } from 'react-icons/fa'

interface GithubLoginButtonProps {
  onClick?: () => void
}

export function GithubLoginButton({ onClick }: GithubLoginButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="border-border bg-card text-foreground hover:bg-muted flex w-full items-center justify-center gap-3 rounded-lg border py-3 text-sm font-medium shadow-[0_2px_6px_-3px_rgb(0_0_0/0.25)] transition-colors"
    >
      <FaGithub className="h-5 w-5" />
      Continuar con GitHub
    </button>
  )
}
