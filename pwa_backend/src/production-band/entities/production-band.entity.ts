import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
@Entity('banda_produccion')
export class ProductionBand {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({
    type: 'integer',
    nullable: false,
  })
  usuario_crea_id: number;

  @Column({
    type: 'integer',
    nullable: false,
  })
  usuario_modifica_id: number;

  @Column({
    type: 'integer',
    nullable: false,
  })
  usuario_banda_id: number;

  @Column({
    type: 'integer',
    nullable: false,
  })
  empresa_id: number;

  @Column({
    type: String,
    nullable: false,
    length: 255,
  })
  nombre: string;

  @Column({
    type: 'boolean',
    nullable: false,
  })
  activo: boolean;

  @Column({
    type: 'date',
    nullable: false,
  })
  fecha_crea: Date;

  @Column({
    type: 'date',
    nullable: false,
  })
  fecha_modifica: Date;
}
