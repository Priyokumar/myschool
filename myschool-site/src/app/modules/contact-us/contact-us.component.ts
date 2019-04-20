import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  nameFormCntrl = new FormControl("");
  emailOrMobileFormCntrl = new FormControl("");
  descriptionFormCntrl = new FormControl("");

  constructor() { }

  ngOnInit() {
  }

  submit(){
    
  }

}
