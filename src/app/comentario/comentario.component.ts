import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.css']
})
export class ComentarioComponent implements OnInit {
  comentarioText: string;
  constructor() { 
    this.comentarioText = "I will be free. \n--Xerath"
  }

  ngOnInit() {
  }

}
