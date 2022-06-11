import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-humidity-widget',
  templateUrl: './humidity-widget.component.html',
  styleUrls: ['./humidity-widget.component.scss']
})
export class HumidityWidgetComponent implements OnInit {

  @Input() dataNow: any

  constructor() { }

  ngOnInit(): void {
  }

}
