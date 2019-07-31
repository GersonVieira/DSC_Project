import { Injectable } from "@angular/core";
import { Comentario } from '../models/comentario';

@Injectable()
export class ComentariosService {
    
    comentarios: Comentario[] = [
        new Comentario(1,"Otimo filme",["Sim, muito bom", "Concordo com vc, otimo atores"])
    ];

    comentariosDoFilme: Comentario[];
    getComentario(idFilme:number): Comentario[]{
        
        let array = this.comentarios;
        for (let item of array){
            if(item.getidFilme() == idFilme){
                this.comentariosDoFilme.push(item);
            }
        }
        return this.comentariosDoFilme;
    }
    addComentarioNoFilme(idFilme: number, comentarioNovo: string){
        this.comentarios.push(new Comentario(idFilme,comentarioNovo,[]);
    }
    addRespostaDoComentario(idFilme: number, respostaNova: string){

        let array = this.comentarios;
        for (let item of array){
            if(item.getidFilme() == idFilme){
                item.addResposta(respostaNova);
            }
        }
    }
}