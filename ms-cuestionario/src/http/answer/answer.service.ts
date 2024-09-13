import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateAnswerDto } from './dto/create-answer.dto';
import { UpdateAnswerDto } from './dto/update-answer.dto';
import { Answer } from 'src/schemas/answer.schema';

@Injectable()
export class AnswerService {
  constructor(
    @InjectModel(Answer.name) private answerModel: Model<Answer>,
  ) {}

  async create(createAnswerDto: CreateAnswerDto) {
    const createdAnswer = new this.answerModel(createAnswerDto);
    return createdAnswer.save();
  }

  async findAll() {
    return await this.answerModel.find().exec();
  }

  async findOne(id: string) {
    return await this.answerModel.findById(id).exec();
  }

  async update(id: string, updateAnswerDto: UpdateAnswerDto) {
    return await this.answerModel.findByIdAndUpdate(id, updateAnswerDto, { new: true }).exec();
  }

  async remove(id: string) {
    return await this.answerModel.findByIdAndDelete(id).exec();
  }
}