import { IsNumber, IsString, MinLength } from 'class-validator';

export class ScanCode {
  @IsString()
  @MinLength(11)
  serial: string;

  @IsNumber()
  usuario_id: number;

  @IsNumber()
  empresa_id: number;

  @IsNumber()
  cliente_id: number;

  @IsNumber()
  receta_tipo_ramo_id: number;

  @IsNumber()
  grado_id: number;

  @IsNumber()
  tipo_ramo_id: number;
}
