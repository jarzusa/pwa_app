import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientService } from './client.service';
import { ClientController } from './client.controller';
import { Client } from './entities/client.entity';
import { Recipe } from 'src/recipe/entities/recipe.entity';
import { RecipeService } from 'src/recipe/recipe.service';

@Module({
  imports: [HttpModule, TypeOrmModule.forFeature([Client, Recipe])],
  controllers: [ClientController],
  providers: [ClientService, RecipeService],
})
export class ClientModule {}
