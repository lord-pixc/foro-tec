import Link from "next/link";
import { Sidebar } from "./components/Sidebar";

const mockPosts = [
  {
    id: "post-1",
    title: "Bienvenidos a ForoTec",
    author: "Admin",
    summary: "Este es el inicio del foro para compartir ideas y proyectos.",
    tags: ["Anuncios", "Comunidad"],
    community: "Tecnología",
    updatedAt: "Hace 2 horas"
  },
  {
    id: "post-2",
    title: "¿Qué proyectos están haciendo este semestre?",
    author: "María C.",
    summary: "Compartan avances de proyectos de ingeniería y tecnología.",
    tags: ["Proyectos", "Estudiantes"],
    community: "Innovación",
    updatedAt: "Ayer"
  },
  {
    id: "post-3",
    title: "Guía rápida para ferias estudiantiles",
    author: "Jorge P.",
    summary: "Recomendaciones para presentar tu proyecto y recibir feedback.",
    tags: ["Eventos", "Vida estudiantil"],
    community: "Vida estudiantil",
    updatedAt: "Hace 3 días"
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
            <Link
              className="rounded-full bg-foro-blue px-4 py-2 text-sm font-semibold text-white hover:bg-foro-blue-light"
              href="/publicaciones/nueva"
            >
              Crear publicación
            </Link>
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
            <div className="flex flex-wrap gap-3">
              <select className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600">
                <option>Comunidad</option>
                <option>Tecnología</option>
                <option>Innovación</option>
                <option>Vida estudiantil</option>
              </select>
              <select className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600">
                <option>Ordenar por</option>
                <option>Más recientes</option>
                <option>Más comentadas</option>
                <option>Más populares</option>
              </select>
              <button className="rounded-full bg-foro-blue px-4 py-2 text-sm font-semibold text-white hover:bg-foro-blue-light">
                Filtrar
              </button>
            </div>
          </div>

          {/* Listado de publicaciones */}
          <div className="space-y-4">
            {mockPosts.map((post) => (
              <article key={post.id} className="card p-6">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="space-y-2">
                    <span className="rounded-full bg-foro-gray-light px-3 py-1 text-xs font-semibold text-foro-gray">
                      {post.community}
                    </span>
                    <h2 className="text-lg font-semibold text-slate-900">
                      {post.title}
                    </h2>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <span>Actualizado {post.updatedAt}</span>
                    <span className="rounded-full bg-foro-gray-light px-3 py-1 font-medium text-foro-gray">
                      {post.author}
                    </span>
                  </div>
                </div>
                <p className="mt-3 text-sm text-slate-600">{post.summary}</p>
                <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 hover:border-slate-300">
                      Guardar
                    </button>
                    <button className="rounded-full border border-red-200 px-3 py-1 text-xs font-semibold text-red-500 hover:border-red-300">
                      Eliminar
                    </button>
                  </div>
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
