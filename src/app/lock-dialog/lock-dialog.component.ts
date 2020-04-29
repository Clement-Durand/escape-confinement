import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  templateUrl: './lock-dialog.component.html',
  styleUrls: ['./lock-dialog.component.scss'],
})
export class LockDialogComponent {
  inputValue: string = '';
  code;
  lockType;

  constructor(public activeModal: NgbActiveModal) {}

  checkCode() {
    console.log(this.code.toString());
    if (this.inputValue === this.code) {
      this.activeModal.close();
    }
  }
}
