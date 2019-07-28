import { Component, OnInit, Input, Output } from '@angular/core';
import { Filme } from './filme';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filme',
  templateUrl: './filme.component.html',
  styleUrls: ['./filme.component.css']
})
export class FilmeComponent implements OnInit {
@Input() @Output() filme:Filme;
router:Router;

  constructor() { }
  detalhe(){
    this.router.navigate(['/detalhefilm', this.filme.getId()],{queryParams: this.filme})
  }
  ngOnInit() {
  }

}
