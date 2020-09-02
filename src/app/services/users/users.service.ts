import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AppConstants} from '../app_settings';
import {Observable} from 'rxjs';
import {LoginForm} from './dto/users_dto';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }


  Login(loginForm: LoginForm): Observable<any> {
    return this.http.get<any>(AppConstants.KEY_USERS
      + '?username=' + loginForm.username + '&password=' + loginForm.password
      ,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      });
  }
}
