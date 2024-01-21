import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Book, BookSchema } from './books/book.schema';
import { BookController } from './books/book.controller';
import { BooksService } from './books/books.service';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { User, UserSchema } from './users/user.schema';
import { UserbooksController } from './userbooks/userbooks.controller';
import { UserbooksService } from './userbooks/userbooks.service';
import { UserbooksModule } from './userbooks/userbooks.module';
import { Userbook, UserbookSchema } from './userbooks/userbook.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/book_library'),
    MongooseModule.forFeature([
      {
        name: Book.name,
        schema: BookSchema,
      },

      { name: User.name, schema: UserSchema },

      { name: Userbook.name, schema: UserbookSchema },
    ]),
    UsersModule,
    UserbooksModule,
  ],
  controllers: [
    AppController,
    BookController,
    UsersController,
    UserbooksController,
  ],
  providers: [AppService, BooksService, UsersService, UserbooksService],
})
export class AppModule {}
