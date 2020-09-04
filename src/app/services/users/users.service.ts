import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AppConstants} from '../app_settings';
import {Observable} from 'rxjs';
import {LoginForm, UserResponse} from './dto/users_dto';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {
  }


  Login(loginForm: LoginForm): Observable<UserResponse> {
    return this.http.post<UserResponse>(AppConstants.KEY_USERS_SIGNIN,
      // + '?username=' + loginForm.username + '&password=' + loginForm.password
      loginForm
      ,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      });
  }

  LogOut(loginForm: LoginForm): Observable<UserResponse> {
    return this.http.post<UserResponse>(AppConstants.KEY_USERS_SIGNOUT,
      // + '?username=' + loginForm.username + '&password=' + loginForm.password
      loginForm
      ,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      });
  }
}
