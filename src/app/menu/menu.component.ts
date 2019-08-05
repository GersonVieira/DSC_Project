import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  headerAtual:string
  constructor() { 
    
  }
  getStorage(){
    return this.headerAtual=localStorage.getItem("header") 
  }

  ngOnInit() {
  }

}
