import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sunrise-widget',
  templateUrl: './sunrise-widget.component.html',
  styleUrls: ['./sunrise-widget.component.scss']
})
export class SunriseWidgetComponent implements OnInit {

  @Input() dataNow: any
  
  sunrice!: Date
  sunset!: Date
  constructor() { }

  ngOnInit(): void {
    this.sunrice = new Date(this.dataNow.sys.sunrise*1000)
    this.sunset = new Date(this.dataNow.sys.sunset*1000)
    this.sunset.setDate(this.sunset.getHours()+12)
  }

}
