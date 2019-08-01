import { Injectable } from "@angular/core";
import { Comentario } from '../models/comentario';
import { Comentarios } from '../models/comentarios';
import { User } from '../models/user';
import { ComentariosFilmes } from '../models/comentariosFilme';

@Injectable()
export class ComentariosService {
    asd:number[]
    comentarios:Array<ComentariosFilmes>;
    constructor(){
        this.comentarios=new Array<ComentariosFilmes>();
        this.comentarios.push(new ComentariosFilmes(0));
        this.comentarios.push(new ComentariosFilmes(1));
        this.comentarios.push(new ComentariosFilmes(2));
        this.comentarios.push(new ComentariosFilmes(3));
        this.comentarios.push(new ComentariosFilmes(4));
        this.comentarios.push(new ComentariosFilmes(5));
        this.comentarios.push(new ComentariosFilmes(6));
        this.comentarios.push(new ComentariosFilmes(7));
        this.comentarios.push(new ComentariosFilmes(8));
        
    }
    getComentarios(idFilme:number):Array<Comentarios>{
        return this.comentarios[idFilme].getComentariosFilme();
    }
}