import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ClienteProxyApiVuelos } from 'src/common/proxy/client.proxy';
import { PassengerDTO } from './dto/passenger.dto';
import { Observable } from 'rxjs';
import { IPassenger } from './passenger.interface';
import { PassengerMSG } from 'src/common/constants';

@Controller('passenger')
export class PassengerController {
  constructor(private readonly clienteProxy: ClienteProxyApiVuelos) {}

  private _clienteProxyPassenger = this.clienteProxy.clienteProxysPassenger();

  @Post()
  insrtar(@Body() userDTO: PassengerDTO): Observable<IPassenger> {
    return this._clienteProxyPassenger.send(PassengerMSG.INSERTAR, userDTO);
  }

  @Get()
  todos(): Observable<IPassenger[]> {
    return this._clienteProxyPassenger.send(PassengerMSG.TODOS, '');
  }
  @Get(':id')
  uno(@Param() id: string): Observable<IPassenger> {
    return this._clienteProxyPassenger.send(PassengerMSG.UNO, id);
  }
  @Put(':id')
  actualizar(
    @Param('id') id: string,
    @Body() userDTO: PassengerDTO,
  ): Observable<any> {
    return this._clienteProxyPassenger.send(PassengerMSG.ACTUALIZAR, {
      id,
      userDTO,
    });
  }
  @Delete(':id')
  eliminar(@Param('id') id: string): Observable<any> {
    return this._clienteProxyPassenger.send(PassengerMSG.ELIMINAR, id);
  }
}
