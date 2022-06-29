import { Component, Input, OnInit } from '@angular/core';
import { ForecastWeatherData } from 'src/app/interfaces/forecast-weather-data';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss'],
})
export class ForecastComponent implements OnInit {
  @Input() dataForcast!: ForecastWeatherData;

  ngOnInit(): void {}
}
