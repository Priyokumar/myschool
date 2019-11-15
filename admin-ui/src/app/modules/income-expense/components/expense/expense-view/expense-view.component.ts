import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { IExpense } from '../../../models/income-expense.model';
import { ApiEndpoint } from 'src/app/modules/shared/model/shared.model';

@Component({
  selector: 'app-expense-view',
  templateUrl: './expense-view.component.html',
  styleUrls: ['./expense-view.component.css']
})
export class ExpenseViewComponent implements OnInit {

  errorMessage: string;
  expId: string;
  expense: IExpense;

  constructor(private http: HttpClient, private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      this.expId = params.expId;
    });
  }

  ngOnInit() {
    this.getExpense();
  }

  getExpense() {

    this.http.get<any>(ApiEndpoint.EXPENSES + '/' + this.expId).subscribe(data => {

      this.expense = data.data;

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

    this.http.delete(ApiEndpoint.EXPENSES + '/' + this.expId).subscribe(data => {
      this.router.navigate(['/admin/incomes-expenses/expenses']);
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
    this.router.navigate(['/admin/incomes-expenses/expenses/' + this.expId + '/edit']);
  }

}
