import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { IAdmission } from '../../../models/admission-fee.model';
import { ApiEndpoint } from 'src/app/modules/shared/model/shared.model';

@Component({
  selector: 'app-admission-fee-list',
  templateUrl: './admission-fee-list.component.html',
  styleUrls: ['./admission-fee-list.component.css']
})
export class AdmissionFeeListComponent implements OnInit {

  public errorMessage: string;
  public admissionColumns: string[] = ['id', 'name', 'registrationNo', 'Class', 'Admission Number', 'action'];
  public admissionsDataSource: MatTableDataSource<IAdmission>;
  public admissions: IAdmission[] = [];
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.getAdmissions();
  }

  private getAdmissions() {

    let resp;
    this.http.get(ApiEndpoint.ADMISSIONS).subscribe(data => {

      resp = data;
      if (resp && !resp.apiMessage.error) {

        this.admissions = resp.data;
        this.admissionsDataSource = new MatTableDataSource(this.admissions);

        if (!this.admissions) {
          this.errorMessage = 'No Admission found';
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

  public onClickRow(admId: number) {

    this.router.navigate(['/admin/students/admissions/' + admId + '/view']);

  }

  public onDeleteRow(admId: number) {

    this.http.delete(ApiEndpoint.ADMISSIONS + '/' + admId).subscribe(data => {
      this.admissionsDataSource = new MatTableDataSource([]);
      this.ngOnInit();
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
