import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { PrimeNGModule } from '../prime-ng/prime-ng.module';
import { CardComponent } from './components/card/card.component';
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [
    LayoutPageComponent,
    ListPageComponent,
    ProductPageComponent,
    SearchPageComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    PrimeNGModule,
    SharedModule
],
  exports: [
    CardComponent,
  ]
})
export class ProductsModule { }
