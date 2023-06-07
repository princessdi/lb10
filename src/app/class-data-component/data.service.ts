import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MyClass } from './MyClass';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private streetList: string[] = []; // Список значень у довіднику
  private classData: MyClass[] = []; // Список об'єктів класу MyClass
  private classDataSubject: BehaviorSubject<MyClass[]> = new BehaviorSubject<
    MyClass[]
  >(this.classData);

  constructor() {}

  // Додавання нового значення до довідника
  addToStreetList(value: string) {
    this.streetList.push(value);
  }

  // Отримання значень з довідника
  getStreetList() {
    return this.streetList;
  }

  // Додавання нового об'єкту до списку
  addToClassData(data: MyClass) {
    this.classData.push(data);
    this.classDataSubject.next(this.classData);
  }

  // Отримання списку об'єктів
  getClassData() {
    return this.classDataSubject.asObservable();
  }
}
