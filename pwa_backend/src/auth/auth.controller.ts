import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
  ) {}

  @Get()
  async findAll() {
    // return [{ success: true, message: "Prueba" }];
    const data = await this.usersService.findAll().then((users) => {
      return users;
    });

    const pass = 'cl0udf4rm3rs4dmin';
    data.forEach(async (element) => {
      const hash = await bcrypt.hash(pass, 10);
      const hash_new = hash.replace('$2b$', '$2y$');
      const isMatch = await bcrypt.compare(pass, element.password);
      console.log('User => ', element.username);
      console.log('password no hasheada => ', pass);
      console.log('password node hasheada => ', hash);
      console.log('password node hasheada new => ', hash_new);
      console.log('password from symfony => ', element.password);
      console.log(
        'isMatch => ',
        isMatch ? 'COINCIDE !!!!!!!!!!!!!!!!' : 'NO MATCH!!',
      );
      console.log(
        '-----------------------------------------------------------------',
      );
    });
  }
}
