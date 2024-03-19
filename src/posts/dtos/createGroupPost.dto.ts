/* eslint-disable prettier/prettier */
import { ArrayNotEmpty, IsArray, IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";


export class CreateGroupPostDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNumber({}, { each: true})
  @IsNotEmpty({ each: true })
  @IsArray()
  @ArrayNotEmpty()
  userIds: number[];
}