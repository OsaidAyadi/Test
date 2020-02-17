import { Component, OnInit } from '@angular/core';
import { EmployeeAPIService } from '../employee-API.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  constructor(public data: EmployeeAPIService) { }

  ngOnInit() {

  }

}
