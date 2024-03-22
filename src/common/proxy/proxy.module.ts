import { Module } from '@nestjs/common';
import { ClienteProxyApiVuelos } from './client.proxy';

@Module({
  providers: [ClienteProxyApiVuelos],
  exports: [ClienteProxyApiVuelos],
})
export class ProxyApiVuelosModule {}
