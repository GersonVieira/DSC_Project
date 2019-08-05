import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seguidores',
  templateUrl: './seguidores.component.html',
  styleUrls: ['./seguidores.component.css']
})
export class SeguidoresComponent implements OnInit {

  constructor() { 
    localStorage.setItem("header","Seguidores");
  }

  ngOnInit() {
  }

}
