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
  catchError,
} from 'rxjs/operators';
import { AddError } from './interfaces/alert-type';
import { WheatherData } from './interfaces/wheather-data';
import { CityData } from './interfaces/city-data';
import { Coordinates } from './interfaces/coordinates';
import {
  concat,
  from,
  fromEvent,
  Observable,
  of,
  Subscriber,
  throwError,
} from 'rxjs';

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
  alertMessages: AddError[] = [];

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
        map((arr) => {
          return {
            currentWeatherData: arr[0],
            forecastWeatherData: arr[1],
          };
        }),
        take(1)
      )
      .subscribe((response: WheatherData) => {
        this.data[0] = response;
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
          take(1)
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
        .subscribe(
          (response: WheatherData) => {
            this.data.push(response);
            this.current = this.data.length - 1;
          },
          () => {
            if (this.alertMessages.length <= 3) {
              this.alertMessages.unshift({
                title: 'Город не найден',
                text: 'Попробуйте ещё раз',
              });
            } else {
              this.alertMessages.pop();
              this.alertMessages.unshift({
                title: 'Город не найден',
                text: 'Попробуйте ещё раз',
              });
            }
          }
        );
    } else {
      if (this.alertMessages.length <= 3) {
        this.alertMessages.unshift({
          title: 'Список городов переполнен',
          text: 'Максимальное количество городов: 10',
        });
      } else {
        this.alertMessages.pop();
        this.alertMessages.unshift({
          title: 'Список городов переполнен',
          text: 'Максимальное количество городов: 10',
        });
      }
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
