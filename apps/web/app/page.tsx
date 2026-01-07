import Link from "next/link";
import { Sidebar } from "./components/Sidebar";

const mockPosts = [
  {
    title: "Bienvenidos a ForoTec",
    author: "Admin",
    summary: "Este es el inicio del foro para compartir ideas y proyectos.",
    tags: ["Anuncios", "Comunidad"]
  },
  {
    title: "¿Qué proyectos están haciendo este semestre?",
    author: "María C.",
    summary: "Compartan avances de proyectos de ingeniería y tecnología.",
    tags: ["Proyectos", "Estudiantes"]
  }
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Encabezado principal */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-sm uppercase tracking-wide text-foro-gray">
              Instituto Tecnológico de Costa Rica
            </p>
            <h1 className="text-2xl font-bold text-foro-blue">ForoTec</h1>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="rounded-full border border-foro-blue px-4 py-2 text-sm font-semibold text-foro-blue hover:bg-foro-gray-light"
            >
              Ingresar
            </Link>
            <button className="rounded-full bg-foro-blue px-4 py-2 text-sm font-semibold text-white hover:bg-foro-blue-light">
              Crear publicación
            </button>
          </div>
        </div>
      </header>

      {/* Contenido principal */}
      <main className="mx-auto grid w-full max-w-6xl gap-6 px-6 py-8 lg:grid-cols-[1fr_280px]">
        <section className="space-y-6">
          {/* Barra de búsqueda y filtros */}
          <div className="card flex flex-wrap items-center gap-3 p-4">
            <input
              className="w-full flex-1 rounded-full border border-slate-200 px-4 py-2 text-sm focus:border-foro-blue focus:outline-none"
              placeholder="Buscar publicaciones, comunidades o usuarios"
            />
            <button className="rounded-full bg-foro-blue px-4 py-2 text-sm font-semibold text-white hover:bg-foro-blue-light">
              Filtrar
            </button>
          </div>

          {/* Listado de publicaciones */}
          <div className="space-y-4">
            {mockPosts.map((post) => (
              <article key={post.title} className="card p-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-slate-900">
                    {post.title}
                  </h2>
                  <span className="rounded-full bg-foro-gray-light px-3 py-1 text-xs font-medium text-foro-gray">
                    {post.author}
                  </span>
                </div>
                <p className="mt-3 text-sm text-slate-600">{post.summary}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Sidebar del MVP */}
        <Sidebar />
      </main>
    </div>
  );
}
