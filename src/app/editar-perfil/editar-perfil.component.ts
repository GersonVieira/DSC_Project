import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css']
})
export class EditarPerfilComponent implements OnInit {
  mostrarMensagemSalvo:boolean
  constructor() { 
    this.mostrarMensagemSalvo=false;
  }

  ngOnInit() {
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
