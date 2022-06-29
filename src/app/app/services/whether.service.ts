import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { async } from '@angular/core/testing';
import { Coordinates } from '../interfaces/coordinates';

@Injectable({
  providedIn: 'root',
})
export class WhetherService {
  constructor(private http: HttpClient) {}
  lon: number;
  lat: number;
  imageName: any;
  coords: { lat: number; lon: number }[] = [];

  getLocation(): Observable<any> {
    return Observable.create(
      (observer: {
        next: (arg0: GeolocationPosition) => GeolocationPosition;
        complete: (arg0: GeolocationPosition) => void;
        error: (arg0: string | GeolocationPositionError) => void;
      }) => {
        if (window.navigator && window.navigator.geolocation) {
          window.navigator.geolocation.getCurrentPosition(
            (position) => {
              observer.next(position);

              observer.complete(position);
            },
            (error) => observer.error(error)
          );
        } else {
          observer.error('Unsupported Browser');
        }
      }
    );
  }

  getDataNow(coords: Coordinates) {
    return this.http.get(
      'https://api.openweathermap.org/data/2.5/weather?lat=' +
        coords.lat +
        '&lon=' +
        coords.lon +
        '&units=metric&appid=ab10ab84ae15b200750ffb4e494ef111'
    );
  }
  getDataForecast(coords: Coordinates) {
    return this.http.get(
      'https://api.openweathermap.org/data/2.5/forecast?lat=' +
        coords.lat +
        '&lon=' +
        coords.lon +
        '&units=metric&cnt=16&appid=ab10ab84ae15b200750ffb4e494ef111'
    );
  }
  getLocationByCity(city: string) {
    return this.http.get(
      'http://api.openweathermap.org/geo/1.0/direct?q=' +
        city +
        '&limit=1&appid=ab10ab84ae15b200750ffb4e494ef111'
    );
  }
}

function observer(observer: any, arg1: (any: any) => void): Observable<any> {
  throw new Error('Function not implemented.');
}
