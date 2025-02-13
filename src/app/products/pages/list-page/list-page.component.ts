import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../interfaces/product.interface'; // Importa la interfaz Product
import { SharedService } from '../../../shared/services/shared.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styles: ``,
  standalone: false,
})
export class ListPageComponent implements OnInit {

  public products!: Product;

  public productsSearch! : Product;

  searchValue: string = '';

  constructor(
    private productService: ProductService,
    private sharedService: SharedService,

  ) {}

  ngOnInit(): void {

    this.productService.getProducts().subscribe(
      (response: Product) => {
        this.products = response;
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );


    this.sharedService.searchValue$.subscribe((value) => {
      this.searchValue = value;
      console.log('Valor del input:', this.searchValue);


      this.searchProduct(this.searchValue);

    });

  }


  searchProduct(name: string): void {
    if (name) {
      this.productService.getProductByName(name)
      .subscribe(
        (response: Product) => {

          console.log('Producto encontrado:', response);
           this.products = response;
        },
        (error) => {
          console.error('Error fetching product by name:', error);
        }
      );
    }

  }

reloadPage(): void {
  window.location.reload();
}






}
