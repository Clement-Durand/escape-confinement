import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-scenario-dialog',
  templateUrl: './scenario-dialog.component.html',
  styleUrls: ['./scenario-dialog.component.scss'],
})
export class ScenarioDialogComponent {
  scenarioBit;
  constructor(public activeModal: NgbActiveModal) {}
}
