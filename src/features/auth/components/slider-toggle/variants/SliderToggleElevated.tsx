import { cn } from '@/lib/utils'
import { useSliderToggle } from '../useSliderToggle'
import type { SliderToggleProps } from '../slider-toggle.types'

export function SliderToggleElevated<T extends string>({
  value,
  options,
  onChange,
  className
}: SliderToggleProps<T>) {
  const values = options.map((o) => o.value)

  const { containerRef, sliderRef, dragging, startDrag } = useSliderToggle(
    value,
    values,
    onChange
  )

  return (
    <div
      ref={containerRef}
      className={cn(
        'relative grid w-full auto-cols-fr grid-flow-col items-center rounded-lg select-none',
        'bg-muted',
        'shadow-[inset_0_2px_4px_rgb(0_0_0/0.25),inset_0_-1px_0_rgb(255_255_255/0.35)]',
        className
      )}
    >
      {/* Slider elevado (sin desplazamiento vertical) */}
      <div
        ref={sliderRef}
        className={cn(
          'pointer-events-none absolute inset-0 rounded-lg will-change-transform',
          'bg-background',
          'border-border/50 border',
          // SIN sombra por defecto
          dragging &&
            'shadow-[0_0_0_1px_rgb(0_0_0/0.08),0_8px_20px_-8px_rgb(0_0_0/0.45)]'
        )}
        style={{
          width: `calc(100% / ${options.length})`
        }}
      />

      {options.map((option) => {
        const active = option.value === value

        return (
          <button
            key={option.value}
            type="button"
            onMouseDown={(e) => startDrag(e.clientX)}
            onTouchStart={(e) => startDrag(e.touches[0]?.clientX ?? 0)}
            onClick={() => onChange(option.value)}
            className={cn(
              'relative z-10 flex-1 rounded-lg py-2 font-medium',
              'transition-colors duration-150',
              active
                ? 'text-foreground'
                : 'text-muted-foreground hover:text-foreground'
            )}
          >
            {option.label}
          </button>
        )
      })}
    </div>
  )
}
