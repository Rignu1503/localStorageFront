import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { adminService } from '../../services/admin.service';
import { ContentProduct, Product } from '../../interfaces/product.interface';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  standalone: false
})
export class ProductPageComponent implements OnInit{

  public products!: ContentProduct[];
  public visible: boolean = false;
  public editProduct: ContentProduct | null = null;

  @Output() editCLick = new EventEmitter<boolean>();


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


  handleClick( productName: string ) {
    this.editCLick.emit( true );
    this.showDialog();
    this.getNameProduct(productName);
  }

  getNameProduct( name :string): ContentProduct | null {

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
    this.editProduct = null;
  }


}
