import { Module } from '@nestjs/common';
import { VuelosController } from './vuelos.controller';
import { ProxyApiVuelosModule } from 'src/common/proxy/proxy.module';

@Module({
  imports: [ProxyApiVuelosModule],
  controllers: [VuelosController],
})
export class VuelosModule {}
