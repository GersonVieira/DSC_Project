import { Component, OnInit } from '@angular/core';
import { AutenticadorService } from '../services/autenticador.service';
import { Router } from '@angular/router';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private router:Router, private service:AutenticadorService,private usuarioService:UsuariosService) {
    localStorage.setItem("header","Login")
    this.usuarioService.recuperarUsuarios()
  }
  logar(login:string,senha:string):void{
    
    this.service.login(login,senha);
    if(this.isLoggedIn()){
      this.router.navigate(['']);
    }


  }
  isLoggedIn():boolean{
    return this.service.isLoggedIn();
  }
  logOut():void{
    this.service.logout();
  }

  ngOnInit() {
  }

}



