import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { ILoginData } from '../model/auth.model';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { CommonService } from '../../shared/services/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  email = new FormControl('', Validators.required);
  password = new FormControl('', Validators.required);
  errorMessage: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar,
    private commonService: CommonService
  ) { }

  ngOnInit() {
  }

  async login() {

    const loginData: ILoginData = {
      email: this.email.value,
      password: this.password.value
    };

    if (!loginData.email || !loginData.password) {
      return;
    }

    try {
      const resp = await this.authService.login(loginData).toPromise();
      this.router.navigate(['admin/employees']);
      this.commonService.setUserData(resp.token);
    } catch (error) {
      console.error(error);
      this.errorMessage = 'Invalid credential !';
      this.snackBar.open('Invalid credential.', 'Got it!', { duration: 5000 });
    }
  }

}
