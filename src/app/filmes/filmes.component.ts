import { Component, OnInit } from '@angular/core';
import { Filme } from '../filme/filme';
import { FilmesService } from '../services/filmes.service';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.css']
})
export class FilmesComponent implements OnInit {
  filmes:Filme[];
  constructor(protected service: FilmesService) {
    this.filmes = service.getFilmes();
  }
  getFilmes(): Filme[]{
    return this.filmes;
  }
  getFilmesPorCategoria():Filme[]{
    return this.service.getFilmesPorCategoria();
  }
  

  ngOnInit() {
  }

}
