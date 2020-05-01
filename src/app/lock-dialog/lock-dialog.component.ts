import { Component, ViewChild } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TimerService } from './../services/timer.service';

@Component({
  templateUrl: './lock-dialog.component.html',
  styleUrls: ['./lock-dialog.component.scss'],
})
export class LockDialogComponent {
  @ViewChild('input') input: any;
  @ViewChild('input1') input1: any;
  @ViewChild('input2') input2: any;
  @ViewChild('input3') input3: any;
  @ViewChild('input4') input4: any;
  @ViewChild('input5') input5: any;
  @ViewChild('input6') input6: any;
  @ViewChild('submitButton') submitButton: any;

  colors = [
    { value: 'blue', displayed: 'Bleu' },
    { value: 'pink', displayed: 'Rose' },
    { value: 'green', displayed: 'Vert' },
    { value: 'red', displayed: 'Rouge' },
    { value: 'grey', displayed: 'Gris' },
    { value: 'orange', displayed: 'Orange' },
    { value: 'yellow', displayed: 'Jaune' },
  ];

  inputValue = '';
  code;
  lockType;

  constructor(
    public activeModal: NgbActiveModal,
    private timerService: TimerService
  ) {}

  changeFocus(inputIndex) {
    switch (inputIndex) {
      case 1:
        if (this.input1.nativeElement.value) {
          this.input2.nativeElement.select();
        }
        break;
      case 2:
        if (this.input2.nativeElement.value) {
          this.input3.nativeElement.select();
        }
        break;
      case 3:
        if (this.input3.nativeElement.value) {
          this.input4.nativeElement.select();
        }
        break;
      case 4:
        if (this.input4.nativeElement.value) {
          this.input5.nativeElement.select();
        }
        break;
      case 5:
        if (this.input5.nativeElement.value) {
          this.input6.nativeElement.select();
        }
        break;
      case 6:
        if (this.input6.nativeElement.value) {
          this.submitButton.nativeElement.focus();
        }
        break;
    }
  }

  checkCode() {
    if (this.lockType === 'chars') {
      this.inputValue =
        '' +
        this.input1.nativeElement.value +
        this.input2.nativeElement.value +
        this.input3.nativeElement.value +
        this.input4.nativeElement.value +
        this.input5.nativeElement.value +
        this.input6.nativeElement.value;
    }
    console.log(this.inputValue);
    if (this.inputValue === this.code) {
      this.activeModal.close('done');
    } else {
      if (!this.timerService.getPenaltyStatus()) {
        this.timerService.updatePenaltyStatus(true);
      }
    }
  }

  clearInput() {
    this.inputValue = '';
    if (this.lockType === 'digits' || this.lockType === 'colors') {
      this.input.nativeElement.value = '';
    } else if (this.lockType === 'chars') {
      this.input1.nativeElement.value = '';
      this.input2.nativeElement.value = '';
      this.input3.nativeElement.value = '';
      this.input4.nativeElement.value = '';
      this.input5.nativeElement.value = '';
      this.input6.nativeElement.value = '';
      this.input1.nativeElement.focus();
    }
  }
}
