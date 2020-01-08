import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatTableDataSource, MatDialog, MatPaginator, MatSort, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiEndpoint, IConfirmation } from 'src/app/modules/shared/model/shared.model';
import { IStudent } from '../../../models/student.model';
import { ConfirmationDialogComponent } from 'src/app/modules/shared/components/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  public errorMessage: string;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  // tslint:disable-next-line: max-line-length
  public studentsColumns: string[] = ['firstName','middleName','lastName', 'registrationNo', 'registrationDate', 'status', 'action'];
  public studentsDataSource: MatTableDataSource<IStudent>;
  public students: IStudent[] = [];

  constructor(
    private http: HttpClient,
    private router: Router,
    private dialog: MatDialog,
  ) { }

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
        this.studentsDataSource.paginator = this.paginator;
        this.studentsDataSource.sort = this.sort;

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

  applyFilter(filterValue: string) {
    this.studentsDataSource.filter = filterValue.trim().toLowerCase();
  }

  public onClickRow(studId: number) {

    this.router.navigate(['/admin/students/' + studId + '/view']);

  }

  public onDeleteRow(studId: number) {
    const confirmationData: IConfirmation = {
      title: 'Delete Student',
      subtitle: 'Are you really sure to delete this student?'
    };

    this.dialog.open(ConfirmationDialogComponent, { width: '26%', data: confirmationData, disableClose: true })
      .afterClosed().subscribe(okData => {
        if (okData) {

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
      });
  }


}
