import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type UserbookDocument = Userbook & Document;

@Schema()
export class Userbook {
  @Prop({ type: Types.ObjectId, ref: 'User' })
  userId: string;

  @Prop({ type: Types.ObjectId, ref: 'Book' })
  bookTitle: string;

  @Prop({ enum: ['to-be-read', 'currently-reading'], default: 'to-be-read' })
  status: string;

  @Prop({ min: 1, max: 5, default: null })
  rating: number;

 
}

export const UserbookSchema = SchemaFactory.createForClass(Userbook);
