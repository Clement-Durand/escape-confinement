import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  templateUrl: './lock-dialog.component.html',
  styleUrls: ['./lock-dialog.component.scss'],
})
export class LockDialogComponent {
  input: string;

  constructor(public activeModal: NgbActiveModal) {}

  checkCode() {
    if (this.input === '123') {
      this.activeModal.close();
    }
  }
}
