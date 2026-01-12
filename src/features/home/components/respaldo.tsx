// 'use client'

// import { useEffect, useMemo, useState } from 'react'

// import {
//   BookMarked,
//   BookOpenCheck,
//   Bookmark,
//   CalendarClock,
//   Check,
//   Loader2
// } from 'lucide-react'

// import { BsLayoutSidebar } from 'react-icons/bs'

// // <BsLayoutSidebar />

// import { Badge } from '@/components/ui/badge'
// import { Button } from '@/components/ui/button'
// import { Card } from '@/components/ui/card'

// import {
//   fetchDashboardData,
//   type DashboardData,
//   type SessionPlan
// } from '@/lib/dashboard'

// import { HomeSidebar } from '../sidebar/Sidebar'
// import { HomeHeader } from '../components/HomeHeader'
// import { HomeStateCard } from '../components/HomeStateCard'

// const sessionStatusStyles: Record<
//   SessionPlan['status'],
//   { label: string; badgeClass: string }
// > = {
//   active: {
//     label: 'En progreso',
//     badgeClass: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-200'
//   },
//   scheduled: {
//     label: 'Agendado',
//     badgeClass: 'bg-blue-500/10 text-blue-700 dark:text-blue-200'
//   },
//   completed: {
//     label: 'Completado',
//     badgeClass: 'bg-neutral-800 text-neutral-50'
//   }
// }

// export function HomeView() {
//   const [data, setData] = useState<DashboardData | null>(null)
//   const [isLoading, setIsLoading] = useState(true)

//   useEffect(() => {
//     let active = true
//     fetchDashboardData().then((payload) => {
//       if (!active) return
//       setData(payload)
//       setIsLoading(false)
//     })

//     return () => {
//       active = false
//     }
//   }, [])

//   const loadingMemories = useMemo(
//     () => Array.from({ length: 3 }).map((_, index) => index),
//     []
//   )

//   return (
//     <div className="text-foreground min-h-screen bg-linear-to-br from-slate-50 via-white to-emerald-50">
//       <div className="from-primary/15 pointer-events-none absolute inset-x-0 top-0 h-80 bg-linear-to-b via-transparent to-transparent blur-3xl" />
//       <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-10 lg:flex-row lg:items-start lg:px-8">
//         {/* <HomeSidebar /> */}

//         <main className="flex-1 space-y-10">
//           <header
//             id="resumen"
//             className="border-border/70 bg-card/90 flex flex-col gap-6 rounded-3xl border p-6 shadow-[0_20px_80px_-40px_rgb(15,23,42,0.35)] backdrop-blur"
//           >
//             <div className="flex items-center justify-between">
//               <div className="space-y-2">
//                 <p className="text-primary text-sm font-semibold">Dashboard</p>
//                 <h1 className="text-3xl leading-tight font-semibold">
//                   Hola, Sofía. Tus lecturas están sincronizadas.
//                 </h1>
//                 <p className="text-muted-foreground text-sm">
//                   Seguimos tus rituales, audiolibros y notas para mantener viva
//                   tu biblioteca.
//                 </p>
//               </div>
//               <Button size="lg" className="gap-2">
//                 Nuevo libro
//                 <Bookmark className="h-4 w-4" />
//               </Button>
//             </div>
//             <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
//               {(isLoading
//                 ? Array.from({ length: 4 })
//                 : (data?.stats ?? [])
//               ).map((stat, index) =>
//                 stat ? (
//                   <HomeStateCard key={stat.id} stat={stat} />
//                 ) : (
//                   <Card
//                     key={`loading-${index}`}
//                     className="border-border/70 bg-muted/40 h-full border-dashed p-4"
//                   >
//                     <div className="flex h-full flex-col justify-between gap-4">
//                       <div className="space-y-2">
//                         <div className="bg-muted-foreground/10 h-3 w-24 rounded-full" />
//                         <div className="bg-muted-foreground/10 h-8 w-16 rounded-lg" />
//                       </div>
//                       <div className="bg-muted-foreground/10 h-3 w-28 rounded-full" />
//                     </div>
//                   </Card>
//                 )
//               )}
//             </div>
//           </header>

