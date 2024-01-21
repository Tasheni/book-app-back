import { Controller, Post, Body, UseGuards, HttpCode, HttpStatus, Delete, Param, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersDto } from './dto/users.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  async getAll() {
    return this.usersService.findAllUsers();
  }

  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() body: UsersDto): Promise<any> {
    const createdUser = await this.usersService.createUser(body)
    return {createdUser};
  }

  @Post('Login')
  @HttpCode(HttpStatus.CREATED)
  async login(@Body() body: UsersDto): Promise<any>{
    const loginUser = await this.usersService.loginUser(body)
    return {loginUser};
  }

  @Delete(':email')
  async deleteUser(@Param('email') email: string): Promise<string> {
try {
    const result = await this.usersService.deleteUserByEmail(email)

    return  `User with email ${email} deleted successfully`;
} catch (error) {
    return `User deletion failed: ${error.message}`;
  };
  }
}
