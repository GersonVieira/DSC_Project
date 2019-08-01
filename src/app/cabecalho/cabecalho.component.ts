import { Component, OnInit } from '@angular/core';
import { AutenticadorService } from '../services/autenticador.service';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent implements OnInit {

  constructor(private service :UsuariosService) { }
  isLoggedIn():boolean{
    if(localStorage.getItem("username")!=null){
      return true
    }else{
      return false;
    }
  }

  imagemUser():string{
    return this.service.getUsuario(localStorage.getItem("username")).getImagem();
  }
  logOut():void{
    localStorage.removeItem("username")
  }

  ngOnInit() {
  }

}
