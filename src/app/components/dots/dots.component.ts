import { Component, Input, OnInit } from '@angular/core';
import { WheatherData } from 'src/app/interfaces/wheather-data';

@Component({
  selector: 'app-dots',
  templateUrl: './dots.component.html',
  styleUrls: ['./dots.component.scss'],
})
export class DotsComponent implements OnInit {
  ngOnInit(): void {}

  @Input() data: WheatherData[];
  @Input() current: number;
}
