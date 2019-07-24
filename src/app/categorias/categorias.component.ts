import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {
  corBotoes:string[];
  indexBotaoClick:number;
  constructor() { 
    this.corBotoes=['','','','','','','','','','',''];
    this.indexBotaoClick=-1;
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

  ngOnInit() {
  }

}
