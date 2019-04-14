import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  images = [
    "../../../assets/images/carousal/1.jpg",
    "../../../assets/images/carousal/4.jpg",
    "../../../assets/images/carousal/5.JPG",
    "../../../assets/images/carousal/6.JPG"
  ]

  nameFormCntrl = new FormControl("");
  

  constructor() { }

  ngOnInit() {
  }

}
