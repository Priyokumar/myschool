import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagePreviewComponent } from './image-preview/image-preview.component';
import { MatFormFieldModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';

@NgModule({
  declarations: [
    FileUploadComponent,
    ImagePreviewComponent,
    ConfirmationDialogComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [
    FileUploadComponent,
    ImagePreviewComponent,
    ConfirmationDialogComponent
  ],
  entryComponents: [
    ImagePreviewComponent,
    ConfirmationDialogComponent
  ]
})
export class SharedModule { }
