import { Sidebar } from "../components/Sidebar";

export default function AdminDashboardPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-sm uppercase tracking-wide text-foro-gray">
              Panel administrativo
            </p>
            <h1 className="text-2xl font-bold text-foro-blue">Dashboard</h1>
          </div>
          <button className="rounded-full bg-foro-blue px-4 py-2 text-sm font-semibold text-white">
            Crear comunidad
          </button>
        </div>
      </header>

      <main className="mx-auto grid w-full max-w-6xl gap-6 px-6 py-8 lg:grid-cols-[1fr_280px]">
        <section className="space-y-6">
          <div className="card p-6">
            <h2 className="text-lg font-semibold text-slate-900">
              Estado general
            </h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl bg-slate-100 p-4">
                <p className="text-sm uppercase text-foro-gray">Usuarios activos</p>
                <p className="text-2xl font-bold text-foro-blue">245</p>
              </div>
              <div className="rounded-xl bg-slate-100 p-4">
                <p className="text-sm uppercase text-foro-gray">Reportes</p>
                <p className="text-2xl font-bold text-foro-blue">3</p>
              </div>
            </div>
          </div>

          <div className="card p-6">
            <h3 className="text-sm font-semibold uppercase text-foro-gray">
              Moderación rápida
            </h3>
            <div className="mt-4 space-y-3 text-sm text-slate-600">
              <p>• Revisar publicaciones reportadas</p>
              <p>• Aprobar nuevas comunidades</p>
              <p>• Gestionar roles de moderadores</p>
            </div>
          </div>
        </section>

        <Sidebar />
      </main>
    </div>
  );
}
