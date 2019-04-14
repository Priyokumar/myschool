import { Component, OnInit, Input } from '@angular/core';

export const links = [
  { name: "Home", url: "/", hasSubLinks: false },
  { name: "About Us", url: "/", hasSubLinks: false },
  { name: "Admission", url: "/site/find-course", hasSubLinks: false },
  { name: "Academy", url: "/site/class-schedule", hasSubLinks: false },
  { name: "Career", url: "/site/training-location", hasSubLinks: false },
  { name: "News And Events", url: "/site/training-location", hasSubLinks: false },
  { name: "Contact us", url: "/site/training-location", hasSubLinks: false },
];

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  @Input() sidenav: any;

  links = links;

  constructor() { }

  ngOnInit() {
  }

}
