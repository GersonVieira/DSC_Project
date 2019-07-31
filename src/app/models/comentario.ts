export class Comentario{
    constructor(
        private idFilme:number,
        private comentario: string,
        private respostas: string[]){}
    
    getidFilme():number{
        return this.idFilme;
    }
    getComentario(): string{
        return this.comentario;
    }
    setComentario(comentarioEditado: string){
        this.comentario=comentarioEditado;
    }
    getResposta(): string[]{
        return this.respostas;
    }
    addResposta(novaResposta: string){
        this.respostas.push(novaResposta);
    }

}