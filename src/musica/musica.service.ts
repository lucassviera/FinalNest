import { Injectable } from '@nestjs/common';
import {musica} from './musica.model';

@Injectable()
export class musicaService {

listaMusica=[]
constructor (){
    let musica : musica = {
        id: 1,
        nombre:"tan solo",
        apellido: "asjaja",
        artista: "los piojos"
    
    }
   
    this.listaMusica.push(musica);

}
getMusica(){
    return this.listaMusica
}
getmusicaById(id:number){
    return this.listaMusica.find(m=> m.id === id)
}
postmusica (nuevaMusica:musica): string {
    const mu = new musica();
    mu.id = nuevaMusica.id;
    mu.nombre = nuevaMusica.nombre;
    mu.apellido = nuevaMusica.apellido;
    mu.artista = nuevaMusica.artista;
    this.listaMusica.push(mu)
    return mu.nombre;
}
putmusica(nuevosDatos:musica, userToUpdate: number): boolean {
const musicToUpdateId: musica = this.listaMusica.find (m => m.id === musicToUpdateId);
if (userToUpdate != undefined){
    musicToUpdateId.nombre = nuevosDatos.nombre;
   musicToUpdateId.artista = nuevosDatos.artista;
    return true;
}
else
    return false;
}
deletemusica(id:number):boolean{
    const indiceMusicaAEliminar = this.listaMusica.findIndex ( m => m.id === id);
    if (indiceMusicaAEliminar == -1)
    return false;
    this.listaMusica.splice ( indiceMusicaAEliminar, 1);
    return true
}    
}
