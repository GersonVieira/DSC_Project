import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  nome = '';
  sobrenome = '';
  email = '';
  senha = '';
  confirmasenha = '';
  constructor() { }

  ngOnInit() {
  }

  valido() {

    return true;
  }

}
