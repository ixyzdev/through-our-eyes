export interface SliderToggleOption<T extends string> {
  value: T
  label: React.ReactNode
}

export interface SliderToggleProps<T extends string> {
  value: T
  options: SliderToggleOption<T>[]
  onChange: (value: T) => void
  className?: string
}
