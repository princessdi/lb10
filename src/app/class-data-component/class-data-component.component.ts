import { Component } from '@angular/core';
import { DataService } from '../data-viewer/data.service';
import { MyClass } from './MyClass';

@Component({
  selector: 'app-class-data',
  template: `
    <h2>Class Data</h2>
    <div>
      <input type="text" [(ngModel)]="field1" />
      <input type="number" [(ngModel)]="field2" />
      <input type="checkbox" [(ngModel)]="field3" />
      <input type="text" [(ngModel)]="field4" />
      <input type="number" [(ngModel)]="field5" />
      <button (click)="addClassData()">Add to Class Data</button>
    </div>
    <ul>
      <li *ngFor="let data of classData">
        {{ data.field1 }} - {{ data.field2 }} - {{ data.field3 }} -
        {{ data.field4 }} - {{ data.field5 }}
      </li>
    </ul>
  `,
})
export class ClassDataComponent {
  classData: MyClass[] = [];
  field1: string = '';
  field2: number = 0;
  field3: boolean = false;
  field4: string = '';
  field5: number = 0;

  constructor(private dataService: DataService) {
    // this.dataService.getClassData().subscribe((data) => {
    //   this.classData = data;
    // });
  }

  addClassData() {
    const newData = new MyClass(
      this.field1,
      this.field2,
      this.field3,
      this.field4,
      this.field5
    );
    // this.dataService.addClassData(newData);
    this.field1 = '';
    this.field2 = 0;
    this.field3 = false;
    this.field4 = '';
    this.field5 = 0;
  }
}
