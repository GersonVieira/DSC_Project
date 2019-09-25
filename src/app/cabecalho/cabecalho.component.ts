import { Component, OnInit } from '@angular/core';
import { AutenticadorService } from '../services/autenticador.service';
import { UsuariosService } from '../services/usuarios.service';
import { FilmesService } from '../services/filmes.service';
import { Test } from '../models/teste';
import { from } from 'rxjs';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent implements OnInit {
  nome:string;
  testes: Array<any>;
  novo: Array<any>;
  naoVazio:boolean;
  
  constructor(private service :UsuariosService,private testeService:FilmesService) { 
    
  }
  
  isLoggedIn():boolean{
    if(localStorage.getItem("username")!=null){
      return true
    }else{
      return false;
    }
  }

  imagemUser():string{
    return this.service.getUsuariologado().imagem;
    
  }
  asd:any;
  logOut():void{
    localStorage.removeItem("username");
    //console.log("aqui");

  }
  isManager():boolean{
    return true
  }

  ngOnInit() {
    this.testeService.adicionarTeste()
     
  }
 
 
  
}
