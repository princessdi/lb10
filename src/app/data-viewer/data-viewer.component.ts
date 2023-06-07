import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-data-viewer',
  templateUrl: './data-viewer.component.html',
})
export class DataViewComponent implements OnInit {
  streets: any[];

  constructor(private dataService: DataService) {
    this.streets = [];
  }

  ngOnInit() {
    this.loadStreets();
  }

  loadStreets() {
    console.log(this.streets);
    this.streets = this.dataService.getStreets();
  }
}
