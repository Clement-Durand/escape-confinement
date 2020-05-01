import { Component, OnInit } from '@angular/core';
import researchData from '../data/researchData.json';

@Component({
  selector: 'app-mobile-main',
  templateUrl: './mobile-main.component.html',
  styleUrls: ['./mobile-main.component.scss'],
})
export class MobileMainComponent implements OnInit {
  public searchResults = researchData;
  input;
  resultsToDisplay = null;

  constructor() {}

  ngOnInit(): void {}

  search(searched: string) {
    var index;
    var entry;

    searched = searched.toUpperCase();
    for (index = 0; index < this.searchResults.length; ++index) {
      entry = this.searchResults[index];
      for (let i = 0; i < entry.keywords.length; ++i) {
        if (searched === entry.keywords[i]) {
          return (this.resultsToDisplay = index);
        }
      }
    }
    this.resultsToDisplay = null;
  }
}
