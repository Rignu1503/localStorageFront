import { NgModule } from '@angular/core';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';
import { ProductHeaderComponent } from './components/product-header/product-header.component';
import { PrimeNGModule } from '../prime-ng/prime-ng.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AdminNavComponent } from './components/admin-nav/admin-nav.component';
import { AdminSidebarComponent } from './components/admin-sidebar/admin-sidebar.component';


@NgModule({
  declarations: [
    Error404PageComponent,
    ProductHeaderComponent,
    AdminNavComponent,
    AdminSidebarComponent
  ],
  imports: [
    PrimeNGModule,
    RouterModule,
    CommonModule
  ],
  exports: [
    Error404PageComponent,
    ProductHeaderComponent,
    AdminNavComponent,
    AdminSidebarComponent
  ]
})
export class SharedModule { }
