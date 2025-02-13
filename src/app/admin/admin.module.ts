import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AdminRoutingModule } from './admin-routing.module';

import { LayoutPagesComponent } from './pages/layout-pages/layout-pages.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { SharedModule } from "../shared/shared.module";
import { PrimeNGModule } from '../prime-ng/prime-ng.module';
import { RouterModule } from '@angular/router';
import { ProductListPageComponent } from './pages/product-list-page/product-list-page.component';
import { MessageService } from 'primeng/api';
import { FormProductsComponent } from './components/form-products/form-products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
   providers: [MessageService],
  declarations: [
    LayoutPagesComponent,
    ProductPageComponent,
    ProductListPageComponent,
    FormProductsComponent,


  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    PrimeNGModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],

})
export class AdminModule { }
