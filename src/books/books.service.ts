import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Book } from './book.schema';
import { BookDto } from './dto/book.dto';

@Injectable()
export class BooksService {
  /* findAllByauthor(author: string) {
    throw new Error('Method not implemented.');
  } */
  constructor(@InjectModel('Book') private readonly bookModel: Model<Book>) {}

  async createBook(bookDto: BookDto): Promise<Book> {
    const newBook = new this.bookModel(bookDto);
    return await newBook.save();
  }

  async findAllBooks(): Promise<Book[]> {
    return await this.bookModel.find();
  }

  /* async searchBooks(term: string, genre: string): Promise<Book[]> {
    let query: any = {
      $or: [
        { title: { $regex: term, $options: 'i' } },
        { author: { $regex: term, $options: 'i' } },
      ],
    };
  
    if (genre) {
      query.genres = { $regex: genre, $options: 'i' };
    }
  
    return this.bookModel.find(query);
  } */

  async searchBooks(term: string, genre: string): Promise<Book[]> {
    const genreQuery = genre
      ? { genres: { $regex: `\\b${genre}\\b`, $options: 'i' } }
      : {};
    let query: any = {
      $or: [
        { title: { $regex: term, $options: 'i' } },
        { author: { $regex: term, $options: 'i' } },
      ],
      ...genreQuery,
    };
    return this.bookModel.find(query);
  }

  async findBookByTitle(title: string): Promise<Book> {
    return this.bookModel.findOne({
      title,
    });
  }

  async findAllByAuthor(author: string): Promise<Book[]> {
    console.log(author);
    return await this.bookModel.find({ author });
  }

  async findBookById(id: string): Promise<Book> {
    return await this.bookModel.findById(id);
  }

  async updateBook(id: string, bookDto: BookDto): Promise<Book> {
    return await this.bookModel.findByIdAndUpdate(id, bookDto, { new: true });
  }

  async deleteBook(id: string): Promise<void> {
    return await this.bookModel.findByIdAndRemove(id);
  }

  async searchByGenre(genre: string) {
    return this.bookModel.find({ genre }).exec();
  }

  async getAllGenres(): Promise<string[]> {
    const genres = await this.bookModel.distinct('genres');
    return genres;
  }

  async getAverageRatingByGenre(genre: string): Promise<number> {
    const booksInGenre = await this.bookModel.find({
      genres: { $regex: `\\b${genre}\\b`, $options: 'i' },
      userRating: { $exists: true },
    });

    const totalRatings = booksInGenre.reduce((sum, book) => sum + Number(book.userRating), 0);
    const averageRating = totalRatings / booksInGenre.length;

    return isNaN(averageRating) ? 0 : averageRating;
  }

  async getReadingTimeDistribution(): Promise<{ duration: number; count: number }[]> {
    const booksWithReadingTime = await this.bookModel.find({ readingTime: { $exists: true } });

    const readingTimeDistribution = booksWithReadingTime.reduce((distribution, book) => {
      const roundedReadingTime = Math.round(book.readingTime);
      const existingEntry = distribution.find((entry) => entry.duration === roundedReadingTime);

      if (existingEntry) {
        existingEntry.count += 1;
      } else {
        distribution.push({ duration: roundedReadingTime, count: 1 });
      }

      return distribution;
    }, []);

    return readingTimeDistribution;
  }

  async getGenreDistribution(): Promise<{ genre: string; count: number }[]> {
    const genreDistribution = await this.bookModel.aggregate([
      {
        $unwind: '$genres',
      },
      {
        $group: {
          _id: '$genres',
          count: { $sum: 1 },
        },
      },
    
      {
        $project: {
          genre: '$_id',
          count: 1,
          _id: 0,
        },
      },
    ]);

    return genreDistribution;
  }

  async getBooksByGenre(genre: string): Promise<Book[]> {
    console.log('Fetching books for genre:', genre);
    const query = { genres: genre };
    console.log('Generated query:', query);
    return await this.bookModel.find(query).exec();
  }

  async updateReadStatus(bookId: string, newReadStatus: string): Promise<BookDto | null> {
    const updatedBook: BookDto | null = await this.bookModel.findByIdAndUpdate(
      bookId,
      { readStatus: newReadStatus },
      { new: true },
    );
  
    return updatedBook;
  }


}
