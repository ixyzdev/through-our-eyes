import * as React from 'react'

import { Separator } from '@/components/ui/separator'
import { GoogleLoginButton } from './GoogleLoginButton'
import { GithubLoginButton } from './GithubLoginButton'

interface OAuthSectionProps {
  onGoogleLogin: () => void
  onGithubLogin: () => void
}

export function OAuthSection({
  onGoogleLogin,
  onGithubLogin
}: OAuthSectionProps) {
  return (
    <div className="space-y-4">
      <div className="relative">
        <Separator />
        <span className="bg-background text-muted-foreground absolute inset-x-0 -top-2 mx-auto w-fit px-2 text-xs">
          o continúa con
        </span>
      </div>

      <div className="space-y-2">
        <GoogleLoginButton onClick={onGoogleLogin} />
        <GithubLoginButton onClick={onGithubLogin} />
      </div>
    </div>
  )
}
