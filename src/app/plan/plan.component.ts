import { Component, OnInit } from '@angular/core';
import { LockDialogComponent } from '../lock-dialog/lock-dialog.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import codes from '../data/codes.json';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss'],
})
export class PlanComponent implements OnInit {
  public codes = codes;
  roomsUnlocked = 0;
  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}

  openLockDialog(lockName: string, lockType: string): void {
    const modalRef = this.modalService.open(LockDialogComponent, {
      windowClass: 'modalClass',
      backdropClass: 'modalBackdropClass',
      centered: true,
    });
    modalRef.componentInstance.code = this.codes[lockType][lockName];
    modalRef.componentInstance.lockType = lockType;
    modalRef.result.then((result) => {
      if (result == 'done') {
        console.log(result);
      }
    });
  }
}
