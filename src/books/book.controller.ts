import { Controller, Get, Post, Put, Delete, Param, Body, Query, NotFoundException } from '@nestjs/common';
import { BooksService } from './books.service';
import { BookDto } from './dto/book.dto';
import { Book } from './book.schema';

@Controller('books')
export class BookController {
  constructor(private readonly booksService: BooksService) { }

  @Get('getAll')
  async getAll() {
    return this.booksService.findAllBooks();
  }


  @Get('title')
  async findOneByTitle(@Query('title') title: string) {
    return this.booksService.findBookByTitle(title);
  };

  @Get('author')
  async getAllbyAuthor(@Query('author') author: string){
    return this.booksService.findAllByAuthor(author);
  }

  @Post()
  async create(@Body() bookDto: BookDto) {
    return await this.booksService.createBook(bookDto);
  };

  @Put(':id')
  async update(@Param('id') id: string, @Body() bookDto: BookDto) {
    return await this.booksService.updateBook(id, bookDto);
  };

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await  this.booksService.deleteBook(id);
  };


  @Get('search')
  async searchBooks(
    @Query('term') term: string,
    @Query('genre') genre: string,
  ): Promise<Book[]> {
    return this.booksService.searchBooks(term, genre);
  }

  @Get('genres')
  async getGenres() {
    const genres = await this.booksService.getAllGenres();
    return genres;
  }

@Get()
async getBooks(@Query('genre') genre: string): Promise<Book[]> {
  console.log('Request received with genre:', genre);
  if (genre) {
    return await this.booksService.getBooksByGenre(genre);
  }
}

  @Get('average-rating/:genre')
  async getAverageRatingByGenre(@Param('genre') genre: string): Promise<number> {
    return this.booksService.getAverageRatingByGenre(genre);
  }

  @Get('reading-time-distribution')
  async getReadingTimeDistribution(): Promise<{ duration: number; count: number }[]> {
    return this.booksService.getReadingTimeDistribution();
  }

  @Get('genre-distribution')
  async getGenreDistribution(): Promise<{ genre: string; count: number }[]> {
    return this.booksService.getGenreDistribution();
  }

  @Put(':id/update-read-status')
  async updateReadStatus(@Param('id') id: string, @Body() bookDto: BookDto) {
    const updatedBook = await this.booksService.updateReadStatus(id, bookDto.readStatus);

    if (!updatedBook) {
      throw new NotFoundException(`Book with ID ${id} not found`);
    }

    return updatedBook;
  }
}



