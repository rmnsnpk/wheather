import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { WhetherService } from '../../services/whether.service';

@Component({
  selector: 'app-city-search',
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.scss'],
})
export class CitySearchComponent implements OnInit {
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
