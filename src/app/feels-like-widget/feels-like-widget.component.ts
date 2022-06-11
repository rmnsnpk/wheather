import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-feels-like-widget',
  templateUrl: './feels-like-widget.component.html',
  styleUrls: ['./feels-like-widget.component.scss']
})
export class FeelsLikeWidgetComponent implements OnInit {

  @Input() dataNow: any

  constructor() { }

  ngOnInit(): void {
  }

}
