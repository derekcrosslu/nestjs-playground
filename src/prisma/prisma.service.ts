/* eslint-disable prettier/prettier */
import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit{
  onModuleInit() {
    this.$connect()
      .then(() => console.log('Connected to the database'))
      .catch((e) => {
        console.error('Failed to connect to the database');
        console.error(e);
      });
  }
}