import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.css']
})
export class FilmesComponent implements OnInit {
  asd:string;
  constructor() {
    this.asd='exterminador do futuro'
   }

  ngOnInit() {
  }

}
