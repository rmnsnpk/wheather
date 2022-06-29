import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { concat, map, switchMap, bufferCount } from 'rxjs';
import { CityData } from 'src/app/interfaces/city-data';
import { Coordinates } from 'src/app/interfaces/coordinates';
import { CurrentWeatherData } from 'src/app/interfaces/current-weather-data';
import { ForecastWeatherData } from 'src/app/interfaces/forecast-weather-data';
import { WheatherData } from 'src/app/interfaces/wheather-data';
import { WhetherService } from '../../services/whether.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @Input() data: any;
  @Input() current: number;

  input: string;
  form: any;
  constructor(private WhetherService: WhetherService) {}

  @Output() newCity = new EventEmitter();

  ngOnInit(): void {}
  addCity() {
    this.newCity.emit(this.input);
    this.input = '';
  }
}
