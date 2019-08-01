import { Component, OnInit } from '@angular/core';
import { AutenticadorService } from '../services/autenticador.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 
  constructor(private service:AutenticadorService) {
    
  }
  logar(login:string,senha:string):void{
    console.log("pegou"+login+senha); 
    this.service.login(login,senha);
    
    
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



