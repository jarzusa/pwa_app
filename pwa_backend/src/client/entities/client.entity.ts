import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
@Entity('cliente')
export class Client {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({
    type: 'integer',
    nullable: false,
  })
  cliente_padre_id: number;

  @Column({
    type: 'integer',
    nullable: false,
  })
  pais_id: number;

  @Column({
    type: 'integer',
    nullable: false,
  })
  ciudad_id: number;

  @Column({
    type: 'integer',
    nullable: false,
  })
  forma_de_pago_id: number;

  @Column({
    type: String,
    nullable: false,
    length: 255,
  })
  nit: string;

  @Column({
    type: String,
    nullable: false,
    length: 255,
  })
  nombre: string;

  @Column({
    type: String,
    nullable: false,
    length: 255,
  })
  direccion: string;

  @Column({
    type: 'integer',
    nullable: false,
  })
  cupo_credito: number;

  @Column({
    type: 'integer',
    nullable: false,
  })
  plazo_cartera: number;

  @Column({
    type: String,
    nullable: false,
    length: 255,
  })
  telefono: string;

  @Column({
    type: String,
    nullable: false,
    length: 255,
  })
  email: string;

  @Column({
    type: 'boolean',
    nullable: false,
  })
  proveedor: boolean;

  @Column({
    type: 'boolean',
    nullable: false,
  })
  cobrar_caja: boolean;

  @Column({
    type: 'boolean',
    nullable: false,
  })
  bloqueo_cartera: boolean;

  @Column({
    type: 'boolean',
    nullable: false,
  })
  activo: boolean;

  @Column({
    type: 'boolean',
    nullable: false,
  })
  ver_en_etiqueta: boolean;

  @Column({
    type: 'boolean',
    nullable: false,
  })
  komet: boolean;

  @Column({
    type: 'longtext',
    nullable: false,
  })
  tokens: string;

  @Column({
    type: 'double',
    nullable: false,
  })
  tarifa_iva: number;

  @Column({
    type: 'double',
    nullable: false,
  })
  tarifa_retencion: number;

  @Column({
    type: 'boolean',
    nullable: false,
  })
  notas_factura: boolean;

  @Column({
    type: String,
    nullable: false,
    length: 255,
  })
  comercial: string;

  @Column({
    type: 'boolean',
    nullable: false,
  })
  precio_fijo: boolean;

  @Column({
    type: String,
    nullable: false,
    length: 255,
  })
  procedencia: string;

  @Column({
    type: String,
    nullable: false,
    length: 255,
  })
  registro_ica: string;

  @Column({
    type: 'date',
    nullable: false,
  })
  vencimiento: Date;

  @Column({
    type: String,
    nullable: false,
    length: 255,
  })
  notas_text: string;

  @Column({
    type: String,
    nullable: false,
    length: 255,
  })
  payment_method: string;

  @Column({
    type: 'boolean',
    nullable: false,
  })
  cal_peso: boolean;

  @Column({
    type: 'boolean',
    nullable: false,
  })
  precio_automatico: boolean;

  @Column({
    type: String,
    nullable: false,
    length: 255,
  })
  icoterms: string;

  @Column({
    type: 'longtext',
    nullable: false,
  })
  direccion_entrega: string;

  @Column({
    type: 'integer',
    nullable: false,
  })
  aerolinea_id: number;

  @Column({
    type: 'integer',
    nullable: false,
  })
  agencia_c_id: number;

  @Column({
    type: 'integer',
    nullable: false,
  })
  aeropuerto_origen_id: number;

  @Column({
    type: 'integer',
    nullable: false,
  })
  aeropuerto_destino_id: number;

  @Column({
    type: String,
    nullable: false,
    length: 255,
  })
  dpto_seguridad: string;
}
