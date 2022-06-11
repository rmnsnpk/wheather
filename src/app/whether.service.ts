import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { async } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class WhetherService{


  constructor( private http: HttpClient) { }
  lat!: number;
  lon!: number;
  imageName: any;


 getLocation(): Observable<any> {
  return Observable.create((observer: { next: (arg0: GeolocationPosition) => void; complete: () => void; error: (arg0: string | GeolocationPositionError) => void; }) => {
      if(window.navigator && window.navigator.geolocation) {
          window.navigator.geolocation.getCurrentPosition(
              (position) => {
                  observer.next(position);

                  observer.complete();
              },
              (error) => observer.error(error)
          );
      } else {
          observer.error('Unsupported Browser');
      }
  });
}
//   getLocation() {
//     return this.http.get('http://api.positionstack.com/v1/forward?access_key=2d2a4e4c2e4b0f80ccf7409dae0b661b')
// }

  getDataNow(){

    return this.http.get('https://api.openweathermap.org/data/2.5/weather?lat='+this.lat+'&lon='+this.lon+'&units=metric&appid=ab10ab84ae15b200750ffb4e494ef111')
  }
  getDataForecast(){
    return this.http.get('https://api.openweathermap.org/data/2.5/forecast?lat='+this.lat+'&lon='+this.lon+'&units=metric&cnt=16&appid=ab10ab84ae15b200750ffb4e494ef111')
  }
}
function observer(observer: any, arg1: (any: any) => void): Observable<any> {
  throw new Error('Function not implemented.');
}

