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
    service.recuperarUsuarios();
    
    
    for(let usuario of service.usuarios){
      if (usuario.login==login) {
        if(usuario.senha==senha){
         
          this.service.setUsuarioLogado(usuario);
          return true;
        }
        return false;
      }
    }
    
    
    return false;
  }
}
