import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPagesComponent } from './pages/layout-pages/layout-pages.component';
import { CategoryPageComponent } from './pages/category-page/category-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { SupplierPageComponent } from './pages/supplier-page/supplier-page.component';



const routes: Routes = [
  {
    path: '',
    component: LayoutPagesComponent,
    children: [
      { path: 'categories', component: CategoryPageComponent },
      { path: 'products', component: ProductPageComponent },
      { path: 'suppliers', component: SupplierPageComponent },
      { path: '**', redirectTo: 'products'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
