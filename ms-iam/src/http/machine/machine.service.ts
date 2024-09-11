import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateMachineDto } from './dto/create-machine.dto';
import { UpdateMachineDto } from './dto/update-machine.dto';
import { Machine } from 'src/schemas/machine.schema';

@Injectable()
export class MachineService {
  constructor(@InjectModel(Machine.name) private machineModel: Model<Machine>) {}

  async create(createMachineDto: CreateMachineDto) {
    const createdMachine = new this.machineModel(createMachineDto);
    return createdMachine.save();
  }

  async findAll() {
    return this.machineModel.find().exec();
  }

  async findOne(id: string) {
    return this.machineModel.findById(id).exec();
  }

  async update(id: string, updateMachineDto: UpdateMachineDto) {
    return this.machineModel.findByIdAndUpdate(id, updateMachineDto, { new: true }).exec();
  }

  async remove(id: string) {
    return this.machineModel.findByIdAndDelete(id).exec();
  }
}