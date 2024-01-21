import { Controller, Post, Body, Param, Put, InternalServerErrorException } from '@nestjs/common';
import { UserbooksService } from './userbooks.service';
import { UserbooksDto } from './dto/userbooks.dto';


@Controller('userbooks')
export class UserbooksController {
  constructor(private readonly userbooksService: UserbooksService) {}

  @Post('to-be-read/:bookTitle')
  addToToBeReadList(@Param('bookTitle') bookTitle: string) {
    return this.userbooksService.addToToBeReadList(bookTitle);
  }

  @Post('currently-reading/:bookTitle')
  addToCurrentlyReadingList(@Param('bookTitle') bookTitle: string) {
    return this.userbooksService.addToCurrentlyReadingList(bookTitle);
  }

  @Put(':id/rate')
  rateBook(@Param('id') _id: string, @Body() userbookDto: UserbooksDto) {
    try {
    return this.userbooksService.rateBook(_id, userbookDto);
  } catch (error) {
    console.log('Error rating the book:', error);
    throw new InternalServerErrorException('Internak Server Error');
  }
}
}
