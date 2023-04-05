import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
@Entity('inventario_producto_terminado')
export class FinishedProductInventory {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({
    type: 'integer',
    nullable: false,
  })
  variedad_id: number;

  @Column({
    type: 'integer',
    nullable: false,
  })
  grado_id: number;

  @Column({
    type: 'integer',
    nullable: false,
  })
  tipo_ramo_id: number;

  @Column({
    type: 'integer',
    nullable: false,
  })
  usuario_id: number;

  @Column({
    type: 'integer',
    nullable: false,
  })
  producto_id: number;

  @Column({
    type: 'integer',
    nullable: false,
  })
  color_id: number;

  @Column({
    type: 'date',
    nullable: false,
  })
  fecha_ingreso: Date;

  @Column({
    type: 'integer',
    nullable: false,
  })
  ramos: number;

  @Column({
    type: 'integer',
    nullable: false,
  })
  tallos_ramo: number;

  @Column({
    type: 'boolean',
    nullable: false,
  })
  activo: boolean;

  @Column({
    type: 'integer',
    nullable: false,
  })
  empresa_id: number;

  @Column({
    type: 'date',
    nullable: false,
  })
  fecha_usuario: Date;

  @Column({
    type: String,
    nullable: false,
    length: 255,
  })
  descripcion: string;

  @Column({
    type: 'integer',
    nullable: false,
  })
  cliente_id: number;

  @Column({
    type: 'integer',
    nullable: false,
  })
  empleado_bonchador_id: number;

  @Column({
    type: 'integer',
    nullable: false,
  })
  mesa_sala_id: number;

  @Column({
    type: 'integer',
    nullable: true,
  })
  saldo_ramos: number;

  @Column({
    type: 'longtext',
    nullable: true,
  })
  historia: string;

  @Column({
    type: 'integer',
    nullable: true,
  })
  producto_padre_id: number;

  @Column({
    type: 'integer',
    nullable: true,
  })
  receta_tipo_ramo_id: number;

  @Column({
    type: String,
    nullable: false,
    length: 255,
  })
  serial: string;

  @Column({
    type: 'json',
    nullable: true,
  })
  receta: string;

  @Column({
    type: 'integer',
    nullable: false,
  })
  banda_produccion_id: number;
}
