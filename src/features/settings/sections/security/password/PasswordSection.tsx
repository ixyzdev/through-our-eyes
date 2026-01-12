'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ChangePasswordDialog } from './ChangePasswordDialog'

export function PasswordSection() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <section className="flex items-center justify-between gap-6">
        <div className="flex w-full flex-col gap-2">
          <p className="text-sm font-semibold">Contraseña</p>

          <div className="flex items-center justify-between gap-3">
            <Input
              type="password"
              value="********"
              disabled
              className="bg-muted/40 max-w-xs tracking-widest"
            />
            <Button size="sm" onClick={() => setOpen(true)}>
              Cambiar contraseña
            </Button>
          </div>

          <p className="text-muted-foreground text-xs">
            Asegúrate de no compartir tu contraseña, debe ser privada.
          </p>
        </div>
      </section>

      <ChangePasswordDialog open={open} onOpenChange={setOpen} />
    </>
  )
}
