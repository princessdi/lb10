import { Component } from '@angular/core';
import { DataService } from '../data-viewer/data.service';

@Component({
  selector: 'app-dictionary',
  template: `
    <h2>Dictionary</h2>
    <div>
      <input type="text" [(ngModel)]="newValue" />
      <button (click)="addToStreetList()">Add to Street List</button>
    </div>
    <ul>
      <li *ngFor="let street of streetList">{{ street }}</li>
    </ul>
  `,
})
export class DictionaryComponent {
  streetList: string[] = [];
  newValue: string = '';

  constructor(private dataService: DataService) {
    this.streetList = this.dataService.getStreets();
  }

  addToStreetList() {
    // this.dataService.addToStreetList(this.newValue);
    this.newValue = '';
  }
}
