/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsEnum(["INTERN", "ENGINEER", "ADMIN"], {message: "Role must be one of INTERN, ENGINEER, or ADMIN"})
  role: "INTERN" | "ENGINEER" | "ADMIN";
}

