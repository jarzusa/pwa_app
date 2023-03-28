import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
@Entity('cliente_receta_tipo_ramo')
export class Recipe {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({
    type: 'integer',
    nullable: false,
  })
  cliente_id: number;

  @Column({
    type: 'integer',
    nullable: false,
  })
  receta_tipo_ramo_id: number;

  @Column({
    type: 'integer',
    nullable: false,
  })
  grado_id: number;

  @Column({
    type: 'integer',
    nullable: false,
  })
  usuario_crea_id: number;

  @Column({
    type: 'date',
    nullable: false,
  })
  fecha_crea: Date;

  @Column({
    type: 'boolean',
    nullable: false,
  })
  activo: boolean;
}
