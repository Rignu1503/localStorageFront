import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPagesComponent } from './pages/layout-pages/layout-pages.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ProductListPageComponent } from './pages/product-list-page/product-list-page.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutPagesComponent,
    children: [
      { path: 'products', component: ProductListPageComponent },
      { path: '**', redirectTo: 'products'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
