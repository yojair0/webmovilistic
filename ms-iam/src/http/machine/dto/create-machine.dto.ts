import { IsNotEmpty } from 'class-validator';

export class CreateMachineDto {
  @IsNotEmpty()
  name?: string;

  @IsNotEmpty()
  type?: string;

  @IsNotEmpty()
  location?: string;
}