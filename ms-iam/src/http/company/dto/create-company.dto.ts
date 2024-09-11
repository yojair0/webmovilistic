import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateCompanyDto {
  @IsNotEmpty()
  name?: string;

  @IsNotEmpty()
  address?: string;

  @IsOptional()
  phone?: number;
}