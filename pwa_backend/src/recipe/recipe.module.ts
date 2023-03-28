import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecipeService } from './recipe.service';
import { RecipeController } from './recipe.controller';
import { Recipe } from './entities/recipe.entity';

@Module({
  imports: [HttpModule, TypeOrmModule.forFeature([Recipe])],
  controllers: [RecipeController],
  providers: [RecipeService]
})
export class RecipeModule {}
