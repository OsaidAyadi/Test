import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeePageComponent } from './employee-page/employee-page.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeDataComponent } from './employee-data/employee-data.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { EmployeeContainerComponent } from './employee-container/employee-container.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
   declarations: [
      AppComponent,
      EmployeePageComponent,
      AddEmployeeComponent,
      EmployeeDataComponent,
      EditEmployeeComponent,
      EmployeeContainerComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
