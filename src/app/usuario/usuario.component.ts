import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  nome;
  sobrenome;
  email;
  senha;
  favoritos = [];
  seguindo = [];
  seguidores = [];
  constructor() {}

  UsuarioComponent(nome, sobrenome, email, senha) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.email = email;
    this.senha = senha;
  }

  ngOnInit() {
  }

}
