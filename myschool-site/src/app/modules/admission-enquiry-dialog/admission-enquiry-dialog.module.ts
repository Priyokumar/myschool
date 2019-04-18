import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmissionEnquiryDialogComponent } from './admission-enquiry-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [AdmissionEnquiryDialogComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule
  ],
  exports: [AdmissionEnquiryDialogComponent],
  entryComponents: [AdmissionEnquiryDialogComponent]
})
export class AdmissionEnquiryDialogModule { }
