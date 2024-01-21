import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Userbook, UserbookDocument } from './userbook.schema';
import { UserbooksDto } from './dto/userbooks.dto';

@Injectable()
export class UserbooksService {
  constructor(
    @InjectModel(Userbook.name) private userbookModel: Model<UserbookDocument>,
  ) {}

  async addToToBeReadList(bookTitle: string): Promise<Userbook> {
    return await this.createOrUpdateUserBook(bookTitle, 'to-be-read');
  }

  async addToCurrentlyReadingList(bookTitle: string): Promise<Userbook> {
    return await this.createOrUpdateUserBook(bookTitle, 'currently-reading');
  }

  async rateBook(_id: string, userbookDto: UserbooksDto): Promise<Userbook> {
    const userbook = await this.userbookModel.findByIdAndUpdate(_id, userbookDto, { new: true });
    if (!userbook) {
      throw new NotFoundException('User book not found');
    }
    return userbook;
  }

  private async createOrUpdateUserBook(bookTitle: string, status: string): Promise<Userbook> {
    const userId = 'user_id';
    const existingUserbook = await this.userbookModel.findOne({ userId, bookTitle });
    if (existingUserbook) {
      existingUserbook.status = status;
      return existingUserbook.save();
    }
    const newUserbook = new this.userbookModel({ userId, bookTitle, status });
    return newUserbook.save();
  }
}