//           <section id="memorias" className="space-y-4">
//             <HomeHeader
//               title="Recuerdos recientes"
//               description="Subrayados, notas y fragmentos listos para compartir."
//               icon={BookOpenCheck}
//             />
//             <div className="grid gap-4 md:grid-cols-2">
//               {(isLoading ? loadingMemories : (data?.memories ?? [])).map(
//                 (memory, index) =>
//                   memory && typeof memory === 'object' ? (
//                     <Card
//                       key={memory.id}
//                       className="border-border/70 bg-card/90 p-4 shadow-sm backdrop-blur"
//                     >
//                       <div
//                         className={`flex items-center gap-3 rounded-2xl bg-gradient-to-br ${memory.color} px-3 py-2`}
//                       >
//                         <Badge variant="success" className="gap-2">
//                           <Check className="h-4 w-4" />
//                           {memory.mood}
//                         </Badge>
//                         <span className="text-muted-foreground text-xs">
//                           {memory.createdAt}
//                         </span>
//                       </div>
//                       <div className="mt-4 space-y-2">
//                         <p className="text-primary/80 text-sm font-semibold">
//                           {memory.bookTitle}
//                         </p>
//                         <p className="text-lg leading-relaxed">
//                           {memory.snippet}
//                         </p>
//                       </div>
//                       <div className="mt-3 flex flex-wrap gap-2">
//                         {memory.tags.map((tag) => (
//                           <Badge key={tag} variant="outline">
//                             {tag}
//                           </Badge>
//                         ))}
//                       </div>
//                     </Card>
//                   ) : (
//                     <Card
//                       key={`memory-loading-${index}`}
//                       className="border-border/70 bg-muted/40 h-full border-dashed p-4"
//                     >
//                       <div className="flex h-full flex-col justify-between gap-4">
//                         <div className="bg-muted-foreground/10 h-6 w-28 rounded-lg" />
//                         <div className="space-y-2">
//                           <div className="bg-muted-foreground/10 h-4 w-full rounded-lg" />
//                           <div className="bg-muted-foreground/10 h-4 w-3/4 rounded-lg" />
//                         </div>
//                         <div className="flex gap-2">
//                           <div className="bg-muted-foreground/10 h-6 w-16 rounded-full" />
//                           <div className="bg-muted-foreground/10 h-6 w-16 rounded-full" />
//                         </div>
//                       </div>
//                     </Card>
//                   )
//               )}
//             </div>
//           </section>

//           <section id="sesiones" className="space-y-4">
//             <HomeHeader
//               title="Sesiones y rituales"
//               description="Prepara tus bloques de enfoque con alarmas suaves y notas rápidas."
//               icon={CalendarClock}
//             />
//             <div className="grid gap-4 lg:grid-cols-3">
//               {(isLoading
//                 ? Array.from({ length: 3 })
//                 : (data?.sessions ?? [])
//               ).map((session, index) =>
//                 session && typeof session === 'object' ? (
//                   <Card
//                     key={session.id}
//                     className="border-border/70 bg-card/90 p-4 shadow-sm backdrop-blur"
//                   >
//                     <div className="flex items-start justify-between">
//                       <div>
//                         <p className="text-muted-foreground text-sm">
//                           {session.focus}
//                         </p>
//                         <p className="text-lg font-semibold">{session.title}</p>
//                       </div>
//                       <span
//                         className={`rounded-full px-3 py-1 text-xs font-semibold ${sessionStatusStyles[session.status].badgeClass}`}
//                       >
//                         {sessionStatusStyles[session.status].label}
//                       </span>
//                     </div>
//                     <div className="text-muted-foreground mt-4 flex items-center justify-between text-sm">
//                       <span>{session.startTime}</span>
//                       <span>{session.durationMinutes} min</span>
//                     </div>
//                     <div className="bg-muted mt-3 h-2 w-full overflow-hidden rounded-full">
//                       <div
//                         className="bg-primary h-full rounded-full"
//                         style={{ width: `${session.progress}%` }}
//                       />
//                     </div>
//                     <div className="text-muted-foreground mt-3 flex items-center justify-between text-xs">
//                       <span>Progreso</span>
//                       <span>{session.progress}%</span>
//                     </div>
//                   </Card>
//                 ) : (
//                   <Card
//                     key={`session-loading-${index}`}
//                     className="border-border/70 bg-muted/40 h-full border-dashed p-4"
//                   >
//                     <div className="flex h-full flex-col gap-4">
//                       <div className="bg-muted-foreground/10 h-4 w-24 rounded-lg" />
//                       <div className="bg-muted-foreground/10 h-4 w-32 rounded-lg" />
//                       <div className="bg-muted-foreground/10 h-2 w-full rounded-full" />
//                     </div>
//                   </Card>
//                 )
//               )}
//             </div>
//           </section>

