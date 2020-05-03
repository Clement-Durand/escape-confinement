import { Component, ViewChild } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TimerService } from './../services/timer.service';
import { ThrowStmt } from '@angular/compiler';

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
    { value: 'blue', codeValue: '1' },
    { value: 'pink', codeValue: '2' },
    { value: 'green', codeValue: '3' },
    { value: 'red', codeValue: '4' },
    { value: 'purple', codeValue: '5' },
    { value: 'white', codeValue: '6' },
    { value: 'yellow', codeValue: '7' },
    { value: 'orange', codeValue: '8' },
    { value: 'black', codeValue: '9' },
  ];

  inputValue = '';
  inputValueColors = [];
  code;
  lockType;
  lockName;

  constructor(
    public activeModal: NgbActiveModal,
    private timerService: TimerService
  ) {}

  /*
    Digits
  */

  addDigitInput(digitInput) {
    if (this.inputValue.length < 4) {
      this.inputValue = ''.concat(this.inputValue, digitInput);
    }
  }

  /*
    Characters
  */

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

  /*
    Directions
  */

  addDirectionInput(dirInput) {
    if (this.inputValue.length < 4) {
      this.inputValue = ''.concat(this.inputValue, dirInput);
    }
  }

  /*
    Colors
  */

  addColorInput(colorInput) {
    if (this.inputValue.length < 5) {
      this.inputValue = ''.concat(this.inputValue, colorInput.codeValue);
      this.inputValueColors.push(colorInput.value);
    }
  }

  delColorInput() {
    this.inputValue = this.inputValue.substr(0, this.inputValue.length - 1);
    this.inputValueColors.pop();
  }
  /*
    Shared
  */

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
      this.inputValue = this.inputValue.toUpperCase();
    }
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
    if (this.lockType === 'chars') {
      this.input1.nativeElement.value = '';
      this.input2.nativeElement.value = '';
      this.input3.nativeElement.value = '';
      this.input4.nativeElement.value = '';
      this.input5.nativeElement.value = '';
      this.input6.nativeElement.value = '';
      this.input1.nativeElement.focus();
    } else if (this.lockType === 'colors') {
      this.inputValueColors = [];
    }
  }
}
