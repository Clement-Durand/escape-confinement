import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TimerService {
  penaltyStatus = false;
  timeIsOver = false;
  constructor() {}

  getPenaltyStatus() {
    return this.penaltyStatus;
  }

  updatePenaltyStatus(status: boolean) {
    this.penaltyStatus = status;
  }

  getTimerStatus() {
    return this.timeIsOver;
  }

  updateTimerStatus() {
    if (!this.timeIsOver) {
      this.timeIsOver = !this.timeIsOver;
    }
  }
}
