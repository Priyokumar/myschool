import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { allSideNavs, ISideNav } from '../model/shared.model';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AdminLayoutComponent implements OnInit {

  sideNavs: ISideNav[] = allSideNavs;

  constructor() { }

  ngOnInit() {
  }

}
