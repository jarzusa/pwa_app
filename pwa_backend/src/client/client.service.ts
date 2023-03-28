import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
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

  async findAll() {
    const clients = await this.clientRepository.find({
      select: ['id', 'nombre', 'activo'],
      where: { activo: true }
    });
    return await this.getRecipesByClient(clients);
  }

  async getRecipesByClient(clients) {
    const data = [];
    for (const key in clients) {
      const recipes = await this.recipeService
        .findByIdClient(clients[key].id)
        .then((recipes) => {
          return recipes;
        });
      if (recipes && recipes.length > 0) {
        clients[key]['recetas'] = recipes;
        data.push(clients[key]);
      }
    }
    return data;
  }

  async findOne(id: number) {
    return await this.clientRepository.find({
      select: ['id', 'nombre'],
      where: { id: id },
    });
  }
}
