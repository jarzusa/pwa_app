import { Module } from '@nestjs/common';
import { FinishedProductInventoryService } from './finished-product-inventory.service';
import { FinishedProductInventoryController } from './finished-product-inventory.controller';
import { HttpModule } from '@nestjs/axios';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FinishedProductInventory } from './entities/finished-product-inventory';

@Module({
  imports: [HttpModule, TypeOrmModule.forFeature([FinishedProductInventory])],
  controllers: [FinishedProductInventoryController],
  providers: [FinishedProductInventoryService]
})
export class FinishedProductInventoryModule {}
