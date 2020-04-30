import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TimerService } from './../services/timer.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements OnInit {
  timeIsOver = false;
  penalty = 2;
  penaltyCooldown = 2000;
  currentPenaltyCooldown = 0;
  constructor(private timerService: TimerService) {}

  @Output() messageEvent = new EventEmitter<string>();

  hours = 0;
  minutes = 5;
  seconds = 5;
  tenths = 0;

  ngOnInit(): void {
    const self = this;
    setInterval(function () {
      if (!self.timerService.getTimerStatus()) {
        self.updateTimer();
      }
    }, 10);
  }

  updateTimer() {
    if (!this.timerService.getTimerStatus()) {
      if (this.currentPenaltyCooldown) {
        this.currentPenaltyCooldown -= 10;
      }
      if (
        this.timerService.getPenaltyStatus() &&
        this.currentPenaltyCooldown <= 0
      ) {
        this.handlePenalty();
        this.timerService.updatePenaltyStatus(false);
      }
      if (
        this.hours <= 0 &&
        this.minutes <= 0 &&
        this.seconds <= 0 &&
        this.tenths <= 0
      ) {
        return this.sendMessage();
      }
      this.tenths -= 1;
      if (this.tenths < 0) {
        this.tenths = 99;
        this.seconds -= 1;
        if (this.seconds < 0) {
          this.seconds = 59;
          this.minutes -= 1;
          if (this.minutes < 0) {
            this.minutes = 59;
            this.hours -= 1;
          }
        }
      }

      console.log('hours' + this.hours);
      console.log('minutes' + this.minutes);
      console.log('seconds' + this.seconds);
    }
  }

  handlePenalty() {
    if (this.minutes < this.penalty) {
      if (this.hours === 0) {
        this.tenths = 0;
        this.seconds = 0;
        this.minutes = 0;
      } else {
        this.minutes += 60 - this.penalty;
        this.hours -= 1;
      }
    } else {
      this.minutes -= this.penalty;
    }
    this.currentPenaltyCooldown = this.penaltyCooldown;
  }

  sendMessage() {
    this.timeIsOver = true;
    this.timerService.updateTimerStatus();
    this.messageEvent.emit();
  }
}
