import { Categoria } from '../models/categoria';

export class Filme {
     id: number;
     nome: string;
     sinopse: string;
     categorias:string;
     imagem: string;
    setId(id:number){
        this.id=id;
    }
    setNome(nome:string){
        this.nome=nome;
    }
    setSinopse(sinopse:string){
        this.sinopse=sinopse;
    }
    setCategorias(categorias:string){
        this.categorias=categorias;
    }
    setImagem(imagem:string){
    this.imagem=imagem;
    }
    getNome(): string{
        return this.nome;
    }
    getId(): number{
        return this.id;
    }
    getImagem(): string{
        return this.imagem;
    }
    getSinopse(): string{
        return this.sinopse;
    }
    getCategorias(): string{
        return this.categorias;
    }
}