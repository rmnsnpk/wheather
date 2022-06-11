import { Component, Input, OnInit } from '@angular/core';
import { WhetherService } from '../whether.service';


@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {

  @Input() srcForcast!: string[];

  @Input() dataForcast!: any;

  constructor( private WhetherService: WhetherService){
  }

  ngOnInit(): void {

  }

}
