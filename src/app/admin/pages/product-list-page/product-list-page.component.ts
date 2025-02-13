import { Component, OnInit } from '@angular/core';

import { adminService } from '../../services/admin.service';
import { Content, Product } from '../../interfaces/product.interface';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-product-list-page',
  templateUrl: './product-list-page.component.html',
  standalone: false
})
export class ProductListPageComponent implements OnInit{

  public products!: Content[];
  visible: boolean = false;
  public editProduct!: Content;

  constructor(
    private adminService: adminService,
    private messageService: MessageService
  ){}

  ngOnInit(): void {

    this.adminService.getProducts().subscribe(
      (response: Product) => {
        this.products = response.content;
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }

  getNameProduct( name :string): Content{

    this.adminService.getProductByName(name)
      .subscribe(
        (response: Product) => {
          console.log('Producto encontrado:', response.content[0]);
          this.editProduct = response.content[0]
        },
        (error) => {
          console.error('Error fetching product by name:', error);
        }
      );
      return this.editProduct;
  }


  onDelete( id: number ) {
    this.adminService.deleteProductById( id )
    .subscribe( wasDeleted =>{
      if ( wasDeleted ) {
        this.messageService.add({ severity: 'warn', summary: 'Eliminar', detail: 'Producto eliminado con éxito' });

        this.loadProducts();
      }
    });
  }

  loadProducts() {
    this.adminService.getProducts().subscribe((products) => {
      this.products = products.content;
    });
  }

  showDialog() {
    this.visible = true;
  }


}
