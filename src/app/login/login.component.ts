import { Component, Output, EventEmitter, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  @ViewChild('usernameInput') usernameInput: any;
  @ViewChild('passwordInput') passwordInput: any;
  wrongInput = false;

  @Output() messageEvent = new EventEmitter<boolean>();

  constructor() {}

  checkInputs() {
    this.wrongInput = false;
    console.log(this.wrongInput);
    if (
      this.usernameInput.nativeElement.value === 'Qetesh' &&
      this.passwordInput.nativeElement.value === 'code'
    ) {
      this.messageEvent.emit(true);
    } else {
      this.wrongInput = true;
    }
    this.messageEvent.emit(true);
  }
}
