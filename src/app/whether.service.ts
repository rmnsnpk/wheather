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
 coords!: GeolocationPosition;



  getLocation() {
      navigator.geolocation.getCurrentPosition((position: GeolocationPosition) => {
        this.coords = position
      },
      )
      return of(this.coords)
  }
//   getLocation() {
//     return this.http.get('http://api.positionstack.com/v1/forward?access_key=2d2a4e4c2e4b0f80ccf7409dae0b661b')
// }

//   getData(){
//     return this.http.get('https://api.openweathermap.org/data/2.5/weather?lat='+this.lat+'&lon='+this.lng+'&units=metric&appid=ab10ab84ae15b200750ffb4e494ef111')
//   }
}
