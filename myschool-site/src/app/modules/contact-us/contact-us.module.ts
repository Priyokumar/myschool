import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from './contact-us.component';
import { Routes, RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

const routes: Routes = [
  { path: "", component: ContactUsComponent }
]

@NgModule({
  declarations: [ContactUsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FlexLayoutModule
  ]
})
export class ContactUsModule { }
