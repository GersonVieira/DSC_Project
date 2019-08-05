import { Injectable } from '@angular/core';
import { UsuariosService } from './usuarios.service';
@Injectable()
export class AutenticadorService {
  login(user: string, password: string): boolean {
    if (this.verificarUsuario(new UsuariosService,user,password)) {
      localStorage.setItem('username',user);
      return true;
    }
    return false;
  }
  logout(): any { localStorage.removeItem('username'); }
  getUser(): any {  return localStorage.getItem('username'); }
  isLoggedIn(): boolean { return this.getUser() !== null; }
  verificarUsuario(service :UsuariosService,login:string,senha:string):boolean{
    for(let usuario of service.usuarios){
      if (usuario.getLogin()==login) {
        if(usuario.getSenha()==senha){
          return true;
        }
        return false;
      }
    }
    return false;
  }
}
