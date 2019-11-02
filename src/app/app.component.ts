import { Component } from '@angular/core';
import { Employee } from './Employee.ts';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  employees: Employee[];

  constructor() {
    this.employees = [
      new Employee('John',1,90000)
    ];
  }
}
