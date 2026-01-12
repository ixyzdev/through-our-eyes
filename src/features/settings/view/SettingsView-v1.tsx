import {
  Bell,
  Brush,
  Cloud,
  Globe2,
  KeyRound,
  ShieldCheck,
  SlidersHorizontal,
  UserCircle2
} from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const settingsNav = [
  {
    id: 'perfil',
    label: 'Perfil y cuenta',
    description: 'Identidad, membresía y acceso social.'
  },
  //   {
  //     id: 'apariencia',
  //     label: 'Apariencia',
  //     description: 'Tema, tipografías y accesibilidad.'
  //   },
  //   {
  //     id: 'notificaciones',
  //     label: 'Notificaciones',
  //     description: 'Alertas, rituales y recordatorios.'
  //   },
  //   {
  //     id: 'privacidad',
  //     label: 'Privacidad',
  //     description: 'Compartir datos y visibilidad.'
  //   },
  //   {
  //     id: 'integraciones',
  //     label: 'Integraciones',
  //     description: 'Servicios externos y sincronización.'
  //   },
  {
    id: 'seguridad',
    label: 'Seguridad',
    description: 'Sesiones activas y autenticación.'
  }
]

function SectionHeading({
  title,
  description,
  icon: Icon
}: {
  title: string
  description: string
  icon: typeof UserCircle2
}) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="bg-primary/10 text-primary flex h-11 w-11 items-center justify-center rounded-2xl">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <h2 className="text-xl font-semibold">{title}</h2>
          <p className="text-muted-foreground text-sm">{description}</p>
        </div>
      </div>
      <Button variant="outline" size="sm">
        Guardar cambios
      </Button>
    </div>
  )
}

