/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dtos/createPost.dto';
import { CreateGroupPostDto } from './dtos/createGroupPost.dto';
import { create } from 'domain';

@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) { }
  
  @Post()
  @UsePipes(ValidationPipe)
  createPost(@Body() createPostDto: CreatePostDto) {
    return this.postsService.createPost(createPostDto);
  }

  @Post('group')
  @UsePipes(ValidationPipe)
  createGroupPost(
    @Body() { userIds, ...createGroupPostData}: CreateGroupPostDto) {
    return this.postsService.createGroupPost(userIds, createGroupPostData);
  }

  @Get('group')
  getGroupPosts() {
    return this.postsService.getGroupPosts();
  }
}
