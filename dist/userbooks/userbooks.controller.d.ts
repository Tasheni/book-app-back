import { UserbooksService } from './userbooks.service';
import { UserbooksDto } from './dto/userbooks.dto';
export declare class UserbooksController {
    private readonly userbooksService;
    constructor(userbooksService: UserbooksService);
    addToToBeReadList(bookTitle: string): Promise<import("./userbook.schema").Userbook>;
    addToCurrentlyReadingList(bookTitle: string): Promise<import("./userbook.schema").Userbook>;
    rateBook(_id: string, userbookDto: UserbooksDto): Promise<import("./userbook.schema").Userbook>;
}