export function SettingsView() {
  return (
    <div className="text-foreground min-h-screen bg-linear-to-br from-slate-50 via-white to-emerald-50">
      <div className="flex flex-col gap-8 px-6 py-3.5 lg:px-8">
        {/* <header className="border-border/70 bg-card/90 flex flex-col gap-4 rounded-3xl border p-6 shadow-[0_20px_80px_-40px_rgb(15,23,42,0.35)] backdrop-blur">
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <h1 className="text-2xl font-semibold">Configuraciónes</h1>
            </div>
          </div>
        </header> */}

        <div className="flex gap-8">
          {/* Navegacion */}
          {/* <aside className="flex flex-col space-y-4">
            <Card className="p-5">
              <CardHeader className="p-0 pb-4">
                <CardTitle className="text-lg">Configuracion</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 p-0">
                {settingsNav.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="hover:bg-muted/70 flex flex-col gap-1 rounded-2xl px-3 py-2 transition"
                  >
                    <span className="text-sm font-semibold">{item.label}</span>
                    <span className="text-muted-foreground text-xs">
                      {item.description}
                    </span>
                  </a>
                ))}
              </CardContent>
            </Card> */}

          {/* <Card className="p-5">
              <CardHeader className="p-0 pb-4">
                <CardTitle className="text-lg">Estado del sistema</CardTitle>
                <CardDescription>
                  Salud de sincronización y almacenamiento.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 p-0">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">
                    Backup inteligente
                  </span>
                  <Badge variant="success">Activo</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Uso de espacio</span>
                  <span className="text-muted-foreground text-xs">62%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Integraciones</span>
                  <span className="text-muted-foreground text-xs">4/6</span>
                </div>
              </CardContent>
              <CardFooter className="p-0 pt-4">
                <Button variant="outline" className="w-full">
                  Ver reporte completo
                </Button>
              </CardFooter>
            </Card> */}
          {/* </aside> */}

          {/* Contenedor derecho */}
          <div className="flex flex-1 flex-col space-y-8">
            <section id="perfil" className="space-y-4">
              <SectionHeading
                title="Perfil y cuenta"
                description="Mantén tu identidad sincronizada en todos tus dispositivos."
                icon={UserCircle2}
              />
              <Card>
                <CardContent className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="settings-name">Nombre completo</Label>
                    <Input
                      id="settings-name"
                      defaultValue="Sofía Navarro"
                      className="bg-background"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="settings-email">Correo principal</Label>
                    <Input
                      id="settings-email"
                      defaultValue="sofia@lectoras.club"
                      className="bg-background"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="settings-username">Alias público</Label>
                    <Input
                      id="settings-username"
                      defaultValue="@sofiabooks"
                      className="bg-background"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="settings-language">Idioma base</Label>
                    <Input
                      id="settings-language"
                      defaultValue="Español (LatAm)"
                      className="bg-background"
                    />
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* <section id="apariencia" className="space-y-4">
              <SectionHeading
                title="Apariencia y accesibilidad"
                description="Ajusta el tema visual, tipografías y contraste."
                icon={Brush}
              />
              <Card>
                <CardContent className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="settings-theme">Tema activo</Label>
                    <Input
                      id="settings-theme"
                      defaultValue="Claro · Neblina"
                      className="bg-background"
                    />
                    <p className="text-muted-foreground text-xs">
                      Cambia entre modos claro, oscuro o automático.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="settings-font">Tipografía principal</Label>
                    <Input
                      id="settings-font"
                      defaultValue="Geist Sans"
                      className="bg-background"
                    />
                    <p className="text-muted-foreground text-xs">
                      Selecciona el estilo ideal para lecturas largas.
                    </p>
                  </div>
                  <Checkbox
                    label="Activar modo lectura nocturna"
                    defaultChecked
                  />
                  <Checkbox label="Aumentar contraste de enlaces" />
                </CardContent>
              </Card>
            </section> */}

            {/* <section id="notificaciones" className="space-y-4">
              <SectionHeading
                title="Notificaciones inteligentes"
                description="Define cómo y cuándo recibes alertas del club."
                icon={Bell}
              />
              <Card>
                <CardContent className="space-y-3">
                  <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <div>
                      <p className="text-sm font-semibold">
                        Recordatorios de sesiones
                      </p>
                      <p className="text-muted-foreground text-xs">
                        Avisos 15 minutos antes de cada ritual.
                      </p>
                    </div>
                    <Checkbox defaultChecked />
                  </div>
                  <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <div>
                      <p className="text-sm font-semibold">Resumen semanal</p>
                      <p className="text-muted-foreground text-xs">
                        Métricas y progreso cada domingo.
                      </p>
                    </div>
                    <Checkbox defaultChecked />
                  </div>
                  <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <div>
                      <p className="text-sm font-semibold">
                        Alertas de nuevos libros
                      </p>
                      <p className="text-muted-foreground text-xs">
                        Avisos cuando tu lista de deseos cambia.
                      </p>
                    </div>
                    <Checkbox />
                  </div>
                </CardContent>
              </Card>
            </section> */}

            {/* <section id="privacidad" className="space-y-4">
              <SectionHeading
                title="Privacidad y visibilidad"
                description="Controla qué se comparte con tu comunidad."
                icon={ShieldCheck}
              />
              <Card>
                <CardContent className="grid gap-4 md:grid-cols-2"></CardContent>
              </Card>
            </section> */}

            {/* <section id="integraciones" className="space-y-4">
              <SectionHeading
                title="Integraciones y sincronización"
                description="Conecta servicios externos y gestiona flujos de datos."
                icon={Cloud}
              />
              <Card>
                <CardContent className="space-y-4">
                  <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                      <p className="text-sm font-semibold">
                        Sincronización con Kindle
                      </p>
                      <p className="text-muted-foreground text-xs">
                        Última actualización hoy a las 08:40.
                      </p>
                    </div>
                    <Button variant="outline">Gestionar</Button>
                  </div>
                  <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                      <p className="text-sm font-semibold">
                        Acceso a Spotify Audiobooks
                      </p>
                      <p className="text-muted-foreground text-xs">
                        Importa audiolibros y estados de reproducción.
                      </p>
                    </div>
                    <Button variant="outline">Conectar</Button>
                  </div>
                  <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                      <p className="text-sm font-semibold">
                        Exportación automática
                      </p>
                      <p className="text-muted-foreground text-xs">
                        Envía tus notas a Notion cada viernes.
                      </p>
                    </div>
                    <Button variant="outline">Editar flujo</Button>
                  </div>
                </CardContent>
              </Card>
            </section> */}

            <section id="seguridad" className="space-y-4">
              <SectionHeading
                title="Seguridad y accesos"
                description="Protege tu cuenta y gestiona sesiones activas."
                icon={KeyRound}
              />
              <Card>
                <CardContent className="space-y-4">
                  <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                      <p className="text-sm font-semibold">Sesiones activas</p>
                      <p className="text-muted-foreground text-xs">
                        MacBook Pro · Bogotá · Hace 5 min.
                      </p>
                    </div>
                    <Button variant="outline">Cerrar sesión</Button>
                  </div>
                  <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                      <p className="text-sm font-semibold">
                        Autenticación en dos pasos
                      </p>
                      <p className="text-muted-foreground text-xs">
                        Protege tu perfil con un segundo factor.
                      </p>
                    </div>
                    <Checkbox defaultChecked />
                  </div>
                  <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                      <p className="text-sm font-semibold">
                        Control de dispositivos
                      </p>
                      <p className="text-muted-foreground text-xs">
                        Limita el acceso a dispositivos verificados.
                      </p>
                    </div>
                    <Button variant="outline">Administrar</Button>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* <section className="space-y-4">
              <Card>
                <CardContent className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div className="space-y-1">
                    <p className="text-lg font-semibold">
                      Preferencias regionales
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Ajusta zona horaria, moneda y formatos de fecha.
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe2 className="text-primary h-5 w-5" />
                    <span className="text-sm font-medium">GMT-5 · COP</span>
                  </div>
                </CardContent>
                <CardFooter className="justify-end">
                  <Button variant="outline">Editar región</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardContent className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div className="space-y-1">
                    <p className="text-lg font-semibold">Centro de control</p>
                    <p className="text-muted-foreground text-sm">
                      Personaliza los widgets que ves en tu dashboard.
                    </p>
                  </div>
                  <Button className="gap-2">
                    <SlidersHorizontal className="h-4 w-4" />
                    Configurar panel
                  </Button>
                </CardContent>
              </Card>
            </section> */}
          </div>
        </div>
      </div>
    </div>
  )
}
