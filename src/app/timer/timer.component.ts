import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements OnInit {
  constructor() {}

  @Output() messageEvent = new EventEmitter<string>();

  timeIsOver;
  hours = 0;
  minutes = 0;
  seconds = 5;

  ngOnInit(): void {
    const self = this;
    setInterval(function () {
      if (!self.timeIsOver) {
        self.updateTimer();
      }
    }, 1000);
  }

  updateTimer() {
    if (this.hours <= 0 && this.minutes <= 0 && this.seconds <= 0) {
      return this.sendMessage();
    }
    this.seconds -= 1;
    if (this.seconds === -1) {
      this.seconds += 60;
      this.minutes -= 1;
      if (this.minutes === -1) {
        this.minutes += 60;
        this.hours -= 1;
      }
    }

    console.log('hours' + this.hours);
    console.log('minutes' + this.minutes);
    console.log('seconds' + this.seconds);
  }

  sendMessage() {
    this.timeIsOver = true;
    this.messageEvent.emit();
  }
}
