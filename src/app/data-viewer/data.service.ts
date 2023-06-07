import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private streets: any[] = [];

  constructor() {}

  addStreet(street: any) {
    this.streets.push(street);
  }

  getStreets() {
    return this.streets;
  }
}
