import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('fos_user')
export class User {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({
    type: 'integer',
    nullable: false,
  })
  empresa_id: number;

  @Column({
    type: 'integer',
    nullable: false,
  })
  empleado_id: number;

  @Column({
    type: String,
    nullable: false,
    length: 255,
  })
  username: string;

  @Column({
    type: String,
    nullable: false,
    length: 255,
  })
  username_canonical: string;

  @Column({
    type: 'boolean',
    nullable: false,
  })
  enabled: boolean;

  @Column({
    type: String,
    nullable: false,
    length: 255,
  })
  salt: string;

  @Column({
    type: String,
    nullable: false,
    length: 255,
  })
  password: string;

  @Column({
    type: 'date',
    nullable: false,
  })
  last_login: Date;

  @Column({
    type: String,
    nullable: false,
    length: 255,
  })
  confirmation_token: string;

  @Column({
    type: 'date',
    nullable: false,
  })
  password_requested_at: Date;

  @Column({
    type: 'longtext',
    nullable: false,
  })
  roles: string;

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
  numero_identificacion: string;

  @Column({
    type: String,
    nullable: false,
    length: 255,
  })
  cargo: string;

  @Column({
    type: 'boolean',
    nullable: false,
  })
  firmante: boolean;

  @Column({
    type: String,
    nullable: false,
    length: 255,
  })
  telefono: string;
}
