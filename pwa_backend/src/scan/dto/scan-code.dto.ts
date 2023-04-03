import { IsNumber, IsString, MinLength } from 'class-validator';

export class ScanCode {
  @IsString()
  @MinLength(11)
  serial: string;

  @IsNumber()
  usuario_id: string;

  @IsNumber()
  empresa_id: string;
}
