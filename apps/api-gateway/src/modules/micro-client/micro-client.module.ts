import { Module } from '@nestjs/common';
import {
  MicroUserService,
  MicroNotificatonService,
  MicroPaymentService,
} from './services';

@Module({
  controllers: [],
  providers: [MicroUserService, MicroPaymentService, MicroNotificatonService],
})
export class MicroClientModule {}
