import {Component, OnInit, OnDestroy} from '@angular/core';
import {UsersService} from '../../services/users/users.service';
import {LoginForm} from '../../services/users/dto/users_dto';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  constructor(private userService: UsersService) {
  }


  formGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  LoginForm() {
    console.log(this.formGroup.value['username']);
    console.log(this.formGroup.value['password']);
    const userName = this.formGroup.value['username'];
    const password = this.formGroup.value['password'];
    const login = new LoginForm(userName, password);
    this.userService.Login(login).subscribe(data => {
      console.log(data);
      localStorage.setItem("key-token",data.data[0].jwtResponse.token);
      localStorage.setItem("username",data.data[0].username);
      localStorage.setItem("role",data.data[0].roles);
    });
  }
}
