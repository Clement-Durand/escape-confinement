import { Component, OnInit, ViewChild } from '@angular/core';
import researchData from '../data/researchData.json';
import scenarioBits from '../data/scenarioBits.json';

@Component({
  selector: 'app-mobile-main',
  templateUrl: './mobile-main.component.html',
  styleUrls: ['./mobile-main.component.scss'],
})
export class MobileMainComponent implements OnInit {
  @ViewChild('searchInput') searchInput: any;

  public searchResults = researchData;
  public scenarioBit = scenarioBits['C'];
  scenarioOpen = true;
  input;
  resultsToDisplay = [];
  imagesFilter = false;
  fullImage = false;
  fullImageUrl;

  constructor() {}

  ngOnInit(): void {}

  filterResults(boolean) {
    this.imagesFilter = boolean;
  }

  search(searchInput: string) {
    var index;
    var entry;

    this.resultsToDisplay = [];
    searchInput = searchInput.toUpperCase();
    for (index = 0; index < this.searchResults.length; ++index) {
      entry = this.searchResults[index];
      for (let i = 0; i < entry.keywords.length; ++i) {
        if (searchInput === entry.keywords[i].toUpperCase()) {
          this.resultsToDisplay.push(entry);
        }
      }
    }
  }

  showFullImage(url) {
    if (!this.fullImage) {
      this.fullImage = true;
      this.fullImageUrl = url;
    } else {
      this.closeFullImage();
    }
  }

  closeFullImage() {
    if (this.fullImage) {
      this.fullImage = false;
      this.fullImageUrl = '';
    }
  }

  clearInput() {
    this.input = '';
    this.searchInput.nativeElement.value = '';
    this.resultsToDisplay = [];
  }

  openScenario() {
    this.scenarioOpen = !this.scenarioOpen;
  }
}
