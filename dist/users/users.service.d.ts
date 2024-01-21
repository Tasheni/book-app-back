import { Model } from 'mongoose';
import { User, UserDocument } from './user.schema';
import { UsersDto } from './dto/users.dto';
export declare class UsersService {
    private userModel;
    constructor(userModel: Model<UserDocument>);
    findAllUsers(): Promise<User[]>;
    createUser(body: UsersDto): Promise<User>;
    loginUser(body: UsersDto): Promise<any>;
    deleteUserByEmail(email: string): Promise<string>;
}
