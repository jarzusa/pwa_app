import { PartialType } from '@nestjs/mapped-types';
import { CreateBouquetTypeRecipeDto } from './create-bouquet-type-recipe.dto';

export class UpdateBouquetTypeRecipeDto extends PartialType(CreateBouquetTypeRecipeDto) {}
