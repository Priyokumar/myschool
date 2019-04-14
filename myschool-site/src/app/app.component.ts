import { Component } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Router } from '@angular/router';
import { links } from './modules/header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myschool-site';

  opened = true;
  mode = 'side';

  links = links;

  constructor(private media: MediaObserver, private router: Router) {
    this.media.media$.subscribe((change: MediaChange) => {
      if (change.mqAlias === 'sm' || change.mqAlias === 'xs') {
        this.opened = false
        this.mode = 'over'
      } else {
        this.opened = true
        this.mode = 'side'
      }
    })
  }
}
