import { Injectable } from '@nestjs/common';
import {usuarios} from '../usuarios.model';

@Injectable()
export class UsuariosService {
listaUsuarios=[]
constructor (){
    let usuario= {
        id: 1,
        name:"Mario",
        apellido: "Bros"
    
    }
   
    this.listaUsuarios.push(usuario);

}
getUsuarios(){
    return this.listaUsuarios
}
getUsuariosById(id:number){
    return this.listaUsuarios.find(u=> u.id === id)
}
postUsuarios (nuevoUsuario: usuarios): string {
    this.listaUsuarios.push(nuevoUsuario)
    return nuevoUsuario.nombre;
}
putUsuarios(nuevosDatos:usuarios, userToUpdate: number): boolean {
const userToUpdateId: usuarios = this.listaUsuarios.find (m => m.id === userToUpdate);
if (userToUpdate != undefined){
    userToUpdateId.nombre = nuevosDatos.nombre;
    userToUpdateId.apellido = nuevosDatos.apellido;
    return true;
}
else
    return false;
}
deleteUsuarios(id:number):boolean{
    const indiceUsuarioAEliminar = this.listaUsuarios.findIndex ( u => u.id === id);
    if (indiceUsuarioAEliminar == -1)
    return false;
    this.listaUsuarios.splice ( indiceUsuarioAEliminar, 1);
    return true
}    
}
