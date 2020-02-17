import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { EmployeeAPIService } from '../employee-API.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  selectedEmp: any = [{

  }];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiservice: EmployeeAPIService,
  ) { }

  ngOnInit() {
    this.apiservice.getData().subscribe((data: any[]) => {
      this.selectedEmp = data;
    });

    setTimeout(() => {
      this.selectedEmp = this.selectedEmp.filter(data => {
        return (data.userId === Number(this.route.snapshot.params.id));
      });
    }, 1000);


  }
}
