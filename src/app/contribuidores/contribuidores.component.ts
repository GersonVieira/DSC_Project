import { Component, OnInit } from '@angular/core';
import { Contribuidor } from '../contribuidor/contribuidor.model';


@Component({
  selector: 'app-contribuidores',
  templateUrl: './contribuidores.component.html',
  styleUrls: ['./contribuidores.component.css']
})
export class ContribuidoresComponent implements OnInit {
  contribuidores:Contribuidor[];
  constructor() { 
    this.contribuidores = [
      new Contribuidor('Gefferson Pires', 'Graduando em LCC', "https://github.com/geffpires", "/assets/images/gefffoto.jpg", 'GitHub'),
      new Contribuidor('Gerson Pires', 'Graduando em LCC', "https://github.com/gersonvieira", "/assets/images/gersonft.jpg", 'GitHub'),
      new Contribuidor('Douglas Cardins', 'Graduando em SI', "https://github.com/DouglasTex", "https://avatars1.githubusercontent.com/u/20545738?s=460&v=4", 'GitHub'),
      new Contribuidor('Francisco das Chagas', 'Graduando em SI', "https://github.com/franciscochagas13", "https://avatars1.githubusercontent.com/u/38105241?s=400&u=a98ce3dc642501c5a581a68464357b41aa47edfc&v=4", 'GitHub')
    ];  
  }
  
  ngOnInit() {
  }

}
