import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-wind-widget',
  templateUrl: './wind-widget.component.html',
  styleUrls: ['./wind-widget.component.scss']
})
export class WindWidgetComponent implements OnInit {

  @Input() dataNow: any

  constructor() { }
  ngOnInit(): void {
  
  }

}
