import {
  Controller,
  Post,
  Body,
} from '@nestjs/common';
import { ScanService } from './scan.service';
import { ScanCode } from './dto/scan-code.dto';

@Controller('scan')
export class ScanController {
  constructor(private readonly scanService: ScanService) {}

  @Post()
  create(@Body() bodyScan: ScanCode) {
    return this.scanService.scanCodeBouquet(bodyScan);
  }
}
