import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mobile-login',
  templateUrl: './mobile-login.component.html',
  styleUrls: ['./mobile-login.component.scss'],
})
export class MobileLoginComponent implements OnInit {
  input;

  constructor() {}
  message: string = 'yes';

  @Output() messageEvent = new EventEmitter<string>();

  ngOnInit(): void {}

  checkCode(input) {
    if (input === '3') {
      this.sendMessage();
    }
  }

  sendMessage() {
    this.messageEvent.emit(this.message);
  }
}
