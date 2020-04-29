import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'escape-confinement';
  showSignUp = false;

  message = 'no';
  mobile;

  constructor() {
    this.mobile = window.innerWidth < 640;
  }

  receiveMessage($event) {
    this.message = $event;
  }
}
