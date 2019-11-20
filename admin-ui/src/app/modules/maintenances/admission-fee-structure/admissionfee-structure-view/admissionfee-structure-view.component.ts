import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { IAdmissionFeeMaintenanceYearly, IAdmissionFeeMaintenance } from 'src/app/modules/students/models/maintenance';
import { ApiEndpoint, IConfirmation } from 'src/app/modules/shared/model/shared.model';
import { ConfirmationDialogComponent } from 'src/app/modules/shared/components/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-admissionfee-structure-view',
  templateUrl: './admissionfee-structure-view.component.html',
  styleUrls: ['./admissionfee-structure-view.component.css']
})
export class AdmissionfeeStructureViewComponent implements OnInit {

  errorMessage: string;
  admFeeStructureId: string;
  admFeeStructure: IAdmissionFeeMaintenanceYearly;

  public admFeeStructureColumns: string[] = ['id', 'standard', 'feeAmount', 'admissionAmount'];
  public admFeeStructureDataSource: MatTableDataSource<IAdmissionFeeMaintenance>;
  public admFeeStructures: IAdmissionFeeMaintenance[] = [];

  constructor(
    private http: HttpClient,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private dialog: MatDialog
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.admFeeStructureId = params.id;
    });
  }

  ngOnInit() {
    this.getAdmFeeStructure();
  }

  getAdmFeeStructure() {

    this.http.get<any>(ApiEndpoint.ADDMISSION_FEE_MAINTENANCE + '/' + this.admFeeStructureId).subscribe(data => {

      this.admFeeStructure = data.data;
      this.admFeeStructures = this.admFeeStructure.maintenanceAdmissionFees;
      this.admFeeStructureDataSource = new MatTableDataSource(this.admFeeStructures);
      console.log(this.admFeeStructures);

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
      title: 'Delete Admission Fee Structure',
      subtitle: 'Are you really sure to delete this admission fee structure?'
    };

    this.dialog.open(ConfirmationDialogComponent, { width: '26%', data: confirmationData, disableClose: true })
      .afterClosed().subscribe(okData => {
        if (okData) {

          this.http.delete(ApiEndpoint.ADDMISSION_FEE_MAINTENANCE + '/' + this.admFeeStructureId).subscribe(data => {
            this.router.navigate(['/admin/maintenances/admission-fees']);
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
    this.router.navigate(['admin/maintenances/admission-fees/' + this.admFeeStructureId + '/edit']);
  }

}
