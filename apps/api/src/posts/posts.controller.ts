import { Body, Controller, Delete, Param, Post } from "@nestjs/common";
import { PostsService } from "./posts.service";
import { CreatePostRequest } from "./dto";

@Controller("posts")
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  createPost(@Body() payload: CreatePostRequest) {
    return this.postsService.createPost(payload);
  }

  @Delete(":id")
  deletePost(@Param("id") id: string) {
    return this.postsService.deletePost(id);
  }
}
