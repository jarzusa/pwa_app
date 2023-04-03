import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
@Entity('inventario_producto_terminado')
export class Scan {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({
    type: String,
    nullable: false,
    length: 255,
  })
  serial: string;
}
