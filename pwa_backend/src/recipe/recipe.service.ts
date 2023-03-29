import {
  HttpException,
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { BouquetTypeRecipeService } from 'src/bouquet-type-recipe/bouquet-type-recipe.service';
import { DataSource, Repository } from 'typeorm';
import { CustomerTypeRecipeBouquet } from './entities/recipe.entity';

@Injectable()
export class RecipeService {
  @Inject(BouquetTypeRecipeService)
  private readonly bouquetTypeRecipeService: BouquetTypeRecipeService;
  constructor(
    @InjectRepository(CustomerTypeRecipeBouquet)
    private customerTypeRecipeBouquetRepository: Repository<CustomerTypeRecipeBouquet>,
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

  async findAllByClient(id: number) {
    const data = await this.customerTypeRecipeBouquetRepository.find({
      select: ['id', 'receta_tipo_ramo_id', 'activo'],
      where: { cliente_id: id },
    });

    for (const key in data) {
      console.log('ID 1 => ', data[key].receta_tipo_ramo_id);
      const bouquetTypeRecipe = await this.bouquetTypeRecipeService
        .findAllByCustomerTypeRecipeBouquet(data[key].receta_tipo_ramo_id)
        .then((bouquetTypeRecipe) => {
          return bouquetTypeRecipe;
        });
      data[key]['descripcion'] = bouquetTypeRecipe[0]
        ? bouquetTypeRecipe[0].descripcion
        : null;

      console.log('bouquetTypeRecipe => ', bouquetTypeRecipe[0].descripcion);
    }

    return data;

    try {
      return await this.dataSource.query(
        `  SELECT rtr.*, tr.codigo as tipoRamo, gr.codigo as codigoGrado
         FROM cliente_receta_tipo_ramoa crtr
         INNER JOIN receta_tipo_ramo rtr ON rtr.id = crtr.receta_tipo_ramo_id
         INNER JOIN tipo_ramo tr ON tr.id = rtr.tipo_ramo_id
         INNER JOIN grado gr ON gr.id = crtr.grado_id
         WHERE crtr.cliente_id = ${id} AND rtr.activo = true`,
      );
    } catch (error) {
      throw new HttpException(
        `Ha ocurrido un error inesperado. Error: ${error}`,
        500,
      );
    }
  }
}
