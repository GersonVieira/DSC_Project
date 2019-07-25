import { Component, OnInit } from '@angular/core';
import { formattedError, HtmlParser } from '@angular/compiler';

@Component({
  selector: 'app-edit-perfil',
  templateUrl: './edit-perfil.component.html',
  styleUrls: ['./edit-perfil.component.css']
})
export class EditPerfilComponent implements OnInit {
  foto:File;
  constructor() { }
  inputFileChange(event){
    if(event.target.files && event.target.files[0]){
      this.foto= event.target.files[0];
      console.log('pegou hehe');
      document.getElementById('rua')
      
    }
  }
  getImage():any{
    return this.foto;
  }

  ngOnInit() {
  }

}
