import {User} from './user'

export class Comentario{
    nome:string;
    imagemURL:string;
    texto:string;
    constructor( comentario: string, usuario:User){
            this.nome=usuario.nome;
            this.imagemURL=usuario.imagemURL;
            this.texto=comentario;
    }
    getTexto(): string{
        return this.texto;
    }
    getNome():string{
        return this.texto;
    }
    getData():string{
        return "ontem"
    }

    getImagem():string{
        return this.imagemURL;
    }

}