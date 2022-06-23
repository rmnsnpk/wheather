import { Component, Input, OnInit } from '@angular/core';
import { CurrentWeatherData } from 'src/app/interfaces/current-weather-data';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.scss'],
})
export class WidgetsComponent implements OnInit {
  @Input() dataNow: CurrentWeatherData;

  constructor() {}

  ngOnInit(): void {}
}
