/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) { }
  
  createPost(data: Prisma.PostCreateInput) {
    return this.prisma.post.create({ data });
  }
  createGroupPost(
    userIds: number[],
    data: Prisma.GroupPostCreateWithoutUsersInput
  ) {
    return this.prisma.groupPost.create({
      data: {
        ...data,
        users: {
          create: userIds.map((userId) => ({ userId: userId }))
        }
      }
    });
  }

  getGroupPosts() {
    return this.prisma.groupPost.findMany({
      include: {
        users: {
          select: {
            user: true
          }
        }
      }
    });
  }
}
