import { Component } from '@angular/core';
import { FilmesService } from './services/filmes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Projeto DSC';
  constructor(private serviceFilmes:FilmesService){
      this.serviceFilmes.getAll()
  }
}
