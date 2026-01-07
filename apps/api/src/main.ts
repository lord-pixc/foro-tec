import "reflect-metadata";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
  // Configuración base del servidor API
  const app = await NestFactory.create(AppModule);

  // Prefijo global para mantener la API organizada
  app.setGlobalPrefix("api");

  // Ajuste mínimo de seguridad y estandarización
  app.enableCors({
    origin: ["http://localhost:3000"],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true
  });

  await app.listen(4000);
}

bootstrap();
