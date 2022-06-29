import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { CurrentWeatherData } from 'src/app/interfaces/current-weather-data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() dataNow: CurrentWeatherData;
  @Input() current: number;

  @Output() onNext = new EventEmitter();
  @Output() onPrev = new EventEmitter();
  @Output() del = new EventEmitter();

  ngOnInit() {}
  onNextClick() {
    this.onNext.emit();
  }
  onPrevClick() {
    this.onPrev.emit();
  }
  onDel() {
    this.del.emit();
  }
}
