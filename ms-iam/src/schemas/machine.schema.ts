import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Machine extends Document {
  @Prop({ required: true })
  name?: string;

  @Prop({ required: true })
  type?: string;

  @Prop({ required: true })
  location?: string;
}

export const MachineSchema = SchemaFactory.createForClass(Machine);