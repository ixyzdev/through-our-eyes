import { AuthPanel } from '@/features/auth/panel/AuthPanel'
import { HeroPanel } from '@/features/auth/hero/AuthHeroPanel'

import { ExoticContainer } from '../components/ExoticContainer'

export function AuthView() {
  return (
    <section className="flex flex-1 gap-5 px-5 py-8">
      <div className="flex flex-2/3">
        <HeroPanel />
      </div>
      <div className="flex flex-1/3">
        <AuthPanel />
      </div>
    </section>
  )
}

/* <ExoticContainer className="overflow-hidden rounded-2xl px-3 py-5 shadow-xl">
            <figure className="flex flex-col justify-between gap-4">
              <blockquote className="text-foreground/90 text-base leading-relaxed italic">
                “No hace falta quemar libros si el mundo empieza a llenarse de
                gente que no lee, que no aprende, que no sabe.”
              </blockquote>

              <figcaption className="text-muted-foreground text-sm tracking-wide">
                — <span className="italic">Fahrenheit&nbsp;451</span>, Ray
                Bradbury
              </figcaption>
            </figure>
          </ExoticContainer> */
