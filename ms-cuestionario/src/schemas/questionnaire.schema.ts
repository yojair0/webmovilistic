import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Questionnaire extends Document {
  @Prop({ required: true })
  title?: string;

  @Prop({ required: true })
  description?: string;
}

export const QuestionnaireSchema = SchemaFactory.createForClass(Questionnaire);