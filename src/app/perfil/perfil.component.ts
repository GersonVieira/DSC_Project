import { Component, OnInit, Injectable } from '@angular/core';
import { UsuariosService } from '../services/usuarios.service';
import { Usuario } from '../models/usuario';
import { Filme } from '../filme/filme';
import { FilmesService } from '../services/filmes.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})

export class PerfilComponent implements OnInit {
  user:Usuario;
  favoritos:Filme[];
  constructor(protected service:UsuariosService, serviceF: FilmesService) {
    this.user = service.getUsuario(localStorage.getItem("username"));
    this.favoritos = serviceF.getFavoritos([1,2]);
  }
  ngOnInit() {
  }

}
