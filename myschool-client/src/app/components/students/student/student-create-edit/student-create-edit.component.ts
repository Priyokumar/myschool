import { Component, OnInit } from '@angular/core';
import { Student } from './student';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiEndpoint } from 'src/app/model/apiEndpoint';
import * as moment from 'moment';
import { DatePipe } from '@angular/common';
import { IStudent } from 'src/app/model/student.model';

@Component({
  selector: 'app-student-create-edit',
  templateUrl: './student-create-edit.component.html',
  styleUrls: ['./student-create-edit.component.css', '../../../../../assets/css/form-common.css']
})
export class StudentCreateEditComponent extends Student implements OnInit {

  constructor(private http: HttpClient, private router: Router, private activatedRoute: ActivatedRoute) {
    super();
    this.activatedRoute.params.subscribe(params => {
      this.studId = params.studId;
      if (this.studId)
        this.getStudent();
    })
  }

  ngOnInit() {
    this.sameAsPermAddrFormCtl.setValue(false)
  }

  getStudent() {

    let resp;
    this.http.get(ApiEndpoint.STUDENTS + "/" + this.studId).subscribe(data => {
      resp = data;
      this.student = resp.data;
      this.setForm();
    }, err => {
      console.error(err);
      if (err.error && err.error.apiMessage)
        this.errorMessage = err.error.apiMessage.detail;
      else
        this.errorMessage = err.message;
    })
  }

  save() {

    let datePipe = new DatePipe("en-US");
    let studentPayloadData: IStudent = {
      id: this.idFormCtl.value,
      registrationNo: this.registrationNoFormCtl.value,
      registrationDate: datePipe.transform(this.registrationDateFormCtl.value, 'MM/dd/yyyy'),
      registrationStatus: this.registrationStatusFormCtl.value,
      firstName: this.firstNameFormCtl.value,
      middleName: this.middleNameFormCtl.value,
      lastName: this.lastNameFormCtl.value,
      standard: this.standardFormCtl.value,
      rollNo: this.rollNoFormCtl.value,
      dob: datePipe.transform(this.dobFormCtl.value, 'MM/dd/yyyy'),
      joiningDate: datePipe.transform(this.joiningDateFormCtl.value, 'MM/dd/yyyy'),

      gender: this.genderFormCtl.value,
      bloodGroup: this.bloodGroupFormCtl.value,
      religion: this.religionFormCtl.value,
      community: this.communityFormCtl.value,
      nationality: this.nationalityFormCtl.value,
      aadhaarNo: this.aadhaarNoFormCtl.value,
      physicallyChallenged: this.physicallyChallengedFormCtl.value,

      sameAsPermAddr : this.sameAsPermAddrFormCtl.value,
      permanentAddress: {
        id: this.addIdFormCtl.value,
        firstLine: this.firstLineFormCtl.value,
        secondLine: this.secondLineFormCtl.value,
        country: this.countryFormCtl.value,
        state: this.stateFormCtl.value,
        district: this.districtFormCtl.value
      },

      correspondentAddress: {
        id: this.corrAddIdFormCtl.value,
        firstLine: this.corrFirstLineFormCtl.value,
        secondLine: this.corrSecondLineFormCtl.value,
        country: this.corrCountryFormCtl.value,
        state: this.corrStateFormCtl.value,
        district: this.corrDistrictFormCtl.value
      },

      fatherInfo: {
        id: this.fInfoIdFormCtl.value,
        name: this.fatherNameFormCtl.value,
        dob: datePipe.transform(this.fatherDobFormCtl.value, 'MM/dd/yyyy'),
        relationship: null,
        contactNo: this.fatherContactNoFormCtl.value
      },
      motherInfo: {
        id: this.mInfoIdFormCtl.value,
        name: this.motherNameFormCtl.value,
        dob: datePipe.transform(this.motherDobFormCtl.value, 'MM/dd/yyyy'),
        relationship: null,
        contactNo: this.motherContactNoFormCtl.value
      },
      guardianInfo: {
        id: this.gInfoIdFormCtl.value,
        name: this.guardianNameFormCtl.value,
        dob: datePipe.transform(this.guardianDobFormCtl.value, 'MM/dd/yyyy'),
        relationship: null,
        contactNo: this.guardianContactNoFormCtl.value
      }
    }

    console.log(studentPayloadData);

    this.saveOrUpdateHttpObservable(this.studId, studentPayloadData).subscribe(data => {

      this.hasSubmitted = true;
      this.router.navigate(["/student/list"]);

    }, err => {
      console.error(err);
      if (err.error && err.error.apiMessage)
        this.errorMessage = err.error.apiMessage.detail;
      else
        this.errorMessage = err.message
    })

  }

