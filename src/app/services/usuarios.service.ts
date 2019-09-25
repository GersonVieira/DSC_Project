import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import { FilmesService } from './filmes.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class UsuariosService{
    constructor(private http:HttpClient, private router:Router){
        this.http.get('http://localhost:8080/usuarios').subscribe(data=>
        this.usuarios=<Usuario[]>data);
    }
    usuarioLogado:Usuario;
    serviceFilmes: FilmesService;
    usuarios: Usuario[] = [ ]
    recuperarUsuarios(){
        this.http.get('http://localhost:8080/usuarios').subscribe(data=>
        this.usuarios=<Usuario[]>data);
    }
    private verificarUsuario(usuario:Usuario):boolean{
        for(let user of this.usuarios){
            if(user.login==usuario.login){
                return false
            }
        }
        this.http.post('http://localhost:8080/usuarios',usuario).subscribe();
        this.http.get('http://localhost:8080/usuarios').subscribe(data=>
        this.usuarios=<Usuario[]>data);
        
        this.router.navigate(['']);
        
        
        return true;
    }
    
    tr:boolean;
    cadastrarUsuario(usuario:Usuario):boolean{
        this.http.get('http://localhost:8080/usuarios').subscribe(data=>
        this.usuarios=<Usuario[]>data,null,() => this.verificarUsuario(usuario));
        return this.tr;
        
        
    
    }

    getUsuario(user:string): Usuario{
        let array=this.usuarios;
        for(let item of array){
            if(item.login==user){
                return item;
            }
        }
        return null;
    }
    setUsuarioLogado(usuario:Usuario){
        this.usuarioLogado=usuario

    }
    getUsuariologado():Usuario{
       return this.usuarioLogado; 
    }
    //getFavoritos(idUsuario:number):Filme[]{
    //    let array = [];
    //    for(let indice of this.getUsuario(idUsuario).getFavoritos()){
    //        array.push(this.serviceFilmes.getFilmePorId(indice));
    //    }
    //    return array;
    //}
}