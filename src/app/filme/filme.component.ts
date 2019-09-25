import { Component, OnInit, Input } from '@angular/core';
import { Filme } from './filme';
import { FilmesService } from '../services/filmes.service';

@Component({
  selector: 'app-filme',
  templateUrl: './filme.component.html',
  styleUrls: ['./filme.component.css']
})
export class FilmeComponent implements OnInit {
@Input() filme:Filme;
  filmes:Filme[];
  constructor( protected service:FilmesService) { 
    this.filmes=service.getFilmes();
  }
  setIndex(index:number):void{
    this.service.setIndex(index)
  }
  getIndex():number{
    return this.service.getIndex();
  }
  ngOnInit() {
  }

}
