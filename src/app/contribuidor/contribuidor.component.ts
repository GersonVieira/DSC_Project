import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contribuidor',
  templateUrl: './contribuidor.component.html',
  styleUrls: ['./contribuidor.component.css']
})
export class ContribuidorComponent implements OnInit {
  nome: string;
  link: string;
  site: string;
  constructor() {
    this.nome = 'Gefferson Pires';
    this.link = 'https://www.facebook.com/gefferson.pires.3';
    this.site = 'facebook';
  }
  ngOnInit() {
  }

}