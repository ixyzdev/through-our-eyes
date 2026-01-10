import { useEffect, useRef, useState } from 'react'

export function useSliderToggle<T extends string>(
  value: T,
  options: T[],
  onChange: (value: T) => void
) {
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
      step: sliderWidth
    }
  }

  function setSliderX(x: number) {
    currentXRef.current = x
    sliderRef.current!.style.transform = `translateX(${x}px)`
  }

  function indexFromX(x: number) {
    const { step } = getPositions()
    return Math.round(x / step)
  }

  function startDrag(clientX: number) {
    if (!containerRef.current || !sliderRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const sliderWidth = sliderRef.current.offsetWidth

    draggingRef.current = true
    setDragging(true)

    const clickX = clientX - rect.left - sliderWidth / 2
    const { min, max } = getPositions()
    setSliderX(Math.max(min, Math.min(clickX, max)))

    startXRef.current = clientX
  }

  function onMove(clientX: number) {
    if (!draggingRef.current) return

    const delta = clientX - startXRef.current
    const { min, max } = getPositions()

    setSliderX(Math.max(min, Math.min(currentXRef.current + delta, max)))

    startXRef.current = clientX
  }

  function endDrag() {
    if (!draggingRef.current) return

    draggingRef.current = false
    setDragging(false)

    const index = indexFromX(currentXRef.current)
    const clampedIndex = Math.max(0, Math.min(index, options.length - 1))

    onChange(options[clampedIndex])
  }

  useEffect(() => {
    function handleMove(e: MouseEvent) {
      onMove(e.clientX)
    }

    function handleUp() {
      endDrag()
    }

    if (dragging) {
      window.addEventListener('mousemove', handleMove)
      window.addEventListener('mouseup', handleUp)
    }

    return () => {
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('mouseup', handleUp)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dragging])

  useEffect(() => {
    if (dragging || !sliderRef.current) return

    const index = options.indexOf(value)
    if (index === -1) return

    const sliderWidth = sliderRef.current.offsetWidth
    setSliderX(index * sliderWidth)
  }, [value, dragging, options])

  return {
    containerRef,
    sliderRef,
    dragging,
    startDrag
  }
}
