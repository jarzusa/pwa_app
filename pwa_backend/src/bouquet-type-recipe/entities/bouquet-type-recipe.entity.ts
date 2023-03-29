import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
@Entity('receta_tipo_ramo')
export class BouquetTypeRecipe {
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
  tipo_ramo_id: number;

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
    type: String,
    nullable: false,
    length: 255,
  })
  descripcion: string;

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

  @Column({
    type: 'boolean',
    nullable: false,
  })
  activo: boolean;

  @Column({
    type: 'integer',
    nullable: false,
  })
  color_id: number;
}
