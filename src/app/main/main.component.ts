import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  timeIsOver;
  indice;

  constructor() {}

  ngOnInit(): void {}

  receiveMessage() {}
}
