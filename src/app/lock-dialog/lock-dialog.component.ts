import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TimerService } from './../services/timer.service';

@Component({
  templateUrl: './lock-dialog.component.html',
  styleUrls: ['./lock-dialog.component.scss'],
})
export class LockDialogComponent {
  colors = [
    { value: 'blue', displayed: 'Bleu' },
    { value: 'pink', displayed: 'Rose' },
    { value: 'green', displayed: 'Vert' },
    { value: 'red', displayed: 'Rouge' },
    { value: 'grey', displayed: 'Gris' },
    { value: 'orange', displayed: 'Orange' },
    { value: 'yellow', displayed: 'Jaune' },
  ];

  inputValue: string = '';
  code;
  lockType;

  constructor(
    public activeModal: NgbActiveModal,
    private timerService: TimerService
  ) {}

  checkCode() {
    console.log(this.code.toString());
    if (this.inputValue === this.code) {
      this.activeModal.close('done');
    } else {
      if (!this.timerService.getPenaltyStatus()) {
        this.timerService.updatePenaltyStatus(true);
      }
    }
  }
}
