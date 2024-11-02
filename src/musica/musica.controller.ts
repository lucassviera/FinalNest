import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

import {musica} from './musica.model';
import { musicaService } from './musica.service';


@Controller('musica')
export class MusicaController {
constructor(private readonly service: musicaService) {} 


@Get()
getmusica(){
return this.service.getMusica();
}
@Get(":id")
getmusicaByid(@Param ('id') id: number) {
    return this.service.getmusicaById (Number(id));
}

@Post()
postmusica( @Body() nuevaMusica : musica ){
    return this.service.postmusica(nuevaMusica);
}
@Put(':id')
putmusica(@Body() nuevosDatos: musica, @Param("id") id: string):boolean{
    return this.service.putmusica(nuevosDatos, Number (id));
}
@Delete(':id')
deletemusica (@Param ("id") id:string): boolean {
    return this.service.deletemusica( Number (id));
}
    
}
