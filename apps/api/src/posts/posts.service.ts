import { Injectable } from "@nestjs/common";
import { PrismaService } from "../database/prisma.service";
import { CreatePostRequest } from "./dto";

@Injectable()
export class PostsService {
  constructor(private readonly prismaService: PrismaService) {}

  async createPost(payload: CreatePostRequest) {
    return this.prismaService.client.post.create({
      data: {
        title: payload.title,
        content: payload.content,
        summary: payload.summary,
        tags: payload.tags ?? [],
        author: {
          connect: { id: payload.authorId }
        },
        community: {
          connect: { id: payload.communityId }
        }
      }
    });
  }

  async deletePost(postId: string) {
    return this.prismaService.client.post.update({
      where: { id: postId },
      data: {
        isDeleted: true
      }
    });
  }
}
