/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Document } from 'mongoose';
export declare class Book extends Document {
    title: string;
    author: string;
    publishedYear: number;
    isbn: string;
    description: string;
    coverImageURL: string;
    genres: string;
    language: string;
    readStatus: string;
    enum: ['Read', 'Currrently Reading', 'To Read'];
    userRating: number;
    numberOfPages: number;
    readingTime: number;
    tags: string;
    format: string;
    dateAdded: Date;
    startDate: string;
    endDate: string;
}
export declare const BookSchema: import("mongoose").Schema<Book, import("mongoose").Model<Book, any, any, any, Document<unknown, any, Book> & Book & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Book, Document<unknown, {}, Book> & Book & {
    _id: import("mongoose").Types.ObjectId;
}>;
