import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { IIncome } from '../../../models/income-expense.model';
import { ApiEndpoint } from 'src/app/modules/shared/model/shared.model';

@Component({
  selector: 'app-income-view',
  templateUrl: './income-view.component.html',
  styleUrls: ['./income-view.component.css']
})
export class IncomeViewComponent implements OnInit {

  errorMessage: string;
  incomeId: string;
  income: IIncome;

  constructor(private http: HttpClient, private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      this.incomeId = params.id;
    });
  }

  ngOnInit() {
    this.getIncome();
  }

  getIncome() {

    this.http.get<any>(ApiEndpoint.INCOMES + '/' + this.incomeId).subscribe(data => {

      this.income = data.data;

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

    this.http.delete(ApiEndpoint.INCOMES + '/' + this.incomeId).subscribe(data => {
      this.router.navigate(['/admin/incomes-expenses/incomes']);
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
    this.router.navigate(['/admin/incomes-expenses/incomes/' + this.incomeId + '/edit']);
  }

}
