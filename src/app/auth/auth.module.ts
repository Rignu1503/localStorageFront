import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { PrimeNGModule } from '../prime-ng/prime-ng.module';
import { AdminRoutingModule } from '../admin/admin-routing.module';


@NgModule({
  declarations: [
    LayoutPageComponent,
    LoginPageComponent,

  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    PrimeNGModule,
    AdminRoutingModule
  ],
})
export class AuthModule { }
