import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  IsBoolean
} from 'class-validator';

export class User {
  @IsOptional()
  @IsNumber()
  @IsPositive()
  id?: number;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  empresa_id: number;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  empleado_id: number;
    
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  username: string;
    
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  username_canonical: string;
    
  @IsOptional()
  @IsNotEmpty()
  @IsBoolean()
  enabled: boolean;
    
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  salt: string;
    
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  password: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  last_login: Date;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  confirmation_token: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  password_requested_at: Date;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  roles: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  numero_identificacion: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  cargo: string;
    
  @IsOptional()
  @IsNotEmpty()
  @IsBoolean()
  firmante: boolean;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  telefono: string;
}
