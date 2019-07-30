import { Router } from '@angular/router';
import { Categoria } from '../models/categoria';

export class Filme {
    private router: Router;
    constructor(private nome: string,private sinopse: string, private categorias:Categoria[],private imagem: string, private id: number ){
        
    }

    public getNome(): string{
        return this.nome;
    }
    public getId(): number{
        return this.id;
    }
    public getImagem(): string{
        return this.imagem;
    }
    public getSinopse(): string{
        return this.sinopse;
    }
    public getCategorias(): Categoria[]{
        return this.categorias;
    }
}