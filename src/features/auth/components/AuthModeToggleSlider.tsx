import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

export type AuthMode = 'login' | 'signup'

interface AuthModeToggleSliderProps {
  value: AuthMode
  onChange: (mode: AuthMode) => void
  className?: string
}

export function AuthModeToggleSlider({
  value,
  onChange,
  className
}: AuthModeToggleSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const sliderRef = useRef<HTMLDivElement>(null)

  const draggingRef = useRef(false)
  const startXRef = useRef(0)
  const currentXRef = useRef(0)

  const [dragging, setDragging] = useState(false)

  function getPositions() {
    const container = containerRef.current!
    const slider = sliderRef.current!

    const containerWidth = container.offsetWidth
    const sliderWidth = slider.offsetWidth

    return {
      min: 0,
      max: containerWidth - sliderWidth,
      centerLogin: 0,
      centerSignup: containerWidth - sliderWidth
    }
  }

  function setSliderX(x: number) {
    currentXRef.current = x
    sliderRef.current!.style.transform = `translateX(${x}px)`
  }

  function startDrag(e: React.MouseEvent) {
    if (!containerRef.current || !sliderRef.current) return
    e.preventDefault()

    const rect = containerRef.current.getBoundingClientRect()
    const sliderWidth = sliderRef.current.offsetWidth

    draggingRef.current = true
    setDragging(true)

    // centrar inmediatamente bajo el click
    const clickX = e.clientX - rect.left - sliderWidth / 2
    const { min, max } = getPositions()
    setSliderX(Math.max(min, Math.min(clickX, max)))

    startXRef.current = e.clientX
  }

  function onMove(e: MouseEvent) {
    if (!draggingRef.current) return

    const delta = e.clientX - startXRef.current
    const { min, max } = getPositions()

    setSliderX(Math.max(min, Math.min(currentXRef.current + delta, max)))

    startXRef.current = e.clientX
  }

  function endDrag() {
    if (!draggingRef.current) return

    draggingRef.current = false
    setDragging(false)

    const { max } = getPositions()
    const finalMode = currentXRef.current < max / 2 ? 'login' : 'signup'

    onChange(finalMode)
  }

  useEffect(() => {
    function onUp() {
      endDrag()
    }

    if (dragging) {
      window.addEventListener('mousemove', onMove)
      window.addEventListener('mouseup', onUp)
    }

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseup', onUp)
    }
  }, [dragging])

  // sincronizar posición cuando value cambia (sin drag)
  useEffect(() => {
    if (dragging || !sliderRef.current || !containerRef.current) return

    const { centerLogin, centerSignup } = getPositions()
    setSliderX(value === 'login' ? centerLogin : centerSignup)
  }, [value, dragging])

  return (
    <div
      ref={containerRef}
      className={cn(
        'bg-muted/60 relative flex w-full rounded-full p-1 select-none',
        className
      )}
    >
      <div
        ref={sliderRef}
        className={cn(
          'bg-card absolute inset-y-1 w-1/2 rounded-full shadow-sm',
          dragging
            ? 'transition-none'
            : 'transition-transform duration-200 ease-out'
        )}
      />

      <button
        type="button"
        onMouseDown={startDrag}
        className="relative z-10 flex-1 py-2 text-sm"
      >
        Iniciar sesión
      </button>

      <button
        type="button"
        onMouseDown={startDrag}
        className="relative z-10 flex-1 py-2 text-sm"
      >
        Registrarme
      </button>
    </div>
  )
}
