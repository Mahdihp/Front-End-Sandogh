import {ActivatedRouteSnapshot, RouterStateSnapshot, Routes} from '@angular/router';

import {DashboardComponent} from '../../pages/dashboard/dashboard.component';
import {IconsComponent} from '../../pages/icons/icons.component';
import {MapsComponent} from '../../pages/maps/maps.component';
import {UserProfileComponent} from '../../pages/user-profile/user-profile.component';
import {TablesComponent} from '../../pages/tables/tables.component';
import {NgxPermissionsGuard, NgxRolesService} from 'ngx-permissions';
import {LoginComponent} from '../../pages/login/login.component';
import {RouterConnector} from 'ngx-permission/connectors/router-connecter/router-connector';
import Swal from 'sweetalert2';

export const AdminLayoutRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [NgxPermissionsGuard],
    data: {
      permissions: {
        only: ['ROLE_ADMIN', 'ROLE_USER'],
        redirectTo: '/login'
      },
    },
  },
  {
    path: 'user-profile',
    component: UserProfileComponent,
    canActivate: [NgxPermissionsGuard],
    data: {
      permissions: {
        only: ['ROLE_USER'],
        redirectTo: (rejectedPermissionName: string,
                     activateRouteSnapshot: ActivatedRouteSnapshot,
                     routerStateSnapshot: RouterStateSnapshot) => {
          // console.log(activateRouteSnapshot.data);
          // console.log(activateRouteSnapshot.params);
          {
            Swal.fire({
              title: 'شما به این قسمت دست رسی ندارید!',
              icon: 'error',
              confirmButtonText: 'تایید',
            });
            return '/dashboard';
          }
        }
      },
    },
  },
  {path: 'tables', component: TablesComponent},
  {path: 'icons', component: IconsComponent},
  {path: 'maps', component: MapsComponent},

];
