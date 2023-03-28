import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LoginAuthDto } from './dto/login-auth.dto';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { User } from '../users/dto/user.dto';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}
  async login(loginAuthDto: LoginAuthDto) {
    return await this.userRepository.find({
      select: ['id', 'username'],
      take: 5,
    });
  }

  async findAll() {
    return await this.userRepository.find({
      select: ['id', 'username', 'password'],
      take: 15,
    });
  }

  /**
   * Traer concepto pot id
   */

  async findOne(id: number) {
    return await this.userRepository.findOne({
      where: { id: id },
    });
  }

  update(id: number, updateAuthDto: RegisterAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
