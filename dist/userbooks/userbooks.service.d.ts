import { Model } from 'mongoose';
import { Userbook, UserbookDocument } from './userbook.schema';
import { UserbooksDto } from './dto/userbooks.dto';
export declare class UserbooksService {
    private userbookModel;
    constructor(userbookModel: Model<UserbookDocument>);
    addToToBeReadList(bookTitle: string): Promise<Userbook>;
    addToCurrentlyReadingList(bookTitle: string): Promise<Userbook>;
    rateBook(_id: string, userbookDto: UserbooksDto): Promise<Userbook>;
    private createOrUpdateUserBook;
}
