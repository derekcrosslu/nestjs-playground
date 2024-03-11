/* eslint-disable prettier/prettier */
import { IsBoolean, IsOptional } from 'class-validator';

export class UpdateUserSettingsDto {
    @IsBoolean()
    @IsOptional()
    smsEnabled?: boolean;

    @IsBoolean()
    @IsOptional()
    notifications?: boolean;
}