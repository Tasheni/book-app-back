import { UsersService } from './users.service';
import { UsersDto } from './dto/users.dto';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    getAll(): Promise<import("./user.schema").User[]>;
    create(body: UsersDto): Promise<any>;
    login(body: UsersDto): Promise<any>;
    deleteUser(email: string): Promise<string>;
}
