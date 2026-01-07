import Link from "next/link";
import { Sidebar } from "../../components/Sidebar";

export default function NewPostPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-sm uppercase tracking-wide text-foro-gray">
              Nueva publicación
            </p>
            <h1 className="text-2xl font-bold text-foro-blue">
              Crear post
            </h1>
          </div>
          <Link
            className="rounded-full border border-foro-blue px-4 py-2 text-sm font-semibold text-foro-blue"
            href="/"
          >
            Volver al inicio
          </Link>
        </div>
      </header>

      <main className="mx-auto grid w-full max-w-6xl gap-6 px-6 py-8 lg:grid-cols-[1fr_280px]">
        <section className="space-y-6">
          <form className="card space-y-5 p-6">
            <div>
              <label className="text-xs font-semibold uppercase text-foro-gray">
                Título
              </label>
              <input
                className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-2 text-sm focus:border-foro-blue focus:outline-none"
                placeholder="Ej: Recursos para Bases de Datos"
              />
            </div>
            <div>
              <label className="text-xs font-semibold uppercase text-foro-gray">
                Comunidad
              </label>
              <select className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-2 text-sm text-slate-600">
                <option>Tecnología</option>
                <option>Innovación</option>
                <option>Vida estudiantil</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-semibold uppercase text-foro-gray">
                Resumen
              </label>
              <input
                className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-2 text-sm focus:border-foro-blue focus:outline-none"
                placeholder="Describe el objetivo del post en una línea"
              />
            </div>
            <div>
              <label className="text-xs font-semibold uppercase text-foro-gray">
                Contenido
              </label>
              <textarea
                className="mt-2 min-h-[160px] w-full rounded-lg border border-slate-200 px-4 py-2 text-sm focus:border-foro-blue focus:outline-none"
                placeholder="Comparte detalles, enlaces o recursos..."
              />
            </div>
            <div>
              <label className="text-xs font-semibold uppercase text-foro-gray">
                Etiquetas
              </label>
              <input
                className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-2 text-sm focus:border-foro-blue focus:outline-none"
                placeholder="Ej: #database #forotec #estudio"
              />
            </div>
            <div className="flex flex-wrap gap-3">
              <button className="rounded-full bg-foro-blue px-6 py-2 text-sm font-semibold text-white hover:bg-foro-blue-light">
                Publicar
              </button>
              <button className="rounded-full border border-slate-200 px-6 py-2 text-sm font-semibold text-slate-600">
                Guardar borrador
              </button>
              <button className="rounded-full border border-red-200 px-6 py-2 text-sm font-semibold text-red-500">
                Eliminar borrador
              </button>
            </div>
          </form>
        </section>

        <Sidebar />
      </main>
    </div>
  );
}
