import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { EmployeeAPIService } from '../employee-API.service';

@Component({
  selector: 'app-employee-data',
  templateUrl: './employee-data.component.html',
  styleUrls: ['./employee-data.component.css']
})

export class EmployeeDataComponent implements OnInit {
  @Output() public myOutput = new EventEmitter();

  employees: any[];
  sendDataToEdit: any[];


  constructor(public data: EmployeeAPIService) { }

  ngOnInit() {
    this.data.getData().subscribe((data: any[]) => {
      this.employees = data;
    });
  }

  editEmployee(empData): void {
    this.sendDataToEdit = empData;
  }

}
