import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiEndpoint } from 'src/app/modules/shared/model/shared.model';
import { IStudent } from '../../../models/student.model';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  public errorMessage: string;
  public studentsColumns: string[] = ['id', 'name', 'registrationNo', 'registrationDate', 'registrationStatus', 'action'];
  public studentsDataSource: MatTableDataSource<IStudent>;
  public students: IStudent[] = [];
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.getStudents();
  }

  private getStudents() {

    let resp;
    this.http.get(ApiEndpoint.STUDENTS).subscribe(data => {

      resp = data;
      if (resp && !resp.apiMessage.error) {

        this.students = resp.data;
        this.studentsDataSource = new MatTableDataSource(this.students);

        if (!this.students) {
          this.errorMessage = 'No Student found';
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

  public onClickRow(studId: number) {

    this.router.navigate(['/admin/students/' + studId + '/view']);

  }

  public onDeleteRow(studId: number) {

    this.http.delete(ApiEndpoint.STUDENTS + '/' + studId).subscribe(data => {
      this.getStudents();
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
