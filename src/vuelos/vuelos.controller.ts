import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ClienteProxyApiVuelos } from 'src/common/proxy/client.proxy';
import { VuelosDTO } from './dto/vuelos.dto';
import { Observable } from 'rxjs';
import { IVuelos } from './vuelos.interface';
import { VuelosMSG } from 'src/common/constants';

@Controller('vuelos')
export class VuelosController {
  constructor(private readonly clienteProxy: ClienteProxyApiVuelos) {}

  private _clienteProxyPassenger = this.clienteProxy.clienteProxysPassenger();

  @Post()
  insrtar(@Body() userDTO: VuelosDTO): Observable<IVuelos> {
    return this._clienteProxyPassenger.send(VuelosMSG.INSERTAR, userDTO);
  }

  @Get()
  todos(): Observable<IVuelos[]> {
    return this._clienteProxyPassenger.send(VuelosMSG.TODOS, '');
  }
  @Get(':id')
  uno(@Param() id: string): Observable<IVuelos> {
    return this._clienteProxyPassenger.send(VuelosMSG.UNO, id);
  }
  @Put(':id')
  actualizar(
    @Param('id') id: string,
    @Body() userDTO: VuelosDTO,
  ): Observable<any> {
    return this._clienteProxyPassenger.send(VuelosMSG.ACTUALIZAR, {
      id,
      userDTO,
    });
  }
  @Delete(':id')
  eliminar(@Param('id') id: string): Observable<any> {
    return this._clienteProxyPassenger.send(VuelosMSG.ELIMINAR, id);
  }
  @Post(':vueloId/passenger/:passengerId')
  async agragrPasajeros(
    @Param('vueloId') vueloId: string,
    @Param('passengerId') passengerId: string,
  ) {
    const pasajero = await this._clienteProxyPassenger.send(
      VuelosMSG.UNO,
      passengerId,
    );
    if (!pasajero)
      throw new HttpException('Passenger not found', HttpStatus.NOT_FOUND);
    return this._clienteProxyPassenger.send(VuelosMSG.INSERTAR_PASAJERO, {
      vueloId,
      passengerId,
    });
  }
}
