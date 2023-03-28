import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScheduleModule } from '@nestjs/schedule';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './entities/user.entity';

@Module({
  imports: [
    HttpModule,
    TypeOrmModule.forFeature([User]),
    ScheduleModule.forRoot(),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})


export class UsersModule {}
