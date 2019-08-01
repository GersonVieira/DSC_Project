import {User} from './user'

export class Comentario{
    nome:string;
    imagemURL:string;
    texto:string;
    constructor( comentario: string, usuario:User){
            this.nome=usuario.getNome();
            this.imagemURL=usuario.getImagem();
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