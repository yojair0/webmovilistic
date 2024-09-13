import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserMacDto } from './dto/create-user-mac.dto';
import { UpdateUserMacDto } from './dto/update-user-mac.dto';
import { UserMac } from 'src/schemas/user-mac.schema';

@Injectable()
export class UserMacService {
  constructor(@InjectModel(UserMac.name) private userMacModel: Model<UserMac>) {}

  async create(createUserMacDto: CreateUserMacDto) {
    const createdUserMac = new this.userMacModel(createUserMacDto);
    return await createdUserMac.save();
  }

  async findAll() {
    return await this.userMacModel.find().exec();
  }

  async findOne(id: string) {
    return await this.userMacModel.findById(id).exec();
  }

  async update(id: string, updateUserMacDto: UpdateUserMacDto) {
    return await this.userMacModel.findByIdAndUpdate(id, updateUserMacDto, { new: true }).exec();
  }

  async remove(id: string) {
    return await this.userMacModel.findByIdAndDelete(id).exec();
  }
}