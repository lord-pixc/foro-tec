import Link from "next/link";
import { Sidebar } from "../components/Sidebar";

const communities = [
  {
    name: "Tecnología",
    slug: "tecnologia",
    description: "Tendencias en software, hardware y proyectos de investigación.",
    members: 1240,
    topics: 86
  },
  {
    name: "Innovación",
    slug: "innovacion",
    description: "Espacio para compartir ideas disruptivas y prototipos.",
    members: 780,
    topics: 42
  },
  {
    name: "Vida estudiantil",
    slug: "vida-estudiantil",
    description: "Eventos, voluntariados y bienestar en el campus.",
    members: 540,
    topics: 26
  }
];

export default function CommunitiesPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-sm uppercase tracking-wide text-foro-gray">
              Directorio de comunidades
            </p>
            <h1 className="text-2xl font-bold text-foro-blue">
              Comunidades del foro
            </h1>
          </div>
          <button className="rounded-full bg-foro-blue px-4 py-2 text-sm font-semibold text-white hover:bg-foro-blue-light">
            Crear comunidad
          </button>
        </div>
      </header>

      <main className="mx-auto grid w-full max-w-6xl gap-6 px-6 py-8 lg:grid-cols-[1fr_280px]">
        <section className="space-y-6">
          <div className="card flex flex-wrap items-center gap-3 p-4">
            <input
              className="w-full flex-1 rounded-full border border-slate-200 px-4 py-2 text-sm focus:border-foro-blue focus:outline-none"
              placeholder="Buscar comunidades o temas"
            />
            <select className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600">
              <option>Ordenar</option>
              <option>Más activas</option>
              <option>Más miembros</option>
              <option>Recientes</option>
            </select>
            <button className="rounded-full bg-foro-blue px-4 py-2 text-sm font-semibold text-white hover:bg-foro-blue-light">
              Aplicar
            </button>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {communities.map((community) => (
              <article key={community.slug} className="card flex flex-col gap-4 p-6">
                <div>
                  <h2 className="text-lg font-semibold text-slate-900">
                    {community.name}
                  </h2>
                  <p className="mt-2 text-sm text-slate-600">
                    {community.description}
                  </p>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-slate-600">
                  <span>{community.members} miembros</span>
                  <span>{community.topics} temas activos</span>
                </div>
                <div className="flex items-center gap-3">
                  <Link
                    className="rounded-full border border-foro-blue px-4 py-2 text-xs font-semibold text-foro-blue hover:bg-foro-gray-light"
                    href={`/comunidades/${community.slug}`}
                  >
                    Ver comunidad
                  </Link>
                  <button className="rounded-full bg-foro-blue px-4 py-2 text-xs font-semibold text-white hover:bg-foro-blue-light">
                    Seguir
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <Sidebar />
      </main>
    </div>
  );
}
