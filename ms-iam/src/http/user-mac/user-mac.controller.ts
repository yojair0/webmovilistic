import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserMacService } from './user-mac.service';
import { CreateUserMacDto } from './dto/create-user-mac.dto';
import { UpdateUserMacDto } from './dto/update-user-mac.dto';

@Controller('user-mac')
export class UserMacController {
  constructor(private readonly userMacService: UserMacService) {}

  @Post()
  async create(@Body() createUserMacDto: CreateUserMacDto) {
    return this.userMacService.create(createUserMacDto);
  }

  @Get()
  async findAll() {
    return this.userMacService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.userMacService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserMacDto: UpdateUserMacDto) {
    return this.userMacService.update(id, updateUserMacDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.userMacService.remove(id);
  }
}