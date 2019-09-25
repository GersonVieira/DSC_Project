import { Component, OnInit } from '@angular/core';
import { FilmesService } from '../services/filmes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-filme',
  templateUrl: './cadastro-filme.component.html',
  styleUrls: ['./cadastro-filme.component.css']
})
export class CadastroFilmeComponent implements OnInit {

  constructor(private serviceFilmes:FilmesService, private router:Router) {
    localStorage.setItem("header","Cadastrar Filme")
    if(localStorage.getItem("username")==null) router.navigate(['/login']);
   }

  ngOnInit() {
  }
  cadastrar(nome:string,imagem:string,categoria:string):void{
    this.serviceFilmes.adicionarFilme(nome,imagem,categoria);
    this.router.navigate(['']);
  }

}
