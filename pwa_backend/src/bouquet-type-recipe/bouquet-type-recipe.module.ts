import { Module } from '@nestjs/common';
import { BouquetTypeRecipeService } from './bouquet-type-recipe.service';
import { BouquetTypeRecipeController } from './bouquet-type-recipe.controller';
import { HttpModule } from '@nestjs/axios';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BouquetTypeRecipe } from './entities/bouquet-type-recipe.entity';

@Module({
  imports: [HttpModule, TypeOrmModule.forFeature([BouquetTypeRecipe])],
  controllers: [BouquetTypeRecipeController],
  providers: [BouquetTypeRecipeService],
  exports: [BouquetTypeRecipeService],
})
export class BouquetTypeRecipeModule {}
