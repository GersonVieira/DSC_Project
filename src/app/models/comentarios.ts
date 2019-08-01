import { Comentario } from './comentario';
import { User } from './user'
export class Comentarios{
    lista:Array<Comentario>;
    texto:string
    nome:string;
    imagemURL:string;
    asd:number[]
    constructor(comentario:string,usuario:User){
        
        this.texto=comentario;
        this.nome=usuario.getNome();
        this.imagemURL=usuario.getImagem();
        this.lista=new Array<Comentario>();
        }
    getTexto():string{
        return this.texto;
    }
    getNome():string{
        return this.nome;
    }
    getImagem(){
        return this.imagemURL;
    }
    getHora():string{
        return "hoje"
    }

    getComentarios():Array<Comentario>{
        return this.lista;
    }

    addComentario(texto:string,usuario:User){
        this.lista.push(new Comentario(texto,usuario));
    }

}