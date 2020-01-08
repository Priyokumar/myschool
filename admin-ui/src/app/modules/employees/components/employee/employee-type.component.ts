import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployeeType } from '../../model/employeeModels';
import { error } from 'util';
import { ApiEndpoint } from 'src/app/modules/shared/model/shared.model';

@Component({
  selector: 'app-employee-type',
  template: `<span>{{employeeType?.name}}</span>`,
  styleUrls: []
})
export class EmployeeTypeComponent implements OnInit, OnChanges {

  @Input() id: number;
  employeeType: IEmployeeType;

  constructor(private http: HttpClient) { }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges): void {
    this.http.get<IEmployeeType>(ApiEndpoint.EMPLOYEE_TYPE + '/' + this.id).subscribe(data => {
      this.employeeType = data;
    }, err => {
      console.error(err);
    });
  }

}
