import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes } from 'mongoose';


@Schema()
export class Book extends Document {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  author: string;

  @Prop()
  publishedYear: number;

  @Prop()
  isbn: string;

  @Prop()
  description: string;

  @Prop()
  coverImageURL: string;

  @Prop()
  genres: string;

  @Prop()
  language: string;

  @Prop()
  readStatus: string;
  enum: ['Read', 'Currrently Reading', 'To Read'];

  @Prop({type: Number})
  userRating: number;

  @Prop()
  numberOfPages: number;

  @Prop()
  readingTime: number;

  @Prop()
  tags: string;

  @Prop()
  format: string;

  @Prop()
  dateAdded: Date;

  @Prop()
  startDate: string;

  @Prop()
  endDate: string;


}

export const BookSchema = SchemaFactory.createForClass(Book);
