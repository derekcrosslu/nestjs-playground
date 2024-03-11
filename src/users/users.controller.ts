/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import {
  Body,
  Get,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
  Param,
  ParseIntPipe,
  HttpException,
  Patch,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dtos/CreateUser.dto';
import { UpdateUserDto } from './dtos/UpdateUser.dto';
import { UpdateUserSettingsDto } from './dtos/UpdateUserSettings.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Post()
  @UsePipes(ValidationPipe)
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }
  @Get()
  getUsers() {
    return this.usersService.getUsers();
  }
  @Get(':id')
  async getUserById(@Param('id', ParseIntPipe) id: number){
    const user = await this.usersService.getUserById(id);
    if (!user) {
      throw new HttpException('User not found', 404);
      return user
    } else {
      return user;
    }
  }
  @Delete(':id')
  async deleteUserById(@Param('id', ParseIntPipe) id: number) {
    const user = await this.usersService.getUserById(id);
    if (!user) {
      throw new HttpException('User not found', 404);
    } else {
      return this.usersService.deleteUserById(id);
    }
  }
  @Patch(':id')
  updateUserById(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto
  ) {
    return this.usersService.updateUserById(id, updateUserDto);
  }
  @Patch(':id/settings')
  updateUserSettingsByUserId(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserSettingsDto: UpdateUserSettingsDto
  ) {
    return this.usersService.updateUserSettings(id, updateUserSettingsDto);
  }
}
