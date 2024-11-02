import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import {UsuariosService} from './usuarios.service';
import {usuarios} from '../usuarios.model';

@Controller('usuario')
export class UsuariosController {
constructor(private readonly service: UsuariosService) {} 

@Get()
getUsuarios(){
    return this.service.getUsuarios();
}
@Get(":id")
getUsuariossByid(@Param ('id') id: number) {
    return this.service.getUsuariosById (Number(id));
}

@Post()
postUsuario(@Body()nuevoUsuario: usuarios){
    return this.service.postUsuarios(nuevoUsuario);
}
@Put(':id')
putUsuarios(@Body() nuevosDatos: usuarios, @Param("id") id: string):boolean{
    return this.service.putUsuarios(nuevosDatos, Number (id));
}
@Delete(':id')
deleteUsuarios (@Param ("id") id:string): boolean {
    return this.service.deleteUsuarios( Number (id));
}
    
}
