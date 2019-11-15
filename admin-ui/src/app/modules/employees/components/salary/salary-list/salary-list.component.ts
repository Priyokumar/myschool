import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { IEmployeeSalary } from '../../../model/employeeModels';
import { ApiEndpoint } from 'src/app/modules/shared/model/shared.model';

@Component({
  selector: 'app-salary-list',
  templateUrl: './salary-list.component.html',
  styleUrls: ['./salary-list.component.css']
})
export class SalaryListComponent implements OnInit {

  errorMessage: string;
  public employeeSalaryColumns: string[] = ['id', 'name', 'designation', 'status', 'salary'];
  public employeeSalaryDataSource: MatTableDataSource<IEmployeeSalary>;
  public employeeSalaries: IEmployeeSalary[] = [];
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.getEmployeeSalaries();
  }

  private getEmployeeSalaries() {

    let resp;
    this.http.get(ApiEndpoint.EMPLOYEE_SALARY).subscribe(data => {

      resp = data;
      if (resp && !resp.apiMessage.error) {

        this.employeeSalaries = resp.data;
        this.employeeSalaryDataSource = new MatTableDataSource(this.employeeSalaries);

        if (!this.employeeSalaries) {
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

  public onClickRow(employeeSalaryId: number) {

    this.router.navigate(['/admin/employees/salaries/' + employeeSalaryId + '/view']);

  }

  public onDeleteEmployee(employeeSalaryId: number) {

    this.http.delete(ApiEndpoint.EMPLOYEE_SALARY + '/' + employeeSalaryId).subscribe(data => {
      this.employeeSalaries = [];
      this.employeeSalaryDataSource = new MatTableDataSource([]);
      this.getEmployeeSalaries();
    }, err => {
      console.error(err);
      if (err.error && err.error.apiMessage) {
        this.errorMessage = err.error.apiMessage.detail;
      } else {
        this.errorMessage = err.message;
      }
    });
  }
}
