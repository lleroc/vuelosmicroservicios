import { Module } from '@nestjs/common';
import { PassengerController } from './passenger.controller';
import { ProxyApiVuelosModule } from 'src/common/proxy/proxy.module';

@Module({
  imports: [ProxyApiVuelosModule],
  controllers: [PassengerController],
})
export class PassengerModule {}
