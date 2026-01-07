# ForoTec (MVP)

MVP inicial para un foro estilo Reddit. Este repositorio separa la web (Next.js) y la API (Nest.js) para mantener una arquitectura no monolítica.

## ¿Qué está hecho actualmente?
- Estructura base del monorepo con `apps/web` (Next.js + TypeScript + Tailwind) y `apps/api` (Nest.js + TypeScript).
- Maqueteo visual inicial con páginas de: login, inicio de publicaciones, perfil de usuario y dashboard de admin.
- Sidebar reutilizable con comunidades y accesos rápidos.
- Configuración base de Prisma, variables de entorno de ejemplo y pautas de seguridad mínimas.

## Próximos pasos sugeridos
1. **Backend real**: implementar endpoints en Nest.js (posts, users, communities, auth).
2. **Auth.js**: configurar proveedores reales (OAuth/Email) y conectar con Prisma.
3. **Base de datos**: definir el esquema final en `prisma/schema.prisma` y generar migraciones.
4. **Autorización**: roles (admin/moderador/usuario) y protección de rutas.
5. **UI/UX**: estados vacíos reales, paginación y componentes reutilizables.
6. **Testing**: agregar pruebas unitarias y E2E (Playwright/Cypress).

## Notas
- Todas las secciones del MVP están comentadas en español para facilitar la evolución.
- Los colores principales giran en torno a azules, grises y blancos.
