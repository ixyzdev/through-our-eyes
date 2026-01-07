import Image from "next/image";

const coverSvg = (title: string, color: string) =>
  `data:image/svg+xml;utf8,${encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 160 220'>
      <defs>
        <linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
          <stop offset='0%' stop-color='${color}' stop-opacity='0.9'/>
          <stop offset='100%' stop-color='${color}' stop-opacity='0.6'/>
        </linearGradient>
      </defs>
      <rect width='160' height='220' rx='14' fill='url(%23g)'/>
      <rect x='18' y='22' width='124' height='176' rx='10' fill='rgba(255,255,255,0.2)'/>
      <text x='24' y='70' font-size='14' font-family='Arial' fill='white' opacity='0.9'>${title}</text>
      <text x='24' y='92' font-size='10' font-family='Arial' fill='white' opacity='0.7'>Edición especial</text>
    </svg>`,
  )}`;

const bookLists = [
  {
    title: "Fantasía que no puedes soltar",
    description: "Mundos imposibles, magia vibrante y héroes inesperados.",
    count: 12,
    followers: 86,
    visibility: "Privada",
    updated: "Actualizada hoy",
    lastAdded: "El nombre del viento",
    covers: [
      coverSvg("Reinos", "#8b5cf6"),
      coverSvg("Dragones", "#6366f1"),
      coverSvg("Hechizos", "#9333ea"),
      coverSvg("Destinos", "#7c3aed"),
    ],
  },
  {
    title: "Lecturas para tardes tranquilas",
    description: "Historias cálidas y personajes que abrazan.",
    count: 8,
    followers: 41,
    visibility: "Solo yo",
    updated: "Actualizada hace 2 días",
    lastAdded: "La librería perdida",
    covers: [
      coverSvg("Té", "#f97316"),
      coverSvg("Hogar", "#fb7185"),
      coverSvg("Invierno", "#f59e0b"),
      coverSvg("Cartas", "#e879f9"),
    ],
  },
  {
    title: "Ensayos para pensar",
    description: "Ideas que cuestionan y conversaciones que inspiran.",
    count: 15,
    followers: 132,
    visibility: "Pública",
    updated: "Actualizada hace 1 semana",
    lastAdded: "El arte de pensar",
    covers: [
      coverSvg("Ideas", "#0ea5e9"),
      coverSvg("Debate", "#14b8a6"),
      coverSvg("Futuro", "#22c55e"),
      coverSvg("Ensayo", "#06b6d4"),
    ],
  },
  {
    title: "Clásicos imprescindibles",
    description: "Obras que siguen marcando generaciones de lectores.",
    count: 20,
    followers: 204,
    visibility: "Pública",
    updated: "Actualizada hace 3 semanas",
    lastAdded: "Orgullo y prejuicio",
    covers: [
      coverSvg("Tragedia", "#64748b"),
      coverSvg("Honor", "#475569"),
      coverSvg("Amor", "#94a3b8"),
      coverSvg("Destino", "#0f172a"),
    ],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 px-6 py-16 text-zinc-900 sm:px-10 lg:px-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12">
        <header className="flex flex-col gap-4">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
            Mis listas
          </span>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Tus colecciones personales de lectura
          </h1>
          <p className="max-w-2xl text-lg text-zinc-600">
            Gestiona tus listas privadas y públicas en un solo lugar. Mantén el
            control de tus lecturas favoritas y comparte solo lo que quieras.
          </p>
        </header>

        <section className="relative grid gap-5 overflow-hidden rounded-3xl border border-emerald-200/60 bg-gradient-to-br from-emerald-500 via-teal-500 to-indigo-500 p-5 shadow-xl sm:grid-cols-[1.2fr_1fr] sm:p-6">
          <div className="pointer-events-none absolute inset-0 opacity-60">
            <div className="absolute -left-24 -top-24 h-56 w-56 rounded-full bg-white/30 blur-3xl" />
            <div className="absolute -bottom-32 right-0 h-64 w-64 rounded-full bg-white/20 blur-3xl" />
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 text-sm font-semibold text-emerald-700">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-base shadow-md">
                🔍
              </span>
              <label className="text-white" htmlFor="list-search">
                Buscar listas
              </label>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <input
                className="min-w-[220px] flex-1 rounded-full border border-white/50 bg-white/95 px-4 py-2 text-sm text-zinc-700 shadow-sm outline-none transition focus:border-white focus:ring-2 focus:ring-white/70"
                id="list-search"
                placeholder="Escribe el nombre o descripción"
                type="search"
              />
              <button
                className="rounded-full border border-white/40 bg-white/15 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/25"
                type="button"
              >
                Limpiar
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-3 sm:items-end">
            <div className="flex items-center gap-2 text-sm font-semibold text-white">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-base shadow-md">
                🎯
              </span>
              <span>Filtros rápidos</span>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <button
                className="rounded-full border border-white/60 bg-white/90 px-3 py-1 text-xs font-semibold text-emerald-700 transition hover:bg-white"
                type="button"
              >
                Todas
              </button>
              <button
                className="rounded-full border border-white/50 bg-indigo-100/90 px-3 py-1 text-xs font-semibold text-indigo-700 transition hover:bg-indigo-100"
                type="button"
              >
                Públicas
              </button>
              <button
                className="rounded-full border border-white/40 bg-white/15 px-3 py-1 text-xs font-semibold text-white transition hover:bg-white/25"
                type="button"
              >
                Privadas
              </button>
              <button
                className="rounded-full border border-white/40 bg-white/15 px-3 py-1 text-xs font-semibold text-white transition hover:bg-white/25"
                type="button"
              >
                Solo yo
              </button>
              <button
                className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-emerald-700 shadow-lg shadow-emerald-900/20 transition hover:-translate-y-0.5 hover:shadow-xl"
                type="button"
              >
                Crear lista rápida
              </button>
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          {bookLists.map((list) => (
            <article
              key={list.title}
              className="flex h-full flex-col gap-6 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between gap-4">
                  <h2 className="text-2xl font-semibold text-zinc-900">
                    {list.title}
                  </h2>
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700">
                    {list.count} libros
                  </span>
                </div>
                <p className="text-base text-zinc-600">{list.description}</p>
                <div className="grid grid-cols-4 gap-3">
                  {list.covers.map((cover, index) => (
                    <div
                      key={`${list.title}-cover-${index}`}
                      className="overflow-hidden rounded-xl border border-white/60 shadow-sm"
                    >
                      <Image
                        src={cover}
                        alt={`Portada de ${list.title}`}
                        width={160}
                        height={220}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-4 text-sm text-zinc-600">
                <div className="flex flex-wrap gap-4">
                  <span className="rounded-full bg-zinc-100 px-3 py-1">
                    {list.visibility}
                  </span>
                  <span className="rounded-full bg-zinc-100 px-3 py-1">
                    {list.followers} seguidores
                  </span>
                  <span className="rounded-full bg-zinc-100 px-3 py-1">
                    Último añadido: {list.lastAdded}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm text-zinc-500">
                  <span>{list.updated}</span>
                  <div className="flex gap-3">
                    <button
                      className="rounded-full border border-emerald-200 px-4 py-2 text-sm font-semibold text-emerald-700 transition hover:border-emerald-300 hover:bg-emerald-50"
                      type="button"
                    >
                      Editar
                    </button>
                    <button
                      className="rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-500"
                      type="button"
                    >
                      Ver lista
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>

        <section className="grid gap-6 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm lg:grid-cols-[1.1fr_1fr]">
          <div className="flex flex-col gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600">
                Gestión completa
              </span>
              <h2 className="mt-2 text-2xl font-semibold text-zinc-900">
                Crea y administra tus listas
              </h2>
              <p className="mt-2 text-base text-zinc-600">
                Agrega nuevas listas, edita su contenido y elimina lo que ya no
                necesitas. Todo desde un mismo panel.
              </p>
            </div>

            <form className="flex flex-col gap-4 rounded-2xl border border-zinc-200 bg-zinc-50/70 p-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="flex flex-col gap-2 text-sm font-medium text-zinc-700">
                  Nombre de la lista
                  <input
                    className="rounded-xl border border-zinc-200 px-4 py-2 text-sm shadow-sm outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
                    placeholder="Ej: Favoritos de abril"
                    type="text"
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm font-medium text-zinc-700">
                  Visibilidad
                  <select className="rounded-xl border border-zinc-200 px-4 py-2 text-sm shadow-sm outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200">
                    <option>Pública</option>
                    <option>Privada</option>
                    <option>Solo yo</option>
                  </select>
                </label>
              </div>
              <label className="flex flex-col gap-2 text-sm font-medium text-zinc-700">
                Descripción
                <textarea
                  className="min-h-[96px] rounded-xl border border-zinc-200 px-4 py-2 text-sm shadow-sm outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
                  placeholder="Describe el objetivo de la lista"
                />
              </label>
              <div className="flex flex-wrap gap-3">
                <button
                  className="rounded-full bg-emerald-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-emerald-500"
                  type="button"
                >
                  Crear lista
                </button>
                <button
                  className="rounded-full border border-zinc-200 px-5 py-2 text-sm font-semibold text-zinc-700 transition hover:border-zinc-300 hover:bg-zinc-100"
                  type="button"
                >
                  Guardar cambios
                </button>
                <button
                  className="rounded-full border border-zinc-200 px-5 py-2 text-sm font-semibold text-zinc-600 transition hover:border-zinc-300 hover:bg-zinc-50"
                  type="button"
                >
                  Limpiar formulario
                </button>
              </div>
            </form>
          </div>

          <div className="flex h-full flex-col gap-4 rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-zinc-900">
                  Listas del usuario
                </h3>
                <p className="text-sm text-zinc-500">
                  Acciones rápidas para leer, editar o eliminar.
                </p>
              </div>
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                {bookLists.length} activas
              </span>
            </div>
            <div className="flex flex-col gap-3">
              {bookLists.map((list) => (
                <div
                  key={`${list.title}-crud`}
                  className="flex flex-col gap-3 rounded-2xl border border-zinc-100 bg-zinc-50/40 p-4 transition hover:border-emerald-200"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h4 className="text-base font-semibold text-zinc-900">
                        {list.title}
                      </h4>
                      <p className="text-sm text-zinc-500">{list.description}</p>
                    </div>
                    <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600">
                      {list.visibility}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-zinc-500">
                    <div className="flex flex-wrap gap-3">
                      <span>{list.count} libros</span>
                      <span>{list.followers} seguidores</span>
                      <span>Último añadido: {list.lastAdded}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <button
                        className="rounded-full border border-emerald-200 px-3 py-1 text-xs font-semibold text-emerald-700 transition hover:border-emerald-300 hover:bg-emerald-100"
                        type="button"
                      >
                        Ver detalle
                      </button>
                      <button
                        className="rounded-full border border-zinc-200 px-3 py-1 text-xs font-semibold text-zinc-700 transition hover:border-zinc-300 hover:bg-zinc-100"
                        type="button"
                      >
                        Editar
                      </button>
                      <button
                        className="rounded-full border border-rose-200 px-3 py-1 text-xs font-semibold text-rose-600 transition hover:border-rose-300 hover:bg-rose-50"
                        type="button"
                      >
                        Eliminar
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="flex flex-col items-start justify-between gap-4 rounded-2xl bg-emerald-600 px-6 py-8 text-white sm:flex-row sm:items-center">
          <div>
            <h3 className="text-2xl font-semibold">¿Quieres crear tu propia lista?</h3>
            <p className="mt-2 text-base text-emerald-100">
              Agrupa tus lecturas favoritas y decide quién puede verlas.
            </p>
          </div>
          <button
            className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-50"
            type="button"
          >
            Crear nueva lista
          </button>
        </section>
      </div>
    </div>
  );
}
