import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../users/dto/user.dto';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
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
