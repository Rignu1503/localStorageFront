import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { PrimeNGModule } from '../prime-ng/prime-ng.module';
import { AdminRoutingModule } from '../admin/admin-routing.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    LayoutPageComponent,
    LoginPageComponent,

  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    PrimeNGModule,
    AdminRoutingModule,
    RouterModule
  ],
})
export class AuthModule { }
