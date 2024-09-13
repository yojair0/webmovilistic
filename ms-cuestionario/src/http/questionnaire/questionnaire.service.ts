import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateQuestionnaireDto } from './dto/create-questionnaire.dto';
import { UpdateQuestionnaireDto } from './dto/update-questionnaire.dto';
import { Questionnaire } from 'src/schemas/questionnaire.schema';

@Injectable()
export class QuestionnaireService {
  constructor(
    @InjectModel(Questionnaire.name) private questionnaireModel: Model<Questionnaire>,
  ) {}

  async create(createQuestionnaireDto: CreateQuestionnaireDto) {
    const createdQuestionnaire = new this.questionnaireModel(createQuestionnaireDto);
    return createdQuestionnaire.save();
  }

  async findAll() {
    return await this.questionnaireModel.find().exec();
  }

  async findOne(id: string) {
    return await this.questionnaireModel.findById(id).exec();
  }

  async update(id: string, updateQuestionnaireDto: UpdateQuestionnaireDto) {
    return await this.questionnaireModel.findByIdAndUpdate(id, updateQuestionnaireDto, { new: true }).exec();
  }

  async remove(id: string) {
    return await this.questionnaireModel.findByIdAndDelete(id).exec();
  }
}