import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Answer extends Document {
  @Prop({ required: true })
  questionId?: string;

  @Prop({ required: true })
  answer?: string;
}

export const AnswerSchema = SchemaFactory.createForClass(Answer);