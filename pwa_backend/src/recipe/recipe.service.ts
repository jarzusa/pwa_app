import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { Recipe } from './entities/recipe.entity';

@Injectable()
export class RecipeService {
  constructor(
    @InjectRepository(Recipe)
    private recipeRepository: Repository<Recipe>,
    @InjectDataSource() private dataSource: DataSource,
  ) {}
  async findAll() {
    return await this.dataSource.query(
      `SELECT rtr.* 
       FROM cliente_receta_tipo_ramo crtr
       INNER JOIN receta_tipo_ramo rtr ON rtr.id = crtr.receta_tipo_ramo_id
       WHERE rtr.activo = true`,
    );
  }

  async findOne(id: number) {
    return await this.dataSource.query(
      `SELECT rtr.* 
       FROM cliente_receta_tipo_ramo crtr
       INNER JOIN receta_tipo_ramo rtr ON rtr.id = crtr.receta_tipo_ramo_id
       WHERE crtr.id = ${id}`,
    );
  }

  async findByIdClient(id: number) {
    try {
      return await this.dataSource.query(
        `  SELECT rtr.*, tr.codigo as tipoRamo, gr.codigo as codigoGrado
         FROM cliente_receta_tipo_ramo crtr
         INNER JOIN receta_tipo_ramo rtr ON rtr.id = crtr.receta_tipo_ramo_id
         INNER JOIN tipo_ramo tr ON tr.id = rtr.tipo_ramo_id
         INNER JOIN grado gr ON gr.id = crtr.grado_id
         WHERE crtr.cliente_id = ${id} AND rtr.activo = true`,
      );
    } catch (error) {
      throw new InternalServerErrorException(
        `Ha ocurrido un error inesperado. Error: ${error}`,
      );
    }
  }
}
