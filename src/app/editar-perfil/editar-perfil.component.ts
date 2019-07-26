import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css']
})
export class EditarPerfilComponent implements OnInit {
  mostrarMensagemErro:boolean
  constructor() { 
    this.mostrarMensagemErro=false;
  }

  ngOnInit() {
  }
  isMostrarMensagem():boolean{
    return this.mostrarMensagemErro;
  }
  mudarMensagemErro():void{
    if(this.mostrarMensagemErro==true){
      this.mostrarMensagemErro=false;
    }else{
       this.mostrarMensagemErro=true;
    }
  }

}
