import { Injectable, HttpException } from '@nestjs/common';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { ScanCode } from './dto/scan-code.dto';
import { Scan } from './entities/scan.entity';
import { HttpStatusCode } from 'axios';
import { deserialize_serial } from '../serial-validation';
import { ProductionBand } from 'src/production-band/entities/production-band.entity';

@Injectable()
export class ScanService {
  @InjectDataSource()
  private readonly dataSource: DataSource;

  @InjectRepository(Scan)
  private scanRepository: Repository<Scan>;

  @InjectRepository(ProductionBand)
  private bandProductionRepository: Repository<ProductionBand>;

  async scanCodeBouquet(bodyScan: ScanCode) {
    let message = 'Codigo escaneado correctamente';
    let status = 200;
    let serial_destructured = {};
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

        const banda = await this.bandProductionRepository.findOneBy({
          usuario_banda_id: Number(bodyScan.usuario_id),
        });

        if (!banda) {
          message = 'No tiene banda de produccion asignada el usuario';
          status = 404;
        }
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
}
