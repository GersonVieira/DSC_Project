import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css']
})
export class EditarPerfilComponent implements OnInit {
  mostrarMensagemSalvo:boolean
  imagem:string;
  constructor() { 
    this.mostrarMensagemSalvo=false;
    
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
    this.imagem='https://avatars0.githubusercontent.com/u/45407112?s=400&v=4' 
  }
  isMostrarMensagem():boolean{
    return this.mostrarMensagemSalvo;
  }
  mostrarMensagem():void{
    this.mostrarMensagemSalvo=true;
  }
  tirarMensagem():void{
    this.mostrarMensagemSalvo=false;
  }

}
