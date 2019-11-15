import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import { ApiEndpoint } from 'src/app/modules/shared/model/shared.model';
import { IEmployee } from '../../../model/employeeModels';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  errorMessage: string;
  employeesColumns: string[] = ['id', 'name', 'designation', 'status', 'action'];
  employeesDataSource: MatTableDataSource<IBasicEmployeeDetails>;
  employees: IEmployee[] = [];
  basicEmployeeDetails: IBasicEmployeeDetails[] = [];

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.getEmployees();
  }

  private getEmployees() {

    let resp;
    this.http.get(ApiEndpoint.EMPLOYEES).subscribe(data => {

      resp = data;
      if (resp && !resp.apiMessage.error) {

        this.employees = resp.data;
        this.setBasicEmployeeDetails();
        if (!this.employees) {
          this.errorMessage = 'No Employee found';
        }

      } else {
        this.errorMessage = resp.apiMessage.detail;
      }

    }, err => {
      if (err.error && err.error.apiMessage) {
        this.errorMessage = err.error.apiMessage.detail;
      } else {
        this.errorMessage = err.message;
      }

      console.error(err);
    });

  }

  public onClickRow(empId: number) {

    this.router.navigate(['admin/employees/' + empId + '/view']);

  }

  public onDeleteEmployee(empId: number) {

    this.http.delete(ApiEndpoint.EMPLOYEES + '/' + empId).subscribe(data => {
      this.employees = [];
      this.employeesDataSource = new MatTableDataSource([]);
      this.getEmployees();
    }, err => {
      console.error(err);
      if (err.error && err.error.apiMessage) {
        this.errorMessage = err.error.apiMessage.detail;
      } else {
        this.errorMessage = err.message;
      }
    });
  }

  setBasicEmployeeDetails() {

    this.employees.forEach(employee => {

      const fname = employee.firstName ? employee.firstName : '';
      const mname = employee.middleName ? employee.middleName : '';
      const lname = employee.lastName ? employee.lastName : '';
      const name = fname + ' ' + mname + ' ' + lname;

      const basicEmployeeDetail: IBasicEmployeeDetails = {
        designation: employee.designation,
        id: employee.id,
        name,
        status: employee.status
      };
      this.basicEmployeeDetails.push(basicEmployeeDetail);
    });
    this.employeesDataSource = new MatTableDataSource(this.basicEmployeeDetails);
  }

  applyFilter(filterValue: string) {
    if (!this.employeesDataSource) {
      return;
    }
    this.employeesDataSource.filter = filterValue.trim().toLowerCase();
  }

}

interface IBasicEmployeeDetails {
  id: number;
  name: string;
  designation: string;
  status: string;
}
