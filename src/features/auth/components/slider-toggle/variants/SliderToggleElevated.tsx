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
        'relative flex w-full items-center p-1 select-none',
        [
          'rounded-xl',
          // canal premium
          'from-muted/90 to-muted/60 bg-linear-to-b',
          'shadow-[inset_0_1px_2px_rgb(0_0_0/0.10),inset_0_-1px_0_rgb(255_255_255/0.45)]'
        ],
        className
      )}
    >
      {/* Slider elevado (sin desplazamiento vertical) */}
      <div
        ref={sliderRef}
        className={cn(
          'absolute inset-y-1 left-1 rounded-lg',
          [
            'border-border border',
            'pointer-events-none will-change-transform',
            // superficie elevada
            'from-card to-card/95 bg-linear-to-b',
            // tinte activo muy sutil
            'after:absolute after:inset-0 after:rounded-lg after:opacity-100',
            'after:from-primary/5 after:bg-linear-to-b after:to-transparent'
          ],
          dragging
            ? 'shadow-[0_8px_20px_-8px_rgb(0_0_0/0.45)] transition-none'
            : 'shadow-[0_4px_12px_-6px_rgb(0_0_0/0.35)] transition-shadow duration-150'
        )}
        style={{
          width: `calc(${100 / options.length}% - 0.5rem)`
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
              'relative z-10 flex-1 rounded-lg py-2 text-sm font-medium',
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
