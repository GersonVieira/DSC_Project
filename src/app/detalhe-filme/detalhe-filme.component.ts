import { Component, OnInit, Input } from '@angular/core';
import { Filme } from '../filme/filme';

@Component({
  selector: 'app-detalhe-filme',
  templateUrl: './detalhe-filme.component.html',
  styleUrls: ['./detalhe-filme.component.css']
})
export class DetalheFilmeComponent implements OnInit {
  @Input() filme:Filme;
  constructor() { }

  ngOnInit() {
  }

}
