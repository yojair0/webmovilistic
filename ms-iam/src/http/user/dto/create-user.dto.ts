import { IsEmail, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  name?: string;

  @IsNotEmpty()
  lastName?: string;

  @IsNotEmpty()
  @IsEmail()
  email?: string;

  @IsNotEmpty()
  password?: string;

  @IsOptional()
  phone?: number;

  @IsOptional()
  address?: string;

  @IsOptional()
  addressAdditional?: string;
}
