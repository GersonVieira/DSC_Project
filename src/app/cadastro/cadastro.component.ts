import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  nome = '';
  sobrenome = '';
  email = '';
  senha = '';
  confirmasenha = '';
  constructor(private service:UsuariosService) {
    localStorage.setItem("header","Cadastro")
   }

  ngOnInit() {
  }

  validarlogin(login:string,nome:string,sobrenome:string,imagemURL:string,email:string,senha:string,confirmarSenha:string):boolean{
    if(senha==confirmarSenha){
      return this.service.cadastrarUsuario(new Usuario(4,nome+" "+sobrenome,login,senha,imagemURL));
    }
    return false;

  }

  valido() {

    return true;
  }
  cadastrar(nome:string, login:string, senha:string,confirmar:string, imagem:string):boolean{
    console.log(senha+" "+confirmar+" "+nome+" "+login+" "+imagem);
    
   
      return this.service.cadastrarUsuario(new Usuario(null,nome,login,senha,imagem));  
    
    
  }

}
