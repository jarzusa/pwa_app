import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { take } from 'rxjs';
import { RecipeService } from 'src/recipe/recipe.service';
import { DataSource, Repository } from 'typeorm';
import { Client } from './entities/client.entity';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(Client)
    private clientRepository: Repository<Client>,
    @InjectDataSource() private dataSource: DataSource,
    private readonly recipeService: RecipeService,
  ) {}

  // RAW SQL NOT PROCESSED EXAMPLE --------
  // return await this.dataSource.query(
  //   'SELECT id, nombre, nit, direccion, activo FROM cliente WHERE activo = 1',
  // );

  async findAll(text: string) {
    return await this.clientRepository.find({
      select: ['id', 'nombre', 'activo'],
      where: { activo: true }, 
      take: 100
    });
  }


  async findOne(id: number) {
    return await this.clientRepository.find({
      select: ['id', 'nombre'],
      where: { id: id },
    });
  }
}
