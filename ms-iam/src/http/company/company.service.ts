import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { Company } from 'src/schemas/company.schema';

@Injectable()
export class CompanyService {
  constructor(@InjectModel(Company.name) private companyModel: Model<Company>) {}

  async create(createCompanyDto: CreateCompanyDto) {
    const createdCompany = new this.companyModel(createCompanyDto);
    return await createdCompany.save();
  }

  async findAll() {
    return await this.companyModel.find().exec();
  }

  async findOne(id: string) {
    return await this.companyModel.findById(id).exec();
  }

  async update(id: string, updateCompanyDto: UpdateCompanyDto) {
    return await this.companyModel.findByIdAndUpdate(id, updateCompanyDto, { new: true }).exec();
  }

  async remove(id: string) {
    return await this.companyModel.findByIdAndDelete(id).exec();
  }
}