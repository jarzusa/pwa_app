import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductionBandService {
  findAll() {
    return `This action returns all productionBand`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productionBand`;
  }
}
