import { BooksService } from './books.service';
import { BookDto } from './dto/book.dto';
import { Book } from './book.schema';
export declare class BookController {
    private readonly booksService;
    constructor(booksService: BooksService);
    getAll(): Promise<Book[]>;
    findOneByTitle(title: string): Promise<Book>;
    getAllbyAuthor(author: string): Promise<Book[]>;
    create(bookDto: BookDto): Promise<Book>;
    update(id: string, bookDto: BookDto): Promise<Book>;
    remove(id: string): Promise<void>;
    searchBooks(term: string, genre: string): Promise<Book[]>;
    getGenres(): Promise<string[]>;
    getBooks(genre: string): Promise<Book[]>;
    getAverageRatingByGenre(genre: string): Promise<number>;
    getReadingTimeDistribution(): Promise<{
        duration: number;
        count: number;
    }[]>;
    getGenreDistribution(): Promise<{
        genre: string;
        count: number;
    }[]>;
    updateReadStatus(id: string, bookDto: BookDto): Promise<BookDto>;
}
