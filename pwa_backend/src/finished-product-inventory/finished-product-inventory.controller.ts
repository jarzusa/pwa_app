import { Controller } from '@nestjs/common';
import { FinishedProductInventoryService } from './finished-product-inventory.service';

@Controller('finished-product-inventory')
export class FinishedProductInventoryController {
  constructor(private readonly finishedProductInventoryService: FinishedProductInventoryService) {}
}
