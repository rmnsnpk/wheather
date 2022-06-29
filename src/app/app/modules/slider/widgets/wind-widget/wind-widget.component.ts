import { Component, Input, OnInit } from '@angular/core';
import { CurrentWeatherData } from 'src/app/interfaces/current-weather-data';

@Component({
  selector: 'app-wind-widget',
  templateUrl: './wind-widget.component.html',
  styleUrls: ['./wind-widget.component.scss'],
})
export class WindWidgetComponent implements OnInit {
  @Input() dataNow: CurrentWeatherData;

  constructor() {}
  ngOnInit(): void {}
}
