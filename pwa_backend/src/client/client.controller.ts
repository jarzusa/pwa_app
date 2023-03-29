import {
  Controller,
  Get,
  InternalServerErrorException,
  Param,
  Query,
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
  async findAll(@Query('text') text: string) {
    return await this.clientService.findAll(text);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clientService.findOne(+id);
  }
}
