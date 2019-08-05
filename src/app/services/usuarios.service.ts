import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import { FilmesService } from './filmes.service';

@Injectable()
export class UsuariosService{
    serviceFilmes: FilmesService;
    usuarios: Usuario[] = [
        new Usuario(1,"Rafael Menezes","ralfs","123456",[1,2],[2],[2],"https://scontent.fcpv2-1.fna.fbcdn.net/v/t1.0-9/45066603_2236506099758012_8470155904099024896_n.jpg?_nc_cat=109&_nc_oc=AQmZpIiYccpuas2f_sfOVjwpLK069hOjB7lWanpaVDRNhOaVT4lPybzDYn2XhOSbZy4&_nc_ht=scontent.fcpv2-1.fna&oh=7374fdabec7a106b04520d2ff0415dcd&oe=5DDE33C8"),
        new Usuario(2,"Jeferson Surta","jeff","123456",[1,2],[1],[1],"https://scontent.fcpv2-1.fna.fbcdn.net/v/t1.0-9/62261014_131428084719973_5484084109212909568_n.jpg?_nc_cat=103&_nc_oc=AQmwzMUAB9uN4kgpIvMcvvho5FI6C1wxJrJEGDlV_G5pB1jq4LnDZ6UhBb1yiUySgyg&_nc_ht=scontent.fcpv2-1.fna&oh=48ca127a82f9dd3f2b056dad57db2c7b&oe=5DA3F134"),
        new Usuario(3,"UserPadrão","user","password",[1,2],[1],[1],"https://avatars0.githubusercontent.com/u/25906992?s=460&v=4")
    ]

    cadastrarUsuario(usuario:Usuario):boolean{
        for(let user of this.usuarios){
            if(user.getNome()==usuario.getNome()){
                return false
            }
        }
        this.usuarios.push(usuario);
        console.log("cadastrou mesmo"+" "+this.usuarios.length);
        
        return true;
    }

    getUsuario(user:string): Usuario{
        let array=this.usuarios;
        for(let item of array){
            if(item.getLogin()==user){
                return item;
            }
        }
        return null;
    }
    //getFavoritos(idUsuario:number):Filme[]{
    //    let array = [];
    //    for(let indice of this.getUsuario(idUsuario).getFavoritos()){
    //        array.push(this.serviceFilmes.getFilmePorId(indice));
    //    }
    //    return array;
    //}
}