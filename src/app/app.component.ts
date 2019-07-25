import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  static setHeader(header:string):void{
    localStorage.setItem('header',header);
  }
  getHeader():string{
    return localStorage.getItem('header')
  }
  title = 'Projeto DSC';
  busca;
  tipoDeBusca;
}
