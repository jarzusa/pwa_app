import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientService } from './client.service';
import { ClientController } from './client.controller';
import { Client } from './entities/client.entity';
import { CustomerTypeRecipeBouquet } from 'src/recipe/entities/recipe.entity';
import { RecipeService } from 'src/recipe/recipe.service';
import { BouquetTypeRecipeService } from 'src/bouquet-type-recipe/bouquet-type-recipe.service';
import { BouquetTypeRecipe } from 'src/bouquet-type-recipe/entities/bouquet-type-recipe.entity';

@Module({
  imports: [HttpModule, TypeOrmModule.forFeature([Client, CustomerTypeRecipeBouquet, BouquetTypeRecipe])],
  controllers: [ClientController],
  providers: [ClientService, RecipeService, BouquetTypeRecipeService],
})
export class ClientModule {}
