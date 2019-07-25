import { Component, OnInit, Input } from '@angular/core';
import { Contribuidor } from './contribuidor.model';

@Component({
  selector: 'app-contribuidor',
  templateUrl: './contribuidor.component.html',
  styleUrls: ['./contribuidor.component.css']
})
export class ContribuidorComponent implements OnInit {
  @Input() contribuidor:Contribuidor;
  constructor() {

  }
  ngOnInit() {
  }

}
