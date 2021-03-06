import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'داشبورد',  icon: 'ni-tv-2 text-primary', class: '' },
    { path: '/icons', title: 'صندوق ها',  icon:'ni-planet text-blue', class: '' },
    { path: '/maps', title: 'اعضاء',  icon:'ni-single-02 text-black', class: '' },
    { path: '/user-profile', title: 'ماهیانه ها',  icon:'ni-single-02 text-yellow', class: '' },
    { path: '/tables', title: 'وام ها',  icon:'ni-bullet-list-67 text-red', class: '' },
    { path: '/tables', title: 'اقساط',  icon:'ni-bullet-list-67 text-red', class: '' },
    { path: '/login', title: 'ورود',  icon:'ni-key-25 text-info', class: '' },
    // { path: '/register', title: 'ثبت نام',  icon:'ni-circle-08 text-pink', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }
}
