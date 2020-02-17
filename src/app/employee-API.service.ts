import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeAPIService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get('/assets/employee-data/data.json');
  }

  setData(firstname: string, lastname: string, age: number) {

  }

}
