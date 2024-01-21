import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './user.schema';
import * as bcrypt from 'bcrypt';
import { UsersDto } from './dto/users.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}
  

  async findAllUsers(): Promise<User[]> {
    return await this.userModel.find();
  };

  async createUser(body: UsersDto): Promise<User> {
    const { email, password } = body;
    const existingUser = await this.userModel.findOne({ email }).exec();

    if (existingUser) {
      throw new Error('Email already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const createdUser = new this.userModel({ email, password: hashedPassword });

    return createdUser.save();
  }

  async loginUser(body: UsersDto): Promise<any> {
    const { email, password } = body;
    const user = await this.userModel.findOne({ email }).exec();
    if (!user) {
      throw new Error('User not found');
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error('Invalid password');
    }
    return user;
  }


  async deleteUserByEmail(email: string): Promise<string> {
    const user = await this.userModel.findOneAndDelete({ email }).exec();
  
    if (!user) {
      throw new Error('User not found');
    }
  
    return 'User deleted successfully';
  }
}
