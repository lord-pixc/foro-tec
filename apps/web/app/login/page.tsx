export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-6">
      <div className="card w-full max-w-md p-8">
        {/* Encabezado del login */}
        <div className="text-center">
          <p className="text-sm uppercase tracking-wide text-foro-gray">
            ForoTec
          </p>
          <h1 className="mt-2 text-2xl font-bold text-foro-blue">
            Iniciar sesión
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            Accede con tu cuenta institucional
          </p>
        </div>

        {/* Formulario visual (maqueteo) */}
        <form className="mt-6 space-y-4">
          <div>
            <label className="text-xs font-semibold uppercase text-foro-gray">
              Correo institucional
            </label>
            <input
              className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-2 text-sm focus:border-foro-blue focus:outline-none"
              placeholder="nombre@itcr.ac.cr"
              type="email"
            />
          </div>
          <div>
            <label className="text-xs font-semibold uppercase text-foro-gray">
              Contraseña
            </label>
            <input
              className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-2 text-sm focus:border-foro-blue focus:outline-none"
              placeholder="••••••••"
              type="password"
            />
          </div>
          <button
            className="w-full rounded-lg bg-foro-blue px-4 py-2 text-sm font-semibold text-white hover:bg-foro-blue-light"
            type="button"
          >
            Continuar
          </button>
        </form>

        {/* Acciones secundarias */}
        <div className="mt-6 text-center text-sm text-slate-600">
          <p>¿Olvidaste tu contraseña?</p>
          <button className="mt-2 text-foro-blue underline">
            Recuperar acceso
          </button>
        </div>
      </div>
    </div>
  );
}
