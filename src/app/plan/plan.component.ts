import { Component, OnInit } from '@angular/core';
import { LockDialogComponent } from '../lock-dialog/lock-dialog.component';
import { ScenarioDialogComponent } from '../scenario-dialog/scenario-dialog.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import codes from '../data/codes.json';
import scenarioBits from '../data/scenarioBits.json';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss'],
})
export class PlanComponent implements OnInit {
  public codes = codes;
  public scenarioBits = scenarioBits;
  locksUnlocked = ['0'];

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}

  openLockDialog(lockName: string): void {
    const modalRef = this.modalService.open(LockDialogComponent, {
      windowClass: 'modalClass',
      backdropClass: 'modalBackdropClass',
      centered: true,
    });
    modalRef.componentInstance.code = this.codes[lockName].code;
    modalRef.componentInstance.lockType = this.codes[lockName].lockType;
    modalRef.componentInstance.lockName = lockName;
    modalRef.result.then((result) => {
      if (result == 'done' && !this.locksUnlocked.includes(lockName)) {
        this.locksUnlocked.push(lockName);
        console.log(this.locksUnlocked);
      }
    });
  }

  openScenarioDialog(scenarioBit): void {
    const modalRef = this.modalService.open(ScenarioDialogComponent, {
      windowClass: 'modalClass',
      centered: true,
    });
    modalRef.componentInstance.scenarioBit = scenarioBit;
  }
}
