import { Component, Input, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements OnInit {
  @Input() alertMessages;
  @Input() index;

  isDeleted: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  deleteMessage() {
    this.isDeleted = true;
    setTimeout(() => {
      this.alertMessages.splice(this.index, 1);
    }, 300);
  }
}
