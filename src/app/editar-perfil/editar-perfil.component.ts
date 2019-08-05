import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css']
})
export class EditarPerfilComponent implements OnInit {
  mostrarMensagemSalvo:boolean
  imagem:string;
  constructor(private service:UsuariosService) { 
    this.mostrarMensagemSalvo=false;
    localStorage.setItem("header","Editar Perfil")
    
  }
  printar(valor:any):void{
    console.log(valor);
  }  
  setImage(valor:string):void{

  this.imagem=valor

  }
  getImage():string{
    return this.imagem;
  }

  ngOnInit() {
    this.imagem=this.service.getUsuario(localStorage.getItem("username")).getImagem(); 
  }
  isMostrarMensagem():boolean{
    return this.mostrarMensagemSalvo;
  }
  mostrarMensagem():void{
    alert("fala tu");
    this.mostrarMensagemSalvo=true;
  }
  tirarMensagem():void{
    this.mostrarMensagemSalvo=false;
  }

}