//           <section id="recomendaciones" className="space-y-4">
//             <HomeHeader
//               title="Recomendaciones personalizadas"
//               description="Basadas en tus últimos subrayados y estados de ánimo."
//               icon={Bookmark}
//             />
//             <div className="grid gap-4 md:grid-cols-2">
//               {(isLoading
//                 ? Array.from({ length: 2 })
//                 : (data?.recommendations ?? [])
//               ).map((rec, index) =>
//                 rec && typeof rec === 'object' ? (
//                   <Card
//                     key={rec.id}
//                     className="border-border/70 bg-card/90 flex flex-col gap-3 p-4 shadow-sm backdrop-blur"
//                   >
//                     <div className="flex items-center justify-between">
//                       <div>
//                         <p className="text-lg font-semibold">{rec.title}</p>
//                         <p className="text-muted-foreground text-sm">
//                           {rec.author} · {rec.genre}
//                         </p>
//                       </div>
//                       <Badge variant="success" className="text-xs uppercase">
//                         Afinidad {rec.confidence}%
//                       </Badge>
//                     </div>
//                     <p className="text-muted-foreground text-sm">
//                       {rec.reason}
//                     </p>
//                     <Button variant="outline" size="sm" className="self-start">
//                       Ver detalles
//                     </Button>
//                   </Card>
//                 ) : (
//                   <Card
//                     key={`rec-loading-${index}`}
//                     className="border-border/70 bg-muted/40 h-full border-dashed p-4"
//                   >
//                     <div className="space-y-3">
//                       <div className="bg-muted-foreground/10 h-5 w-40 rounded-lg" />
//                       <div className="bg-muted-foreground/10 h-3 w-32 rounded-lg" />
//                       <div className="bg-muted-foreground/10 h-4 w-full rounded-lg" />
//                     </div>
//                   </Card>
//                 )
//               )}
//             </div>
//           </section>

//           {isLoading ? (
//             <div className="border-border/60 bg-muted/30 text-muted-foreground flex items-center gap-2 rounded-2xl border border-dashed p-4 text-sm">
//               <Loader2 className="h-4 w-4 animate-spin" />
//               Sincronizando con tu biblioteca...
//             </div>
//           ) : (
//             <Card className="border-border/70 bg-card/90 flex items-center justify-between p-5 shadow-sm backdrop-blur">
//               <div>
//                 <p className="text-lg font-semibold">
//                   Sincronización completada
//                 </p>
//                 <p className="text-muted-foreground text-sm">
//                   Hemos guardado tus progresos y rituales. Revisa el panel si
//                   agregas nuevos libros desde el móvil.
//                 </p>
//               </div>
//               <Button className="gap-2">
//                 Reforzar ritual
//                 <BookMarked className="h-4 w-4" />
//               </Button>
//             </Card>
//           )}
//         </main>
//       </div>
//     </div>
//   )
// }

/* <div className="from-primary/10 via-primary/5 shadow-primary/10 space-y-3 rounded-2xl bg-gradient-to-br to-emerald-50 p-4 shadow-inner">
        <div className="flex items-center gap-3">
          <div className="bg-primary text-primary-foreground shadow-primary/30 flex h-11 w-11 items-center justify-center rounded-2xl shadow-lg">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm font-semibold">Recuerdos activos</p>
            <p className="text-muted-foreground text-xs">
              Captura ideas y vuelve a ellas en segundos.
            </p>
          </div>
        </div>
        <Button className="w-full">Crear recuerdo</Button>
      </div> */

/* <div className="space-y-2">
        <p className="text-muted-foreground text-xs font-semibold tracking-[0.18em] uppercase">
          Atajos
        </p>
        <div className="grid grid-cols-2 gap-2">
          {navShortcuts.map(({ label, key, icon: Icon }) => (
            <Card
              key={label}
              className="border-border/70 bg-card/60 flex items-center gap-2 border-dashed p-3"
            >
              <Icon className="text-primary h-4 w-4" />
              <div className="flex flex-1 items-center justify-between text-xs font-semibold">
                <span>{label}</span>
                <span className="bg-muted text-muted-foreground rounded-md px-2 py-1 text-[11px] tracking-wide uppercase">
                  {key}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div> */
