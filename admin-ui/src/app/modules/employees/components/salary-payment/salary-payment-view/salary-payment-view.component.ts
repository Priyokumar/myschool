import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { IPaySalary } from '../../../model/employeeModels';
import { ApiEndpoint } from 'src/app/modules/shared/model/shared.model';

@Component({
  selector: 'app-salary-payment-view',
  templateUrl: './salary-payment-view.component.html',
  styleUrls: ['./salary-payment-view.component.css']
})
export class SalaryPaymentViewComponent implements OnInit {

  errorMessage: string;
  paySalaryId: number;
  paySalary: IPaySalary;

  constructor(private http: HttpClient, private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      this.paySalaryId = params.paySalId;
    });
  }

  ngOnInit() {
    this.getPaySalary();
  }

  getPaySalary() {

    let resp;
    this.http.get(ApiEndpoint.PAY_SALARY + '/' + this.paySalaryId).subscribe(data => {
      resp = data;
      this.paySalary = resp.data;
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

    this.http.delete(ApiEndpoint.PAY_SALARY + '/' + this.paySalaryId).subscribe(data => {
      this.router.navigate(['/employee/pay-salaries']);
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
    this.router.navigate(['/employee/pay-salaries/' + this.paySalaryId + '/edit']);
  }
}
