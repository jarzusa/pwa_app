import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecipeService } from './recipe.service';
import { RecipeController } from './recipe.controller';
import { CustomerTypeRecipeBouquet } from './entities/recipe.entity';
import { BouquetTypeRecipeService } from 'src/bouquet-type-recipe/bouquet-type-recipe.service';
import { BouquetTypeRecipe } from 'src/bouquet-type-recipe/entities/bouquet-type-recipe.entity';

@Module({
  imports: [HttpModule, TypeOrmModule.forFeature([CustomerTypeRecipeBouquet, BouquetTypeRecipe])],
  controllers: [RecipeController],
  providers: [RecipeService, BouquetTypeRecipeService]
})
export class RecipeModule {}
