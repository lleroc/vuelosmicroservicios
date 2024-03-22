import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { PassengerModule } from './passenger/passenger.module';
import { VuelosModule } from './vuelos/vuelos.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['env.development'],
      isGlobal: true,
    }),
    UsersModule,
    PassengerModule,
    VuelosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
