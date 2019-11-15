import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { IAdmissionFeeMaintenanceYearly } from 'src/app/modules/students/models/maintenance';
import { ApiEndpoint } from 'src/app/modules/shared/model/shared.model';

@Component({
  selector: 'app-admissionfee-structure-list',
  templateUrl: './admissionfee-structure-list.component.html',
  styleUrls: ['./admissionfee-structure-list.component.css']
})
export class AdmissionfeeStructureListComponent implements OnInit {

  public errorMessage: string;
  public admFeeStructureColumns: string[] = ['id', 'year', 'action'];
  public admFeeStructureDataSource: MatTableDataSource<IAdmissionFeeMaintenanceYearly>;
  public admFeeStructures: IAdmissionFeeMaintenanceYearly[] = [];
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.getAdmFeeStructures();
  }

  private getAdmFeeStructures() {

    let resp;
    this.http.get(ApiEndpoint.ADDMISSION_FEE_MAINTENANCE).subscribe(data => {

      resp = data;
      if (resp && !resp.apiMessage.error) {

        this.admFeeStructures = resp.data;
        this.admFeeStructureDataSource = new MatTableDataSource(this.admFeeStructures);

        if (!this.admFeeStructures) {
          this.errorMessage = 'No user found';
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

  public onClickRow(admFeeStructureId: number) {
    this.router.navigate(['/admin/maintenances/admission-fees/' + admFeeStructureId + '/view']);
  }

  public onDeleteRow(admFeeStructureId: number) {

    this.http.delete(ApiEndpoint.ADDMISSION_FEE_MAINTENANCE + '/' + admFeeStructureId).subscribe(data => {
      this.admFeeStructureDataSource = new MatTableDataSource([]);
      this.getAdmFeeStructures();
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
