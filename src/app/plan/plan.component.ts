import { Component, OnInit } from '@angular/core';
import { LockDialogComponent } from '../lock-dialog/lock-dialog.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss'],
})
export class PlanComponent implements OnInit {
  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}

  openLockDialog(): void {
    const modalRef = this.modalService.open(LockDialogComponent);
    modalRef.componentInstance.name = 'World';
  }
}
