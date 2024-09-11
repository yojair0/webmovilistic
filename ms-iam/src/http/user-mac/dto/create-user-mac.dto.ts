// create-user-mac.dto.ts
import { IsNotEmpty, IsDateString } from 'class-validator';

export class CreateUserMacDto {
  @IsNotEmpty()
  userId?: string;

  @IsNotEmpty()
  machineId?: string;

  @IsNotEmpty()
  @IsDateString()
  assignedAt?: Date;
}