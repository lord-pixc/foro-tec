import { Module } from "@nestjs/common";
import { CommunitiesModule } from "./communities/communities.module";
import { PrismaModule } from "./database/prisma.module";
import { HealthController } from "./health.controller";
import { PostsModule } from "./posts/posts.module";

@Module({
  imports: [PrismaModule, CommunitiesModule, PostsModule],
  controllers: [HealthController],
  providers: []
})
export class AppModule {}
