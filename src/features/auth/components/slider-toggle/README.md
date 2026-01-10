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

```