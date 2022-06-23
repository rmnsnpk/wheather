import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { WheatherData } from 'src/app/interfaces/wheather-data';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  @Input() data: WheatherData[];
  @Input() current: number;

  @Output() del = new EventEmitter();
  @Output() onNext = new EventEmitter();
  @Output() onPrev = new EventEmitter();
  ngOnInit() {}
  onNextClick() {
    this.onNext.emit();
  }
  onPrevClick() {
    this.onPrev.emit();
  }

  onDel() {
    this.del.emit();

    if (this.current !== 0) {
      if (this.data.length > 1) {
        this.data.splice(this.current, 1);
        this.current = this.current - 1;
      }
      this.onNextClick();
    }
  }
  // nextSlide() {
  //   if (this.current + 1 <= this.data.length - 1) {
  //     this.current++;
  //   } else {
  //     this.current = 0;
  //   }
  //   console.log(this.current);
  // }
  // prevSlide() {
  //   if (this.current - 1 >= 0) {
  //     this.current--;
  //   } else {
  //     this.current = this.data.length - 1;
  //   }
  //   console.log(this.current);
  // }
}
