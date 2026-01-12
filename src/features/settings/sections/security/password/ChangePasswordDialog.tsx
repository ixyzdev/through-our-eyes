'use client'

import { useState } from 'react'
import { useChangePassword } from './useChangePassword'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { InlineNotification } from '@/components/inline-notification/InlineNotification'

type Props = {
  open: boolean
  onOpenChange: (v: boolean) => void
}

export function ChangePasswordDialog({ open, onOpenChange }: Props) {
  const { submit, loading, error, success } = useChangePassword()

  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const onSubmit = () => submit(oldPassword, newPassword, confirmPassword)

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Cambiar contraseña</DialogTitle>
          <DialogDescription>
            Usa una contraseña segura y única.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <Field
            label="Contraseña actual"
            value={oldPassword}
            onChange={setOldPassword}
          />

          <Field
            label="Nueva contraseña"
            value={newPassword}
            onChange={setNewPassword}
          />

          <Field
            label="Confirmar contraseña"
            value={confirmPassword}
            onChange={setConfirmPassword}
          />

          {error && (
            <InlineNotification
              title="Error"
              description={error}
              variant="danger"
            />
          )}

          {success && (
            <InlineNotification
              title="Contraseña actualizada"
              description="El cambio se realizó correctamente."
              variant="success"
            />
          )}
        </div>

        <DialogFooter>
          <Button onClick={onSubmit} disabled={loading}>
            {loading ? 'Guardando…' : 'Cambiar contraseña'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

function Field({
  label,
  value,
  onChange
}: {
  label: string
  value: string
  onChange: (v: string) => void
}) {
  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      <Input
        type="password"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}
