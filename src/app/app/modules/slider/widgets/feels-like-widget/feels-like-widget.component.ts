import { Component, Input, OnInit } from '@angular/core';
import { CurrentWeatherData } from 'src/app/interfaces/current-weather-data';

@Component({
  selector: 'app-feels-like-widget',
  templateUrl: './feels-like-widget.component.html',
  styleUrls: ['./feels-like-widget.component.scss'],
})
export class FeelsLikeWidgetComponent implements OnInit {
  @Input() dataNow: CurrentWeatherData;

  constructor() {}

  ngOnInit(): void {}
}
