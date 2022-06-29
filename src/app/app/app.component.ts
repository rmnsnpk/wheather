import {
  Component,
  OnInit,
  OnChanges,
  Input,
  EventEmitter,
} from '@angular/core';
import { WhetherService } from './services/whether.service';
import {
  filter,
  concatAll,
  mergeAll,
  concatMap,
  map,
  switchMap,
  bufferCount,
  mergeMap,
  take,
  delay,
} from 'rxjs/operators';
import { CurrentWeatherData } from './interfaces/current-weather-data';
import { ForecastWeatherData } from './interfaces/forecast-weather-data';
import { WheatherData } from './interfaces/wheather-data';
import { CityData } from './interfaces/city-data';
import { Coordinates } from './interfaces/coordinates';
import { concat, from, fromEvent, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: string;
  data: WheatherData[] = [];
  cityUseList: string[] = ['Minsk', 'Moskow', 'Vilnus', 'London', 'Kiev'];
  constructor(private WhetherService: WhetherService) {}
  current: number = 0;
  userPosition: Coordinates;
  alertOnScreen: boolean = false;

  ngOnInit() {
    this.WhetherService.getLocation()
      .pipe(
        map((position: GeolocationPosition) => {
          return {
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          };
        }),
        switchMap((coords: Coordinates) => {
          let currentWeatherData = this.WhetherService.getDataNow(coords);
          let forecastWeatherData = this.WhetherService.getDataForecast(coords);
          return concat(currentWeatherData, forecastWeatherData);
        }),
        bufferCount(2),
        map((arr: [CurrentWeatherData, ForecastWeatherData]) => {
          return {
            currentWeatherData: arr[0],
            forecastWeatherData: arr[1],
          };
        }),
        take(1)
      )
      .subscribe((response: WheatherData) => {
        this.data[0] = response;
        console.log(this.data);
      });

    this.cityUseList.forEach((cityName: string, i: number) => {
      this.WhetherService.getLocationByCity(cityName)
        .pipe(
          map((cityData: CityData) => {
            console.log(cityData);
            return {
              lat: cityData[0].lat,
              lon: cityData[0].lon,
            };
          }),
          switchMap((coords: Coordinates) => {
            let currentWeatherData = this.WhetherService.getDataNow(coords);
            let forecastWeatherData =
              this.WhetherService.getDataForecast(coords);
            return concat(currentWeatherData, forecastWeatherData);
          }),
          bufferCount(2),
          map((arr) => {
            return {
              currentWeatherData: arr[0],
              forecastWeatherData: arr[1],
            };
          }),
          take(5)
        )

        .subscribe((response: WheatherData) => {
          this.data[i + 1] = response;
        });
    });
  }
  addCity($event) {
    if (this.data.length < 10) {
      this.WhetherService.getLocationByCity($event)
        .pipe(
          map((cityData: CityData) => {
            return {
              lat: cityData[0].lat,
              lon: cityData[0].lon,
            };
          }),
          switchMap((coords: Coordinates) => {
            let currentWeatherData = this.WhetherService.getDataNow(coords);
            let forecastWeatherData =
              this.WhetherService.getDataForecast(coords);
            return concat(currentWeatherData, forecastWeatherData);
          }),
          bufferCount(2),
          map((arr) => {
            return {
              currentWeatherData: arr[0],
              forecastWeatherData: arr[1],
            };
          })
        )
        .subscribe((response: WheatherData) => {
          this.data.push(response);
          this.current = this.data.length - 1;
        });
    } else {
      of(this.alertOnScreen)
        .pipe(
          map((alertOnScreen: boolean) => {
            this.alertOnScreen = !alertOnScreen;
          }),
          delay(5000)
        )
        .subscribe(() => (this.alertOnScreen = !this.alertOnScreen));
    }
  }
  nextSlide() {
    if (this.current + 1 <= this.data.length - 1) {
      this.current++;
    } else {
      this.current = 0;
    }
    console.log(this.current);
  }
  prevSlide() {
    if (this.current - 1 >= 0) {
      this.current--;
    } else {
      this.current = this.data.length - 1;
    }
    console.log(this.current);
  }
}
