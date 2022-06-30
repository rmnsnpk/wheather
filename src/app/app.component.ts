import {
  Component,
  OnInit,
  OnChanges,
  Input,
  EventEmitter,
} from '@angular/core';
import {
  concatMap,
  map,
  bufferCount,
  take,
  switchMap,
  tap,
} from 'rxjs/operators';
import { AddError } from './interfaces/alert-type';
import { WheatherData } from './interfaces/wheather-data';
import { CityData } from './interfaces/city-data';
import { Coordinates } from './interfaces/coordinates';
import { concat, from, Observable } from 'rxjs';
import { WhetherService } from './services/whether.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private WhetherService: WhetherService) {}

  title: string;
  data: WheatherData[] = [];
  defaultCitiesCoords: Coordinates[] = [
    {
      lat: 35.6828387,
      lon: -0.1276474,
    },
    {
      lat: 41.8933203,
      lon: 12.4829321,
    },
    {
      lat: 48.8588897,
      lon: 2.3200410217200766,
    },
    {
      lat: 35.6828387,
      lon: 139.7594549,
    },
    {
      lat: 38.8950368,
      lon: -77.0365427,
    },
  ];
  cityUseList: string[] = ['Minsk', 'Moskow', 'Vilnus', 'London', 'Kiev'];

  current: number = 0;
  alertMessages: AddError[] = [];
  // localCoordinates: Observable<Coordinates> =
  //   this.WhetherService.getLocation().pipe(
  //     map((position: GeolocationPosition) => {
  //       return {
  //         lat: position.coords.latitude,
  //         lon: position.coords.longitude,
  //       };
  //     })
  //   );
  // cityListWeather: Observable<Coordinates> = from(this.defaultCitiesCoords);

  ngOnInit() {
    // concat(this.localCoordinates, this.cityListWeather)
    //   .pipe(
    //     concatMap((coords: Coordinates) => {
    //       let currentWeatherData = this.WhetherService.getDataNow(coords);
    //       let forecastWeatherData = this.WhetherService.getDataForecast(coords);
    //       return concat(currentWeatherData, forecastWeatherData);
    //     }),
    //     bufferCount(2),
    //     map((arr) => {
    //       return {
    //         currentWeatherData: arr[0],
    //         forecastWeatherData: arr[1],
    //       };
    //     }),
    //     take(6)
    //   )
    //   .subscribe((response: WheatherData) => {
    //     this.data.push(response);
    //   });
    this.WhetherService.getLocation()
      .pipe(
        map((position: GeolocationPosition) => {
          return {
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          };
        }),
        this.weatherPipe().bind(this.WhetherService)
      )
      .subscribe((response: WheatherData) => {
        this.data[0] = response;
      });
    this.cityUseList.forEach((cityName: string, i: number) => {
      this.WhetherService.getLocationByCity(cityName)
        .pipe(
          map((cityData: CityData) => {
            return {
              lat: cityData[0].lat,
              lon: cityData[0].lon,
            };
          }),
          this.weatherPipe().bind(this.WhetherService)
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
          this.weatherPipe().bind(this.WhetherService)
        )
        .subscribe(
          (response: WheatherData) => {
            this.data.push(response);
            this.current = this.data.length - 1;
          },
          () => {
            this.chooseAlertMessage('cityIsNotFound');
          }
        );
    } else {
      this.chooseAlertMessage('tooManyCities');
    }
  }
  chooseAlertMessage(type) {
    let alertTextTooManyCities = {
      title: 'Список городов переполнен',
      text: 'Максимальное количество городов: 10',
    };
    let alertTextCityIsNotFound = {
      title: 'Город не найден',
      text: 'Попробуйте ещё раз',
    };
    switch (type) {
      case 'tooManyCities':
        if (this.alertMessages.length <= 3) {
          this.alertMessages.unshift(alertTextTooManyCities);
        } else {
          this.alertMessages.pop();
          this.alertMessages.unshift(alertTextTooManyCities);
        }
        break;

      default:
        if (this.alertMessages.length <= 3) {
          this.alertMessages.unshift(alertTextCityIsNotFound);
        } else {
          this.alertMessages.pop();
          this.alertMessages.unshift(alertTextCityIsNotFound);
        }
        break;
    }
  }
  weatherPipe() {
    return function (source: Observable<Coordinates>) {
      return source.pipe(
        tap(),
        switchMap((coords: Coordinates) => {
          let currentWeatherData = this.getDataNow(coords);
          let forecastWeatherData = this.getDataForecast(coords);
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
      );
    };
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
