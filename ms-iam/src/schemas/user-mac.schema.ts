import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class UserMac extends Document {
  @Prop({ required: true })
  userId?: string;

  @Prop({ required: true })
  machineId?: string;

  @Prop({ required: true })
  assignedAt?: Date;
}

export const UserMacSchema = SchemaFactory.createForClass(UserMac);