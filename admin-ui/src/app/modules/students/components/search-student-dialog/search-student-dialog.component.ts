import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { IStudent } from '../../models/student.model';
import { ApiEndpoint } from 'src/app/modules/shared/model/shared.model';

@Component({
  selector: 'app-search-student-dialog',
  templateUrl: './search-student-dialog.component.html',
  styleUrls: ['./search-student-dialog.component.css']
})
export class SearchStudentDialogComponent implements OnInit {

  firstNameFormCtl = new FormControl('', null);
  lastNameFormCtl = new FormControl('', null);
  registrationNoFctrl = new FormControl(null, null);

  students: IStudent[] = [];
  studentColumns: string[] = ['id', 'firstName', 'middleName', 'lastName', 'class', 'registrationNo', 'status'];
  studentDataSource: MatTableDataSource<IStudent>;

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  errorMessage: string;

  constructor(
    public dialogRef: MatDialogRef<SearchStudentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private http: HttpClient
  ) { }

  ngOnInit() {
    this.studentDataSource = new MatTableDataSource(this.students);
  }

  public searchStudent() {
    this.http.get<any>(ApiEndpoint.STUDENTS).subscribe(data => {
      this.students = data.data;
      this.studentDataSource = new MatTableDataSource(this.students);
    }, err => {
      console.error(err);
      if (err.error && err.error.apiMessage) {
        this.errorMessage = err.error.apiMessage.detail;
      } else {
        this.errorMessage = err.message;
      }
    });
  }

  public select(student: IStudent) {
    this.dialogRef.close(student);
  }

  public close() {
    this.dialogRef.close();
  }

}
