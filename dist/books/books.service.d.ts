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
import { Model } from 'mongoose';
import { Book } from './book.schema';
import { BookDto } from './dto/book.dto';
export declare class BooksService {
    private readonly bookModel;
    constructor(bookModel: Model<Book>);
    createBook(bookDto: BookDto): Promise<Book>;
    findAllBooks(): Promise<Book[]>;
    searchBooks(term: string, genre: string): Promise<Book[]>;
    findBookByTitle(title: string): Promise<Book>;
    findAllByAuthor(author: string): Promise<Book[]>;
    findBookById(id: string): Promise<Book>;
    updateBook(id: string, bookDto: BookDto): Promise<Book>;
    deleteBook(id: string): Promise<void>;
    searchByGenre(genre: string): Promise<(import("mongoose").Document<unknown, {}, Book> & Book & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    getAllGenres(): Promise<string[]>;
    getAverageRatingByGenre(genre: string): Promise<number>;
    getReadingTimeDistribution(): Promise<{
        duration: number;
        count: number;
    }[]>;
    getGenreDistribution(): Promise<{
        genre: string;
        count: number;
    }[]>;
    getBooksByGenre(genre: string): Promise<Book[]>;
    updateReadStatus(bookId: string, newReadStatus: string): Promise<BookDto | null>;
}
