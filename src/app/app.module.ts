import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import {NgxPermissionsModule} from 'ngx-permissions';
import {UsersService} from './services/users/users.service';
import {NgxLoadingModule} from 'ngx-loading';
import {SweetAlert2Module} from '@sweetalert2/ngx-sweetalert2';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    NgxPermissionsModule.forRoot(),
    NgxLoadingModule.forRoot({}),
    SweetAlert2Module.forRoot()
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent
  ],
  providers: [ UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
