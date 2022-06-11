import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { WhetherService } from './whether.service';
import { Observable, from, asap, queue, startWith, delay, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  dataNow!: any;
  srcNow!: string;
  imageSrc!: string;
  srcForcast: any=[];
  title: any;
  dataForcast!: any;

  constructor( private WhetherService: WhetherService){
  }
  


  ngOnInit(){
    this.WhetherService.getLocation().subscribe((data: any)=> {
      this.WhetherService.lat=data.coords.latitude;
      this.WhetherService.lon=data.coords.longitude;
      this.WhetherService.getDataNow().subscribe((response: any)=> {
        console.log(response);
        this.dataNow = response;
        this.srcNow = 'http://openweathermap.org/img/wn/'+response.weather[0].icon+'@2x.png';
        this.imageSrc = '../assets/img/'+response.weather[0].icon+'.jpg'
        this.WhetherService.getDataForecast().subscribe((response: any) =>{
          this.dataForcast = response;
          this.srcForcast = response.list.map((element: any) => {
            return 'http://openweathermap.org/img/wn/'+element.weather[0].icon+'@2x.png'
          }
          )
        })
      }); 
    })
    
    
  }


}
