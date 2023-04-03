import { Module } from '@nestjs/common';
import { ScanService } from './scan.service';
import { ScanController } from './scan.controller';
import { HttpModule } from '@nestjs/axios';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Scan } from './entities/scan.entity';
import { ProductionBand } from 'src/production-band/entities/production-band.entity';
import { ProductionBandService } from 'src/production-band/production-band.service';

@Module({
  imports: [HttpModule, TypeOrmModule.forFeature([Scan, ProductionBand])],
  controllers: [ScanController],
  providers: [ScanService, ProductionBandService]
})
export class ScanModule {}
