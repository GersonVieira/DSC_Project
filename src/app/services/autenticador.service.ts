import { Injectable } from '@angular/core';
import { UsuariosService } from './usuarios.service';
@Injectable()
export class AutenticadorService {
  constructor(private service :UsuariosService){
    
  }
  login(user: string, password: string): boolean {
    if (this.verificarUsuario(this.service,user,password)) {
      localStorage.setItem('username',user);
      return true;
    }
    return false;
  }
  logout(): any { localStorage.removeItem('username'); }
  getUser(): any {  return localStorage.getItem('username'); }
  isLoggedIn(): boolean { return this.getUser() !== null; }
  verificarUsuario(service :UsuariosService,login:string,senha:string):boolean{
    console.log(service.usuarios.length);
    
    for(let usuario of service.usuarios){
      if (usuario.getLogin()==login) {
        if(usuario.getSenha()==senha){
          console.log("verificou");
          
          return true;
        }
        return false;
      }
    }
    console.log("bao");
    
    return false;
  }
}
