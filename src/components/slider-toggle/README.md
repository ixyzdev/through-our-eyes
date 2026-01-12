```typescript
import { SliderToggle } from '@/components/ui/slider-toggle'

<SliderToggle<'login' | 'signup'>
  value={authMode}
  onChange={setAuthMode}
  options={[
    { value: 'login', label: 'Iniciar sesión' },
    { value: 'signup', label: 'Registrarme' }
  ]}
/>

```````md
# SliderToggle

Componente para seleccionar **una opción activa** entre varias mediante **click o drag**.  
Controlado, responsivo y reutilizable.

---

## Uso

```tsx
<SliderToggle
  value={mode}
  onChange={setMode}
  options={[
    { value: 'login', label: 'Iniciar sesión' },
    { value: 'signup', label: 'Crear cuenta' }
  ]}
/>
````

---

## Props

### `value: string`

Valor activo actual. Debe existir en `options`.

### `onChange: (value: string) => void`

Se ejecuta al hacer click o arrastrar.

### `options: SliderToggleOption[]`

```ts
{
  value: string
  label: ReactNode
  sliderClassName?: string
  buttonClassName?: string
}
```

### `className?: string`

Clases para el contenedor.

### `disabled?: boolean`

Desactiva interacción.
