import { Module } from '@nestjs/common';
import { ScanService } from './scan.service';
import { ScanController } from './scan.controller';
import { HttpModule } from '@nestjs/axios';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Scan } from './entities/scan.entity';
import { ProductionBand } from 'src/production-band/entities/production-band.entity';
import { ProductionBandService } from 'src/production-band/production-band.service';
import { FinishedProductInventory } from 'src/finished-product-inventory/entities/finished-product-inventory';
import { FinishedProductInventoryService } from '../finished-product-inventory/finished-product-inventory.service';

@Module({
  imports: [HttpModule, TypeOrmModule.forFeature([Scan, ProductionBand, FinishedProductInventory])],
  controllers: [ScanController],
  providers: [ScanService, ProductionBandService, FinishedProductInventoryService]
})
export class ScanModule {}
