/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable prettier/prettier */
import { Controller, Get, Param, Post, Body, Patch, Delete, Query, ParseIntPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

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
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.findOne(id);
  }
  @Post()
  create(@Body() CreateUserDto: CreateUserDto) {
    return this.usersService.create(CreateUserDto);
  }
  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() UpdateUserDto: UpdateUserDto) {
    return this.usersService.update(id, UpdateUserDto);
  }
  @Delete(':id')
    delete(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.delete(id);
  }
}