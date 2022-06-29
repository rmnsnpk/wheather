import { Component, Input, OnInit } from '@angular/core';
import { CurrentWeatherData } from 'src/app/interfaces/current-weather-data';

@Component({
  selector: 'app-humidity-widget',
  templateUrl: './humidity-widget.component.html',
  styleUrls: ['./humidity-widget.component.scss'],
})
export class HumidityWidgetComponent implements OnInit {
  @Input() dataNow: CurrentWeatherData;

  constructor() {}

  ngOnInit(): void {}
}
