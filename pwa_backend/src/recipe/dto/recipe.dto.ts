import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  IsBoolean,
} from 'class-validator';

export class RecipeDto {
  @IsOptional()
  @IsNumber()
  @IsPositive()
  id?: number;
}
