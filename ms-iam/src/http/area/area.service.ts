import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateAreaDto } from './dto/create-area.dto';
import { UpdateAreaDto } from './dto/update-area.dto';
import { Area } from 'src/schemas/area.schema';

@Injectable()
export class AreaService {
  constructor(@InjectModel(Area.name) private areaModel: Model<Area>) {}

  async create(createAreaDto: CreateAreaDto) {
    const createdArea = new this.areaModel(createAreaDto);
    return createdArea.save();
  }

  async findAll() {
    return this.areaModel.find().exec();
  }

  async findOne(id: string) {
    return this.areaModel.findById(id).exec();
  }

  async update(id: string, updateAreaDto: UpdateAreaDto) {
    return this.areaModel.findByIdAndUpdate(id, updateAreaDto, { new: true }).exec();
  }

  async remove(id: string) {
    return this.areaModel.findByIdAndDelete(id).exec();
  }
}