import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { IStudent } from '../../../models/student.model';
import { ApiEndpoint } from 'src/app/modules/shared/model/shared.model';

@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.css']
})
export class StudentViewComponent implements OnInit {

  errorMessage: string;
  studId: string;
  student: IStudent;

  constructor(private http: HttpClient, private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      this.studId = params.id;
    });
  }

  ngOnInit() {
    this.getStudent();
  }

  getStudent() {

    let resp;
    this.http.get(ApiEndpoint.STUDENTS + '/' + this.studId).subscribe(data => {
      resp = data;
      this.student = resp.data;

    }, err => {
      console.error(err);
      if (err.error && err.error.apiMessage) {
        this.errorMessage = err.error.apiMessage.detail;
      } else {
        this.errorMessage = err.message;
      }
    });
  }

  delete() {

    this.http.delete(ApiEndpoint.STUDENTS + '/' + this.studId).subscribe(data => {
      this.router.navigate(['/admin/students']);
    }, err => {
      console.error(err);
      if (err.error && err.error.apiMessage) {
        this.errorMessage = err.error.apiMessage.detail;
      } else {
        this.errorMessage = err.message;
      }
    });
  }

  edit() {
    this.router.navigate(['/admin/students/' + this.studId + '/edit']);
  }

}
