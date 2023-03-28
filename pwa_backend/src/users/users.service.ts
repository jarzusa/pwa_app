import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async findAll() {
    return await this.userRepository.find({
      select: ['id', 'username', 'password'],
      take: 15,
    });
  }

  async findOne(id: number) {
    return await this.userRepository.findOne({
      where: { id: id },
    });
  }
}
