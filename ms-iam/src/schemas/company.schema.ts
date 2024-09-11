import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Company extends Document {
  @Prop({ required: true })
  name?: string;

  @Prop({ required: true })
  address?: string;

  @Prop()
  phone?: number;
}

export const CompanySchema = SchemaFactory.createForClass(Company);