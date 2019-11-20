import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { IStudent } from '../../../models/student.model';
import { ApiEndpoint, IConfirmation } from 'src/app/modules/shared/model/shared.model';
import { MatDialog } from '@angular/material';
import { ConfirmationDialogComponent } from 'src/app/modules/shared/components/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.css']
})
export class StudentViewComponent implements OnInit {

  errorMessage: string;
  studId: string;
  student: IStudent;

  constructor(
    private http: HttpClient,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private dialog: MatDialog
  ) {
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
    const confirmationData: IConfirmation = {
      title: 'Delete Student',
      subtitle: 'Are you really sure to delete this student?'
    };

    this.dialog.open(ConfirmationDialogComponent, { width: '26%', data: confirmationData, disableClose: true })
      .afterClosed().subscribe(okData => {
        if (okData) {

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
      });
  }

  edit() {
    this.router.navigate(['/admin/students/' + this.studId + '/edit']);
  }

}
