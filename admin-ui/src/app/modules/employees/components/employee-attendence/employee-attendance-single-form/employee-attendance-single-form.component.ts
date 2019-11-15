import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IAttendanceFormData } from '../../../model/employeeModels';
import * as moment from 'moment';
import { EmployeeService } from '../../../services/employee.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { MatSnackBar } from '@angular/material';

@Component({
  // tslint:disable-next-line: component-selector
  selector: '[app-employee-attendance-single-form]',
  templateUrl: './employee-attendance-single-form.component.html',
  styleUrls: ['./employee-attendance-single-form.component.scss']
})
export class EmployeeAttendanceSingleFormComponent implements OnInit, OnChanges {

  @Input() attendance: IAttendanceFormData;
  @Input() userData: any;

  constructor(
    private employeService: EmployeeService,
    private http: HttpClient,
    private snackBar: MatSnackBar
  ) {

    this.employeService.receiveSaveInstruction().subscribe(data => {
      if (data) {
        this.save();
      }
    });

  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getAttendance();
  }

  getAttendance() {
    const date = moment(this.attendance.date).format('MM-DD-YYYY');
    const email = this.userData.email;
    const url = `${environment.baseUrl}/api/employee-attendances/email/${email}/date/${date}`;

    this.http.get<any>(url).subscribe(data => {
      console.log('Got attendance data ', data);

      if (data.data) {
        this.attendance = data.data;
      }

    },
      error => {
        console.error(error);
      });
  }

  afterTimeInChange(timeIn: string) {

    const timeOut = this.attendance.timeOut;
    if (!timeOut) {
      return;
    }

    const date = this.attendance.date;
    const timeInDateStr = `${date.getFullYear()} ${(date.getMonth() + 1)} ${date.getDay()} ${timeIn.toLowerCase()}`;
    const timeInDate = moment(timeInDateStr);

    const timeOutDateStr = `${date.getFullYear()} ${(date.getMonth() + 1)} ${date.getDay()} ${timeOut.toLowerCase()}`;
    const timeOutDate = moment(timeOutDateStr);

    const duration = moment.duration(timeOutDate.diff(timeInDate));
    // tslint:disable-next-line: radix
    const hrs = parseInt((duration.asHours() + ''));
    this.attendance.total = `${hrs}hr(s), ${(duration.asMinutes() % 60)}min(s)`;
  }

  afterTimeOutChange(timeOut: string) {

    const timeIn = this.attendance.timeIn;
    if (!timeIn) {
      return;
    }

    const date = this.attendance.date;
    const timeInDateStr = `${date.getFullYear()} ${(date.getMonth() + 1)} ${date.getDay()} ${timeIn.toLowerCase()}`;
    const timeInDate = moment(timeInDateStr);

    const timeOutDateStr = `${date.getFullYear()} ${(date.getMonth() + 1)} ${date.getDay()} ${timeOut.toLowerCase()}`;
    const timeOutDate = moment(timeOutDateStr);

    const duration = moment.duration(timeOutDate.diff(timeInDate));
    // tslint:disable-next-line: radix
    const hrs = parseInt((duration.asHours() + ''));
    this.attendance.total = `${hrs}hr(s) ${(duration.asMinutes() % 60)}min(s)`;
  }

  save() {
    if (this.attendance.timeIn && this.attendance.timeOut) {
      this.attendance.email = this.userData.email;

      const url = environment.baseUrl + '/api/employee-attendances';
      this.http.post(url, this.attendance).subscribe(data => {
        console.log('Successfully save attendance');
        this.snackBar.open('Successfully saved data', 'Ok', { duration: 3000 });
      },
        error => {
          console.error('Error while adding attendance ', error);
          this.snackBar.open('Error while saving data!!!', 'Ok', { duration: 3000 });
        });
    }
  }

}
