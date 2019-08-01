import { Comentarios } from './comentarios';
import { Filme } from '../filme/filme';
import { User } from './user';

export class ComentariosFilmes{
    asd:number[];
    index:number;
    lista:Array<Comentarios>
    constructor(index:number){
        this.lista=new Array<Comentarios>();
        this.index=index;
    }
    getComentariosFilme():Array<Comentarios>{
        return this.lista;
    }
}