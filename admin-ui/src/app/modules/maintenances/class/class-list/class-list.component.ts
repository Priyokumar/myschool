import { Component, OnInit } from '@angular/core';
import { IStandard } from '../../model/standard';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ApiEndpoint, IConfirmation } from 'src/app/modules/shared/model/shared.model';
import { ConfirmationDialogComponent } from 'src/app/modules/shared/components/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.scss']
})
export class ClassListComponent implements OnInit {

  public errorMessage: string;
  public standards: IStandard[] = [];

  constructor(
    private http: HttpClient,
    private router: Router,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.getStandards();
  }

  private getStandards() {

    this.http.get<any>(ApiEndpoint.STANDARD).subscribe(data => {

      if (data && !data.apiMessage.error) {

        this.standards = data.data;
        if (!this.standards) {
          this.errorMessage = 'No standards found';
        }

      } else {
        this.errorMessage = data.apiMessage.detail;
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

  public onClickRow(standardId: number) {
    this.router.navigate(['/admin/maintenances/standards/' + standardId + '/view']);
  }

  public onDeleteRow(standardId: number) {

    const confirmationData: IConfirmation = {
      title: 'Delete Astandard',
      subtitle: 'Are you really sure to delete this standard?'
    };

    this.dialog.open(ConfirmationDialogComponent, { width: '26%', data: confirmationData, disableClose: true })
      .afterClosed().subscribe(okData => {
        if (okData) {

          this.http.delete(ApiEndpoint.STANDARD + '/' + standardId).subscribe(data => {
            this.getStandards();
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
