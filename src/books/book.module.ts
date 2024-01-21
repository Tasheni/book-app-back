import { Document } from 'mongoose';

export interface Book extends Document {
  title: string;
  author: string;
  publishedYear: number;
  isbn: string;
  description: string;
  coverImageURL: string;
  genres: string;
  language: string;
}
