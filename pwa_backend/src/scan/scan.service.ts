import { Injectable, HttpException } from '@nestjs/common';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { ScanCode } from './dto/scan-code.dto';
import { Scan } from './entities/scan.entity';
import { HttpStatusCode } from 'axios';
import { deserialize_serial } from '../serial-validation';
import { date_formatted } from '../date-formatted';
import { ProductionBand } from 'src/production-band/entities/production-band.entity';
import { FinishedProductInventory } from 'src/finished-product-inventory/entities/finished-product-inventory';

@Injectable()
export class ScanService {
  @InjectDataSource()
  private readonly dataSource: DataSource;

  @InjectRepository(Scan)
  private scanRepository: Repository<Scan>;

  @InjectRepository(ProductionBand)
  private bandProductionRepository: Repository<ProductionBand>;

  @InjectRepository(FinishedProductInventory)
  private finishedProductInventoryRepository: Repository<FinishedProductInventory>;

  async scanCodeBouquet(bodyScan: ScanCode) {
    let message = 'Codigo escaneado correctamente';
    let status = 200;
    let serial_destructured = {} as
      | {
          mesa_sala_id: number;
          grado_id: number;
          numero_identificacion_empleado: number;
        }
      | boolean;
    try {
      serial_destructured = await deserialize_serial(bodyScan?.serial);

      if (!serial_destructured) {
        message = 'Código invalido..';
        status = 404;
      } else {
        const serial = await this.scanRepository.find({
          where: { serial: bodyScan.serial },
        });

        if (serial.length > 0) {
          message = 'Codigo ya fue escaneado';
          status = 404;
        }

        const { mesa_sala_id, grado_id, numero_identificacion_empleado } =
          serial_destructured;

        const mesa_sala_asignada = await this.dataSource.query(
          `SELECT mse.*
          FROM empleado e
          INNER JOIN mesa_sala_empleado mse ON e.id = mse.empleado_id
          WHERE e.numero_identificador = '${numero_identificacion_empleado}' 
          AND mse.mesa_sala_id = ${mesa_sala_id}
          AND e.activo = 1 
          AND e.empresa_id = ${bodyScan.empresa_id}
          LIMIT 1`,
        );

        // console.log(mesa_sala_asignada[0].empleado_id);

        // if (mesa_sala_asignada.length > 0) {

        // const insert = await this.finishedProductInventoryRepository
        //   .save({
        //     grado_id: grado_id,
        //     tipo_ramo_id: bodyScan.tipo_ramo_id,
        //     usuario_id: Number(process.env.USUARIO_ID),
        //     empresa_id: Number(process.env.EMPRESA_ID),
        //     empleado_bonchador_id: mesa_sala_asignada[0].empleado_id,
        //     mesa_sala_id: mesa_sala_id,
        //     cliente_id: bodyScan.cliente_id,
        //     producto_padre_id: null,
        //     fecha_ingreso: date_formatted(),
        //     ramos: 24,
        //     tallos_ramo: 12,
        //     activo: true,
        //     fecha_usuario: date_formatted(),
        //     descripcion: '',
        //     receta_tipo_ramo_id: bodyScan.receta_tipo_ramo_id,
        //     serial: bodyScan.serial,
        //     banda_produccion_id: Number(process.env.BANDA_ID),
        //   })
        //   .then((response) => {
        //     return response;
        //   })
        //   .catch((error) => {
        //     message = `Error al insertar padre ${error}`;
        //     status = 500;
        //   });

        const products = await this.dataSource.query(
          `SELECT * FROM receta_producto_tipo_ramo
           WHERE receta_tipo_ramo_id = ${bodyScan.receta_tipo_ramo_id}`,
        );

        if (products.length > 0) {
          console.log('Entre-----------');

          // Producto padre
          const producto_padre = products.filter(
            (item: { producto_padre_id: any }) =>
              item.producto_padre_id === null,
          )[0];

          // Productos hijos
          const productos_hijos = products.filter(
            (item: { producto_padre_id: any }) =>
              item.producto_padre_id !== null,
          );

          console.log(producto_padre);
        } else {
          console.log('No Entre-----------');
        }

        console.log('CHILDS => ', products);

        // if (insert !== undefined) {
        //   message = `Registro insertado correctamente`;
        //   status = 200;

        //   console.log(
        //     '--------------------------------------------------------------',
        //   );
        //   console.log('INSERT => ', insert);

        //   childs.map((child) => {
        //     // const createdChild = this.insertChilds(
        //     //   child,
        //     //   grado_id,
        //     //   bodyScan,
        //     //   mesa_sala_asignada[0],
        //     //   mesa_sala_id,
        //     // ).then((response) => {
        //     //   return response;
        //     // });

        //     console.log("CHILD => ",child);
        //   });
        // }

        // } else {
        //   message = 'El empleado boncachor no tiene asignada esta mesa';
        //   status = 404;
        // }

        // const banda = await this.bandProductionRepository.findOneBy({
        //   usuario_banda_id: Number(bodyScan.usuario_id),
        // });

        // if (!banda) {
        //   message = 'No tiene banda de produccion asignada el usuario';
        //   status = 404;
        // }
      }
    } catch (error) {
      message = `Error: ${error}`;
      status = 500;
    }

    throw new HttpException(
      {
        message: `${message}`,
        serial_valid: serial_destructured,
      },
      status,
    );
  }

  async insertChilds(
    child,
    grado_id,
    bodyScan,
    mesa_sala_asignada,
    mesa_sala_id,
  ) {
    return await this.finishedProductInventoryRepository.save({
      grado_id: grado_id,
      tipo_ramo_id: bodyScan.tipo_ramo_id,
      usuario_id: Number(process.env.USUARIO_ID),
      empresa_id: Number(process.env.EMPRESA_ID),
      empleado_bonchador_id: mesa_sala_asignada.empleado_id,
      mesa_sala_id: mesa_sala_id,
      cliente_id: bodyScan.cliente_id,
      producto_padre_id: null,
      fecha_ingreso: date_formatted(),
      ramos: 24,
      tallos_ramo: 12,
      activo: true,
      fecha_usuario: date_formatted(),
      descripcion: '',
      receta_tipo_ramo_id: bodyScan.receta_tipo_ramo_id,
      serial: bodyScan.serial,
      banda_produccion_id: Number(process.env.BANDA_ID),
    });
  }
}
