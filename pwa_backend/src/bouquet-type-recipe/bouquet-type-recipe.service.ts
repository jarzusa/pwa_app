import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BouquetTypeRecipe } from './entities/bouquet-type-recipe.entity';

@Injectable()
export class BouquetTypeRecipeService {
  constructor(
    @InjectRepository(BouquetTypeRecipe)
    private customerTypeRecipeBouquetRepository: Repository<BouquetTypeRecipe>,
  ) {}

  findAll() {
    return `This action returns all bouquetTypeRecipe`;
  }

  async findAllByCustomerTypeRecipeBouquet(id: number) {
    const data = await this.customerTypeRecipeBouquetRepository.find({
      select: ['descripcion', 'tipo_ramo_id'],
      where: { id: id },
    });
    return data;
  }

  findOne(id: number) {
    return `This action returns a #${id} bouquetTypeRecipe`;
  }
}
