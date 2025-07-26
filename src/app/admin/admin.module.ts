import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AdminRoutingModule } from './admin-routing.module';

import { LayoutPagesComponent } from './pages/layout-pages/layout-pages.component';
import { CategoryPageComponent } from './pages/category-page/category-page.component';
import { SharedModule } from "../shared/shared.module";
import { PrimeNGModule } from '../prime-ng/prime-ng.module';
import { RouterModule } from '@angular/router';
import { MessageService } from 'primeng/api';
import { FormProductsComponent } from './components/form-products/form-products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { FormCategoryComponent } from './components/form-category/form-category.component';
import { SupplierPageComponent } from './pages/supplier-page/supplier-page.component';
import { FormSupplierComponent } from './components/form-supplier/form-supplier.component';


@NgModule({
   providers: [MessageService],
  declarations: [
    LayoutPagesComponent,
    CategoryPageComponent,
    ProductPageComponent,
    FormProductsComponent,
    FormCategoryComponent,
    SupplierPageComponent,
    FormSupplierComponent


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
