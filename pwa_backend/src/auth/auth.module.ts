import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { HttpModule } from '@nestjs/axios';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScheduleModule } from '@nestjs/schedule';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';

@Module({
  imports: [
    HttpModule,
    TypeOrmModule.forFeature([User]),
    ScheduleModule.forRoot(),
  ],
  controllers: [AuthController],
  providers: [AuthService, UsersService]
})
export class AuthModule {}
