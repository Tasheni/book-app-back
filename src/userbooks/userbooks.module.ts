import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserbooksController } from './userbooks.controller';
import { UserbooksService } from './userbooks.service';
import { Userbook, UserbookSchema } from './userbook.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Userbook.name, schema: UserbookSchema }])],
  controllers: [UserbooksController],
  providers: [UserbooksService],
})
export class UserbooksModule {}

