import { PartialType } from '@nestjs/mapped-types';
import { CreateUserMacDto } from './create-user-mac.dto';

export class UpdateUserMacDto extends PartialType(CreateUserMacDto) {}