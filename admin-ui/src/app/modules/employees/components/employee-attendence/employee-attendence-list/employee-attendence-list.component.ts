import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { IEmployeeAttendence } from '../../../model/employeeModels';
import { ApiEndpoint } from 'src/app/modules/shared/model/shared.model';

@Component({
  selector: 'app-employee-attendence-list',
  templateUrl: './employee-attendence-list.component.html',
  styleUrls: ['./employee-attendence-list.component.css']
})
export class EmployeeAttendenceListComponent implements OnInit {


  public errorMessage: string;
  public empAttdColumns: string[] = ['id', 'date', 'action'];
  public empAttdDataSource: MatTableDataSource<IEmployeeAttendence>;
  public empAttds: IEmployeeAttendence[] = [];
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.getEmpAttds();
  }

  private getEmpAttds() {

    let resp;
    this.http.get(ApiEndpoint.EMPLOYEE_ATTENDENCES).subscribe(data => {

      resp = data;
      if (resp && !resp.apiMessage.error) {

        this.empAttds = resp.data;
        this.empAttdDataSource = new MatTableDataSource(this.empAttds);

        if (!this.empAttds) {
          this.errorMessage = 'No attendence found';
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

  public onClickRow(empAttdId: number) {

    this.router.navigate(['/employee/attendences/' + empAttdId + '/view']);

  }

  public onDeleteRow(empAttdId: number) {

    this.http.delete(ApiEndpoint.EMPLOYEE_ATTENDENCES + '/' + empAttdId).subscribe(data => {
      this.empAttdDataSource = new MatTableDataSource([]);
      this.getEmpAttds();
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
