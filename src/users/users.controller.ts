/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable prettier/prettier */
import { Controller, Get, Param, Post, Body, Patch, Delete, Query } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  /* ...
    GET /users
    GET /users/:id
    POST /users
    PUT /users/:id
    PATCH /users/:id
    DELETE /users/:id
  */
  @Get()
  findAll(@Query("role") role?:"INTERN" | "ENGINEER" | "ADMIN") {
    return this.usersService.findAll(role);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }
  @Post()
  create(@Body() user:{ name: string, email: string, role: "INTERN" | "ENGINEER" | "ADMIN"; }) {
    return this.usersService.create(user);
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() userUpdate: { name?: string, email?: string, role?: "INTERN" | "ENGINEER" | "ADMIN"; }) {
    return this.usersService.update(+id, userUpdate);
  }
  @Delete(':id')
    delete(@Param('id') id: string) {
    return this.usersService.delete(+id);
  }
}