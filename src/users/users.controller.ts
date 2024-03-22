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
import { UserDTO } from './dto/user.dto';
import { Observable } from 'rxjs';
import { IUser } from './user.interface';
import { UserMSG } from 'src/common/constants';

@Controller('users')
export class UsersController {
  constructor(private readonly cleinteProxys: ClienteProxyApiVuelos) {}
  private _clienteProxyUser = this.cleinteProxys.clientPorxiesUsers();

  @Post()
  insrtar(@Body() userDTO: UserDTO): Observable<IUser> {
    return this._clienteProxyUser.send(UserMSG.INSERTAR, userDTO);
  }

  @Get()
  todos(): Observable<IUser[]> {
    return this._clienteProxyUser.send(UserMSG.TODOS, '');
  }
  @Get(':id')
  uno(@Param() id: string): Observable<IUser> {
    return this._clienteProxyUser.send(UserMSG.UNO, id);
  }
  @Put(':id')
  actualizar(
    @Param('id') id: string,
    @Body() userDTO: UserDTO,
  ): Observable<any> {
    return this._clienteProxyUser.send(UserMSG.ACTUALIZAR, { id, userDTO });
  }
  @Delete(':id')
  eliminar(@Param('id') id: string): Observable<any> {
    return this._clienteProxyUser.send(UserMSG.ELIMINAR, id);
  }
}
