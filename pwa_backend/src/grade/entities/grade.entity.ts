import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
@Entity('inventario_producto_terminado')
export class Grade {
  @PrimaryGeneratedColumn()
  id?: number;
}
