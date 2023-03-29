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
    console.log("ID 2 => ", id);
    
    const data = await this.customerTypeRecipeBouquetRepository.find({
      select: ['descripcion'],
      where: { id: id },
    });
    console.log("DATA 2 => ", data);
    return  data
  }

  findOne(id: number) {
    return `This action returns a #${id} bouquetTypeRecipe`;
  }
}
