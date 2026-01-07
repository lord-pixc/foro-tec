import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ForoTec",
  description: "Foro universitario del Instituto Tecnológico de Costa Rica"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-slate-50">
        {/* Contenedor principal del MVP */}
        {children}
      </body>
    </html>
  );
}
