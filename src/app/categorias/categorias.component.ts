import { Component, OnInit } from '@angular/core';
import { Categoria } from '../models/categoria';
import { CategoriaService } from '../services/categoria.service';
import { FilmesService } from '../services/filmes.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {
  
  
  constructor(protected service:CategoriaService,protected service2:FilmesService) { 
    
  }
  mudarCorBotao(indexBotao:number):void{
    this.service.mudarCorBotao(indexBotao)
  }

  getCategorias(): Categoria[]{
    return this.service.getCategorias();
  }

  getCorBotao(index:number):string{
    
    return this.service.getCorBotao(index);
    
    
  }
  setCategoriaEscolhida(categoria:string):void{
    this.service2.setCategoriaDefaut(categoria);
  }

  ngOnInit() {
  }

}
