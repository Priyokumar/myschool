import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ILoginData } from '../model/auth.model';
import { environment } from '../../../../environments/environment';
import { CookieService } from 'ngx-cookie-service';
import * as moment from 'moment';
import jwtDecoder from 'jwt-decode';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable()
export class AuthService {

  LOGIN_URL = environment.baseUrl + '/login';
  private USER_TOKEN = 'user_token';

  private loginStatusSubject = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  login(loginData: ILoginData) {
    return this.http.post<any>(this.LOGIN_URL, loginData);
  }

  storeToken(token: any) {
    if (token) {
      const expiry = moment();
      expiry.add(10, 'minutes');
      this.cookieService.set(this.USER_TOKEN, JSON.stringify(token), expiry.toDate());
    }
  }

  extendTokenExpiry() {
    this.storeToken(this.getUserToken());
  }

  getUserToken() {
    const token = this.cookieService.get(this.USER_TOKEN);
    return token;
  }

  removeAllCookies() {
    this.cookieService.deleteAll();
  }

  getAuthDataFromCookies() {
    const token = this.getUserToken();
    const decodedToken = token ? jwtDecoder(token) : null;
    return decodedToken ? JSON.parse(decodedToken.sub).data : null;
  }

  sendLoginSignal() {
    this.loginStatusSubject.next(true);
  }

  recieveLoginSignal() {
    return this.loginStatusSubject.asObservable();
  }

}
