import Link from "next/link";

const communities = [
  { name: "Tecnología", href: "/" },
  { name: "Innovación", href: "/" },
  { name: "Vida estudiantil", href: "/" }
];

const shortcuts = [
  { name: "Publicar", href: "/" },
  { name: "Mis publicaciones", href: "/perfil" },
  { name: "Panel admin", href: "/admin" }
];

export function Sidebar() {
  return (
    <aside className="card h-fit w-full p-6 lg:w-72">
      {/* Sección de accesos rápidos */}
      <div className="space-y-3">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-foro-gray">
          Accesos rápidos
        </h2>
        <ul className="space-y-2">
          {shortcuts.map((item) => (
            <li key={item.name}>
              <Link
                className="block rounded-lg px-3 py-2 text-sm font-medium text-foro-blue hover:bg-foro-gray-light"
                href={item.href}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Sección de comunidades */}
      <div className="mt-8 space-y-3">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-foro-gray">
          Comunidades
        </h2>
        <ul className="space-y-2">
          {communities.map((community) => (
            <li key={community.name}>
              <Link
                className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-foro-gray-light"
                href={community.href}
              >
                {community.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
