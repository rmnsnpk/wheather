import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.scss']
})
export class WidgetsComponent implements OnInit {
  
  @Input() dataNow: any

  constructor() { }

  ngOnInit(): void {
  }

}
