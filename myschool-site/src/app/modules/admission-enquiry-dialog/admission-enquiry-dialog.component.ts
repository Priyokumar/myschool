import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-admission-enquiry-dialog',
  templateUrl: './admission-enquiry-dialog.component.html',
  styleUrls: ['./admission-enquiry-dialog.component.scss']
})
export class AdmissionEnquiryDialogComponent implements OnInit {
  width: string;

  nameFormCntrl = new FormControl("");
  emailOrMobileFormCntrl = new FormControl("");
  descriptionFormCntrl = new FormControl("");

  constructor(private dialogRef: MatDialogRef<AdmissionEnquiryDialogComponent>) {

  }

  submit() {
    let body = {
      name: this.nameFormCntrl.value,
      emailMobile: this.emailOrMobileFormCntrl.value,
      description: this.descriptionFormCntrl.value
    }
    console.log(body);
  }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }

}
