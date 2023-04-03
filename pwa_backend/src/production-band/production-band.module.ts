import { Module } from '@nestjs/common';
import { ProductionBandService } from './production-band.service';

@Module({
  providers: [ProductionBandService]
})
export class ProductionBandModule {}
