import { Component, OnInit, Input } from '@angular/core';
import { IDesignation } from '../../model/employeeModels';
import { HttpClient } from '@angular/common/http';
import { ApiEndpoint } from 'src/app/modules/shared/model/shared.model';

@Component({
  selector: 'app-designation',
  template: `<span>{{designation?.name}}</span>`,
  styleUrls: []
})
export class DesignationComponent implements OnInit {

  @Input() id: number;
  designation: IDesignation;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<IDesignation>(ApiEndpoint.EMPLOYEE_TYPE + '/designations/' + this.id).subscribe(data => {
      this.designation = data;
    }, err => {
      console.error(err);
    });
  }

}
