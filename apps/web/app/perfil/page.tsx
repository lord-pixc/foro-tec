import { Sidebar } from "../components/Sidebar";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-sm uppercase tracking-wide text-foro-gray">
              Perfil de usuario
            </p>
            <h1 className="text-2xl font-bold text-foro-blue">Mi cuenta</h1>
          </div>
          <button className="rounded-full border border-foro-blue px-4 py-2 text-sm font-semibold text-foro-blue">
            Editar perfil
          </button>
        </div>
      </header>

      <main className="mx-auto grid w-full max-w-6xl gap-6 px-6 py-8 lg:grid-cols-[1fr_280px]">
        <section className="space-y-6">
          <div className="card p-6">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-foro-gray-light text-xl font-bold text-foro-blue">
                AC
              </div>
              <div>
                <h2 className="text-lg font-semibold text-slate-900">
                  Ana Castillo
                </h2>
                <p className="text-sm text-slate-600">
                  Ingeniería en Computación
                </p>
              </div>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="rounded-xl bg-slate-100 p-4 text-center">
                <p className="text-2xl font-bold text-foro-blue">12</p>
                <p className="text-xs uppercase text-foro-gray">Publicaciones</p>
              </div>
              <div className="rounded-xl bg-slate-100 p-4 text-center">
                <p className="text-2xl font-bold text-foro-blue">58</p>
                <p className="text-xs uppercase text-foro-gray">Comentarios</p>
              </div>
              <div className="rounded-xl bg-slate-100 p-4 text-center">
                <p className="text-2xl font-bold text-foro-blue">4</p>
                <p className="text-xs uppercase text-foro-gray">Comunidades</p>
              </div>
            </div>
          </div>

          <div className="card p-6">
            <h3 className="text-sm font-semibold uppercase text-foro-gray">
              Últimas publicaciones
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li>✅ Compartiendo recursos de estudio para Bases de Datos</li>
              <li>✅ Buscando equipo para hackathon del TEC</li>
              <li>✅ Revisión de proyectos de I+D</li>
            </ul>
          </div>
        </section>

        <Sidebar />
      </main>
    </div>
  );
}
