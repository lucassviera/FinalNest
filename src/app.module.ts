import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosController } from './usuarios/usuarios.controller';
import { UsuariosService } from './usuarios/usuarios.service';
import { MusicaController } from './musica/musica.controller';
import { musicaService } from './musica/musica.service';

@Module({
  imports: [],
  controllers: [AppController, UsuariosController, MusicaController],
  providers: [AppService, UsuariosService, musicaService],
})
export class AppModule {}
