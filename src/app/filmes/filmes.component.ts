import { Component, OnInit, Input } from '@angular/core';
import { Filme } from '../filme/filme.model';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.css']
})
export class FilmesComponent implements OnInit {
  @Input() filmes: Filme[];
  constructor() {
    AppComponent.setHeader('Filmes')
    this.filmes=[
      new Filme('O Exterminador'),
      new Filme('Dora Avemtireira'),
      new Filme('Crepusculo'),
      new Filme('Chaves'),
      new Filme('Vingadores'),
      new Filme('Jack'),
      new Filme('Homem-Aranha'),
      new Filme('Jovens Titans'),
      new Filme('Alto da compadecida')]
  }

  getFilmes(): Filme[]{
    return this.filmes;
  }
  ngOnInit() {
  }

}
