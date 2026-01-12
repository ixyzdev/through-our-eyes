import { cn } from '@/lib/utils'
import { useSliderToggle } from './useSliderToggle'
import type { SliderToggleProps } from './slider-toggle.types'

export function SliderToggle<T extends string>({
  value,
  options,
  onChange,
  className
}: SliderToggleProps<T>) {
  const { containerRef, sliderRef, dragging, startDrag } = useSliderToggle(
    value,
    options.map((o) => o.value),
    onChange
  )

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
          'bg-card absolute inset-y-1 rounded-full shadow-sm',
          dragging
            ? 'transition-none'
            : 'transition-transform duration-200 ease-out'
        )}
        style={{ width: `${100 / options.length}%` }}
      />

      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          onMouseDown={(e) => startDrag(e.clientX)}
          className="relative z-10 flex-1 py-2 text-sm"
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}
