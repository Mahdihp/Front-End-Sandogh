import {Component, OnInit, OnDestroy} from '@angular/core';
import {UsersService} from '../../services/users/users.service';
import {LoginForm, UserInfo} from '../../services/users/dto/users_dto';
import {FormControl, FormGroup} from '@angular/forms';
import {NgxPermissionsService, NgxRolesService} from 'ngx-permissions';
import {Router} from '@angular/router';
import {ngxLoadingAnimationTypes} from 'ngx-loading';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  constructor(private userService: UsersService,
              private router: Router,
              private ngxPermissionsService: NgxPermissionsService,
              private ngxRolesService: NgxRolesService) {
  }

  public ngxLoadingAnimationTypes = ngxLoadingAnimationTypes.threeBounce;

  public loading = false;
  formGroup = new FormGroup({
    username: new FormControl('mahdihp'),
    password: new FormControl('123456'),
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
    this.loading = true;
    this.userService.Login(login).subscribe(data => {
      console.log(data);
      if (data.status === 200) {
        localStorage.setItem('key-token', data.data[0].jwtResponse.token);
        localStorage.setItem('username', data.data[0].username);
        localStorage.setItem('role', data.data[0].roles);
        const perm = [];
        if (data.data != null && data.data[0].permissions != null) {
          perm.push(data.data[0].permissions[0].displayName);
          this.ngxRolesService.addRole(data.data[0].roles, perm);

          const perm2 = [data.data[0].roles];
          this.ngxPermissionsService.loadPermissions(perm2);
          this.getDahsbaord();
          this.loading = false;
        }
      }
    });
  }

  private getDahsbaord() {
    this.router.navigate(['/dashboard']);
  }
}
