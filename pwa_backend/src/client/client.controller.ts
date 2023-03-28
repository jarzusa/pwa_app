import {
  Controller,
  Get,
  InternalServerErrorException,
  Param,
} from '@nestjs/common';
import { ClientService } from './client.service';
import { RecipeService } from '../recipe/recipe.service';

@Controller('client')
export class ClientController {
  constructor(
    private readonly clientService: ClientService,
    private readonly recipeService: RecipeService,
  ) {}

  @Get()
  async findAll() {
    return await this.clientService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clientService.findOne(+id);
  }
}
