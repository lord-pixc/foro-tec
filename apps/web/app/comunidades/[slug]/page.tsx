import Link from "next/link";
import { Sidebar } from "../../components/Sidebar";

type Community = {
  name: string;
  slug: string;
  description: string;
  members: number;
  rules: string[];
};

const communityData: Record<string, Community> = {
  tecnologia: {
    name: "Tecnología",
    slug: "tecnologia",
    description:
      "Comparte noticias, tutoriales y proyectos relacionados con el mundo tech.",
    members: 1240,
    rules: [
      "Comparte fuentes confiables.",
      "Sé claro con las dudas técnicas.",
      "Apoya con feedback constructivo."
    ]
  },
  innovacion: {
    name: "Innovación",
    slug: "innovacion",
    description:
      "Laboratorio creativo para prototipos, emprendimientos y propuestas futuristas.",
    members: 780,
    rules: [
      "Destaca el problema que resuelves.",
      "Etiqueta tu industria.",
      "Comparte avances semanales."
    ]
  },
  "vida-estudiantil": {
    name: "Vida estudiantil",
    slug: "vida-estudiantil",
    description:
      "Eventos, bienestar y espacios colaborativos dentro del campus.",
    members: 540,
    rules: [
      "Evita spam.",
      "Incluye fechas y ubicaciones.",
      "Respeta la diversidad del campus."
    ]
  }
};

const communityPosts = [
  {
    title: "Convocatoria para mentorías de programación",
    summary: "Buscamos mentores voluntarios para ayudar en cursos básicos.",
    author: "Equipo Tec",
    tags: ["Mentorías", "Cursos"],
    updatedAt: "Hace 1 día"
  },
  {
    title: "Repositorio base para proyectos IoT",
    summary: "Plantilla con sensores y dashboards lista para clonar.",
    author: "Andrea R.",
    tags: ["IoT", "GitHub"],
    updatedAt: "Hace 4 días"
  }
];

export default function CommunityDetailPage({
  params
}: {
  params: { slug: string };
}) {
  const community = communityData[params.slug] ?? communityData.tecnologia;

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-sm uppercase tracking-wide text-foro-gray">
              Comunidad
            </p>
            <h1 className="text-2xl font-bold text-foro-blue">
              {community.name}
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-foro-gray-light px-4 py-2 text-xs font-semibold text-foro-gray">
              {community.members} miembros
            </span>
            <Link
              className="rounded-full bg-foro-blue px-4 py-2 text-xs font-semibold text-white hover:bg-foro-blue-light"
              href="/publicaciones/nueva"
            >
              Crear post
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto grid w-full max-w-6xl gap-6 px-6 py-8 lg:grid-cols-[1fr_280px]">
        <section className="space-y-6">
          <div className="card p-6">
            <h2 className="text-sm font-semibold uppercase text-foro-gray">
              Sobre la comunidad
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              {community.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <button className="rounded-full bg-foro-blue px-4 py-2 text-xs font-semibold text-white hover:bg-foro-blue-light">
                Seguir
              </button>
              <button className="rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-600">
                Compartir
              </button>
            </div>
          </div>

          <div className="card p-6">
            <h3 className="text-sm font-semibold uppercase text-foro-gray">
              Normas rápidas
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              {community.rules.map((rule) => (
                <li key={rule}>• {rule}</li>
              ))}
            </ul>
          </div>

          <div className="card p-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-sm font-semibold uppercase text-foro-gray">
                Publicaciones recientes
              </h3>
              <select className="rounded-full border border-slate-200 px-4 py-2 text-xs text-slate-600">
                <option>Ordenar por</option>
                <option>Más recientes</option>
                <option>Más populares</option>
              </select>
            </div>
            <div className="mt-4 space-y-4">
              {communityPosts.map((post) => (
                <article key={post.title} className="rounded-2xl bg-slate-50 p-4">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span>{post.author}</span>
                    <span>{post.updatedAt}</span>
                  </div>
                  <h4 className="mt-2 text-sm font-semibold text-slate-900">
                    {post.title}
                  </h4>
                  <p className="mt-2 text-sm text-slate-600">
                    {post.summary}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-600"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <Sidebar />
      </main>
    </div>
  );
}