  private saveOrUpdateHttpObservable(studRegdId: Number, studentPayloadData: IStudent) {
    if (this.studId) {
      return this.http.put(ApiEndpoint.STUDENTS + "/" + studRegdId, studentPayloadData);
    }
    else {
      return this.http.post(ApiEndpoint.STUDENTS, studentPayloadData);
    }
  }

  setForm() {

    this.idFormCtl.setValue(this.student.id)
    this.registrationNoFormCtl.setValue(this.student.registrationNo)
    this.registrationDateFormCtl.setValue(moment(<string>this.student.registrationDate))
    this.registrationStatusFormCtl.setValue(this.student.registrationStatus)

    this.firstNameFormCtl.setValue(this.student.firstName)
    this.middleNameFormCtl.setValue(this.student.middleName)
    this.lastNameFormCtl.setValue(this.student.lastName)
    this.standardFormCtl.setValue(this.student.standard)
    this.rollNoFormCtl.setValue(this.student.rollNo)
    this.dobFormCtl.setValue(moment(<string>this.student.dob))
    this.joiningDateFormCtl.setValue(moment(<string>this.student.joiningDate))

    this.genderFormCtl.setValue(this.student.gender)
    this.bloodGroupFormCtl.setValue(this.student.bloodGroup)
    this.religionFormCtl.setValue(this.student.religion)
    this.nationalityFormCtl.setValue(this.student.nationality)
    this.communityFormCtl.setValue(this.student.community)
    this.aadhaarNoFormCtl.setValue(this.student.aadhaarNo)
    this.physicallyChallengedFormCtl.setValue(this.student.physicallyChallenged)

    let permanentAddress = this.student.permanentAddress
    if (permanentAddress) {
      this.addIdFormCtl.setValue(permanentAddress.id)
      this.firstLineFormCtl.setValue(permanentAddress.firstLine)
      this.secondLineFormCtl.setValue(permanentAddress.secondLine)
      this.countryFormCtl.setValue(permanentAddress.id)
      this.stateFormCtl.setValue(permanentAddress.country)
      this.districtFormCtl.setValue(permanentAddress.district)
    }

    this.sameAsPermAddrFormCtl.setValue(this.student.sameAsPermAddr)
    let correspondentAddress = this.student.correspondentAddress
    if (correspondentAddress) {
      this.corrAddIdFormCtl.setValue(correspondentAddress.id)
      this.corrFirstLineFormCtl.setValue(correspondentAddress.firstLine)
      this.corrSecondLineFormCtl.setValue(correspondentAddress.secondLine)
      this.corrCountryFormCtl.setValue(correspondentAddress.id)
      this.corrStateFormCtl.setValue(correspondentAddress.country)
      this.corrDistrictFormCtl.setValue(correspondentAddress.district)
    }

    let fatherInfo = this.student.fatherInfo
    if (fatherInfo) {
      this.fInfoIdFormCtl.setValue(fatherInfo.id)
      this.fatherNameFormCtl.setValue(fatherInfo.name)
      this.fatherDobFormCtl.setValue(moment(<string>fatherInfo.dob))
      this.fatherContactNoFormCtl.setValue(fatherInfo.contactNo)
    }

    let motherInfo = this.student.motherInfo
    if (motherInfo) {
      this.mInfoIdFormCtl.setValue(motherInfo.id)
      this.motherNameFormCtl.setValue(motherInfo.name)
      this.motherDobFormCtl.setValue(moment(<string>motherInfo.dob))
      this.motherContactNoFormCtl.setValue(motherInfo.contactNo)
    }

    let guardianInfo = this.student.guardianInfo
    if (guardianInfo) {
      this.gInfoIdFormCtl.setValue(guardianInfo.id)
      this.guardianNameFormCtl.setValue(guardianInfo.name)
      this.guardianDobFormCtl.setValue(moment(<string>guardianInfo.dob))
      this.guardianContactNoFormCtl.setValue(guardianInfo.contactNo)
    }
  }

}
