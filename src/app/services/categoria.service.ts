import { Injectable } from '@angular/core';
import { Categoria } from '../models/categoria';

@Injectable()
export class CategoriaService{
    corBotoes:string[]=['blue','','','','','','','','','',''];
    indexBotaoClick:number=0;
    categorias:Categoria[]= [
        new Categoria("Todos"),
        new Categoria("Ação"),
        new Categoria("Animação"),
        new Categoria("Aventura"),
        new Categoria("Clássico"),
        new Categoria("Comédia"),
        new Categoria("Drama"),
        new Categoria("Especiais"),
        new Categoria("Romance"),
        new Categoria("Suspense"),
        new Categoria("Terror") ];
    mudarCorBotao(indexBotao:number):void{
        if(this.indexBotaoClick<0){
            this.corBotoes[indexBotao]='blue'
            this.indexBotaoClick=indexBotao;
        
        }else{
            this.corBotoes[this.indexBotaoClick]='';
            this.indexBotaoClick=indexBotao;
            this.corBotoes[indexBotao]='blue';
        }
    }
        
    getCategorias(): Categoria[]{
        return this.categorias;
    }

    getCorBotao(index:number):string{
        return this.corBotoes[index]
    }
    
    

}

