'use client'

import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'
import { cn } from '@/lib/utils'

export type GithubButtonProps = {
  href?: string
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function GithubButton({
  href = 'https://github.com/',
  size = 'md',
  className
}: GithubButtonProps) {
  const sizeMap = {
    sm: 'h-9 px-3 text-sm gap-2',
    md: 'h-10 px-4 text-sm gap-2',
    lg: 'h-12 px-5 text-base gap-3'
  }

  const iconMap = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6'
  }

  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="GitHub"
      className={cn(
        'group relative inline-flex items-center justify-center overflow-hidden',
        'rounded-xl bg-black text-white',
        'border border-white/10',
        'shadow-[inset_0_1px_1px_rgba(255,255,255,0.06),inset_0_-6px_16px_rgba(0,0,0,0.9)]',
        'transition-colors duration-200',
        'focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:outline-none',
        sizeMap[size],
        className
      )}
    >
      {/* arcoíris dinámico */}
      <span
        aria-hidden
        className={cn(
          'pointer-events-none absolute inset-[-60%]',
          'opacity-0 group-hover:opacity-100',
          'transition-opacity duration-300',
          'flex h-64 w-64 flex-1'
        )}
        style={{
          background:
            'conic-gradient(from 0deg at 50% 50%, #ff004c, #ff9f00, #ffee00, #00ff9d, #00c3ff, #7a5cff, #ff00d4, #ff004c)',
          animation: 'spin 3s linear infinite'
        }}
      />

      {/* máscara para que el arcoíris quede en el borde */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-xl"
        style={{
          WebkitMask:
            'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          padding: '1px'
        }}
      />

      {/* contenido */}
      <FaGithub className={cn('relative z-10 shrink-0', iconMap[size])} />
      <span className="relative z-10 leading-none font-medium tracking-tight">
        GitHub
      </span>

      <style jsx>{`
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </Link>
  )
}
