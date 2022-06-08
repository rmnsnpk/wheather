import { Component, OnInit, OnChanges } from '@angular/core';
import { WhetherService } from './whether.service';
import { Observable, from, asap, queue, startWith, delay, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [WhetherService]
})
export class AppComponent {
  data: any
  coords: any
  title: any;
  temp: any
  constructor( private WhetherService: WhetherService){
  }

  ngOnInit(){
    this.WhetherService.getLocation().subscribe((data: any)=>console.log(data))
  }
 
  display(){
    this.WhetherService.getLocation().subscribe((data: any)=>console.log(data))
  }

}
