import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BouquetTypeRecipeService } from './bouquet-type-recipe.service';
import { CreateBouquetTypeRecipeDto } from './dto/create-bouquet-type-recipe.dto';
import { UpdateBouquetTypeRecipeDto } from './dto/update-bouquet-type-recipe.dto';

@Controller('bouquet-type-recipe')
export class BouquetTypeRecipeController {
  constructor(private readonly bouquetTypeRecipeService: BouquetTypeRecipeService) {}

  @Get()
  findAll() {
    return this.bouquetTypeRecipeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bouquetTypeRecipeService.findOne(+id);
  }
}
