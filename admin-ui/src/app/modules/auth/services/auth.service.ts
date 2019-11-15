import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ILoginData } from '../model/auth.model';
import { environment } from '../../../../environments/environment';

@Injectable()
export class AuthService {

  LOGIN_URL = environment.baseUrl + '/login';

  constructor(private http: HttpClient) { }

  login(loginData: ILoginData) {
    return this.http.post<any>(this.LOGIN_URL, loginData);
  }

}
