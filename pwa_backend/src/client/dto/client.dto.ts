import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  IsBoolean,
} from 'class-validator';

export class ClientDto {
  @IsOptional()
  @IsNumber()
  @IsPositive()
  id?: number;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  cliente_padre_id: number;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  pais_id: number;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  ciudad_id: number;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  forma_de_pago_id: number;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  nit: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  direccion: string;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  cupo_credito: number;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  plazo_cartera: number;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  telefono: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  email: string;

  @IsOptional()
  @IsNotEmpty()
  @IsBoolean()
  proveedor: boolean;

  @IsOptional()
  @IsNotEmpty()
  @IsBoolean()
  cobrar_caja: boolean;

  @IsOptional()
  @IsNotEmpty()
  @IsBoolean()
  bloqueo_cartera: boolean;

  @IsOptional()
  @IsNotEmpty()
  @IsBoolean()
  activo: boolean;

  @IsOptional()
  @IsNotEmpty()
  @IsBoolean()
  ver_en_etiqueta: boolean;

  @IsOptional()
  @IsNotEmpty()
  @IsBoolean()
  komet: boolean;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  tokens: string;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  tarifa_iva: number;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  tarifa_retencion: number;

  @IsOptional()
  @IsNotEmpty()
  @IsBoolean()
  notas_factura: boolean;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  comercial: string;

  @IsOptional()
  @IsNotEmpty()
  @IsBoolean()
  precio_fijo: boolean;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  procedencia: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  registro_ica: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  vencimiento: Date;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  notas_text: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  payment_method: string;

  @IsOptional()
  @IsNotEmpty()
  @IsBoolean()
  cal_peso: boolean;

  @IsOptional()
  @IsNotEmpty()
  @IsBoolean()
  precio_automatico: boolean;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  icoterms: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  direccion_entrega: string;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  aerolinea_id: number;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  agencia_c_id: number;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  aeropuerto_origen_id: number;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  aeropuerto_destino_id: number;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  dpto_seguridad: string;
}
