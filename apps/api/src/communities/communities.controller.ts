import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";
import { CommunitiesService } from "./communities.service";
import {
  CommunityFilters,
  CommunityPostsFilters,
  CreateCommunityRequest
} from "./dto";

@Controller("communities")
export class CommunitiesController {
  constructor(private readonly communitiesService: CommunitiesService) {}

  @Get()
  listCommunities(@Query() query: CommunityFilters) {
    return this.communitiesService.listCommunities(query);
  }

  @Get(":slug")
  getCommunity(@Param("slug") slug: string) {
    return this.communitiesService.getCommunityBySlug(slug);
  }

  @Post()
  createCommunity(@Body() payload: CreateCommunityRequest) {
    return this.communitiesService.createCommunity(payload);
  }

  @Get(":slug/posts")
  listCommunityPosts(
    @Param("slug") slug: string,
    @Query() query: CommunityPostsFilters
  ) {
    return this.communitiesService.listCommunityPosts(slug, query);
  }
}
