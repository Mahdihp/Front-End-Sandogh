import {Component, OnInit, ElementRef} from '@angular/core';
import {ROUTES} from '../sidebar/sidebar.component';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {Router} from '@angular/router';
import {NgxPermissionsService, NgxRolesService} from 'ngx-permissions';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public focus;
  public listTitles: any[];
  public location: Location;

  constructor(private ngxPermissionsService: NgxPermissionsService,
              private ngxRolesService: NgxRolesService,
              location: Location,
              private router: Router) {
    this.location = location;
  }

  ngOnInit() {
    this.listTitles = ROUTES.filter(listTitle => listTitle);
  }

  getTitle() {
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if (titlee.charAt(0) === '#') {
      titlee = titlee.slice(1);
    }

    for (var item = 0; item < this.listTitles.length; item++) {
      if (this.listTitles[item].path === titlee) {
        return this.listTitles[item].title;
      }
    }
    return 'Dashboard';
  }

  logOut() {
    Swal.fire({
      title: 'آیا مایا به خروج از سیستم هستید؟',
      icon: 'question',
      confirmButtonText: 'بله',
      showConfirmButton: true,
      showCancelButton: true,
      cancelButtonText: 'خیر',
    }).then((result) => {
      if (result.value) {
        this.ngxPermissionsService.flushPermissions();
        this.ngxRolesService.flushRoles();
        this.router.navigate(['/login']);
      }
    });

  }
}
