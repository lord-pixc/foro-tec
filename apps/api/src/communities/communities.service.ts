import { Injectable } from "@nestjs/common";
import { PrismaService } from "../database/prisma.service";
import {
  CommunityFilters,
  CommunityPostsFilters,
  CreateCommunityRequest
} from "./dto";

@Injectable()
export class CommunitiesService {
  constructor(private readonly prismaService: PrismaService) {}

  async listCommunities(filters: CommunityFilters) {
    const where = filters.search
      ? {
          OR: [
            { name: { contains: filters.search, mode: "insensitive" } },
            { description: { contains: filters.search, mode: "insensitive" } }
          ]
        }
      : undefined;

    const orderBy = (() => {
      switch (filters.orderBy) {
        case "members":
          return { memberships: { _count: "desc" } };
        case "name":
          return { name: "asc" };
        default:
          return { createdAt: "desc" };
      }
    })();

    return this.prismaService.client.community.findMany({
      where,
      orderBy,
      include: {
        _count: {
          select: {
            memberships: true,
            posts: true
          }
        }
      }
    });
  }

  async getCommunityBySlug(slug: string) {
    return this.prismaService.client.community.findUnique({
      where: { slug },
      include: {
        _count: {
          select: {
            memberships: true,
            posts: true
          }
        }
      }
    });
  }

  async createCommunity(payload: CreateCommunityRequest) {
    return this.prismaService.client.community.create({
      data: payload
    });
  }

  async listCommunityPosts(slug: string, filters: CommunityPostsFilters) {
    const where = {
      community: { slug },
      isDeleted: false,
      ...(filters.search
        ? {
            OR: [
              { title: { contains: filters.search, mode: "insensitive" } },
              { content: { contains: filters.search, mode: "insensitive" } }
            ]
          }
        : {}),
      ...(filters.tag ? { tags: { has: filters.tag } } : {})
    };

    const orderBy = filters.orderBy === "popular" ? { updatedAt: "desc" } : { createdAt: "desc" };

    return this.prismaService.client.post.findMany({
      where,
      orderBy,
      include: {
        author: {
          select: { id: true, name: true }
        }
      }
    });
  }
}
