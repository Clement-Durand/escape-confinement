import { Component, OnInit } from '@angular/core';
import { LockDialogComponent } from '../lock-dialog/lock-dialog.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import codes from './codes.json';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss'],
})
export class PlanComponent implements OnInit {
  public codes = codes;

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}

  openLockDialog(lockName: string, lockType: string): void {
    const modalRef = this.modalService.open(LockDialogComponent);
    modalRef.componentInstance.code = this.codes[lockType][lockName];
    modalRef.componentInstance.lockType = lockType;
  }
}
