import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { ProxyApiVuelosModule } from 'src/common/proxy/proxy.module';

@Module({
  imports: [ProxyApiVuelosModule],
  controllers: [UsersController],
})
export class UsersModule {}
