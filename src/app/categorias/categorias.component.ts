import { Component, OnInit } from '@angular/core';
import { Categoria } from '../models/categoria';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {
  corBotoes:string[];
  indexBotaoClick:number;
  categorias: Categoria[];
  constructor() { 
    this.corBotoes=['','','','','','','','','','',''];
    this.indexBotaoClick=-1;
    this.categorias= [
      new Categoria("Todos"),
      new Categoria("Ação"),
      new Categoria("Animação"),
      new Categoria("Aventura"),
      new Categoria("Clássico"),
      new Categoria("Comédia"),
      new Categoria("Drama"),
      new Categoria("Especiais"),
      new Categoria("Romance"),
      new Categoria("Suspence"),
      new Categoria("Terror")
    ];
  }
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

  ngOnInit() {
  }

}
