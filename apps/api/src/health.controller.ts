import { Controller, Get } from "@nestjs/common";

@Controller("health")
export class HealthController {
  @Get()
  getHealth() {
    // Endpoint mínimo para verificar que la API está activa
    return {
      status: "ok",
      service: "foro-tec-api"
    };
  }
}
