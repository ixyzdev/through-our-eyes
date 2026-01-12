export function mapPasswordError(error: any): string {
  if (!error?.message) return 'Error desconocido'

  if (error.message.includes('password')) {
    return 'La contraseña actual es incorrecta'
  }

  if (error.code === 401) {
    return 'Sesión inválida, vuelve a iniciar sesión'
  }

  return 'No se pudo cambiar la contraseña'
}
