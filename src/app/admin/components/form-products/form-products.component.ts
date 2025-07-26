import { Component, Input, OnInit } from "@angular/core";
import { Category, ContentCategory } from "../../interfaces/category.interface";
import { adminService } from "../../services/admin.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Product, ContentProduct } from "../../interfaces/product.interface";
import { MessageService } from "primeng/api";
import { Router } from "@angular/router";


@Component({
  selector: 'app-form-products',
  templateUrl: './form-products.component.html',
  standalone: false
})
export class FormProductsComponent implements OnInit{

  public category!: ContentCategory[];
  public selectedCategory: number | null = null;
  public formProduct!: FormGroup;
  public addProduct!: Product;

  @Input() editproduct: ContentProduct | null = null;
  

  constructor(
    private adminService: adminService,
    private messageService: MessageService,
    private fb: FormBuilder,
    private router: Router

  ){}

  ngOnInit(): void {

    console.log("componente montado");

    this.adminService.getCategory().subscribe(
      ( response: Category ) =>{
        this.category = response.content;
      },( error ) => {
          console.error('Error fetching products:', error);

        }
    );

    if (this.editproduct) {

      this.formProduct.reset( this.editproduct );
    }else{

      this.formProduct = this.fb.group({
        name: ['', [Validators.required, Validators.minLength(3)], []],
        urlImage: ['', [Validators.required], []],
        description: ['', [Validators.required, Validators.maxLength(100)], []],
        price: ['', [Validators.required], []],
        barcode: ['', [Validators.required], []],
        stockCurrent: ['', [Validators.required, Validators.min(0)], []],
        stockMinimun: ['', [Validators.required, Validators.min(0)], []],
        categoryId: ['', [Validators.required], []],
      });

    }
  }

  //Agregar elementos al formulario para editar
  addFormProduct(): void{

    this.formProduct.reset( this.editproduct );

  }


  //Obtener producto actual
  get currentProduct(): ContentProduct {

    const product = this.formProduct.value;

    return product;

  }

  //Guardar producto
  onSave(): void{

    if(this.editproduct) this.formProduct.reset( this.editproduct );

    if (this.formProduct.invalid) {

      this.formProduct.markAllAsTouched();
      return;
    }

    this.adminService.AddProduct( this.currentProduct )
      .subscribe( product =>  {
        this.messageService.add({ severity: 'success', summary: 'Creado', detail: 'Producto creado con exito' });
      }
    );
    this.formProduct.reset();
    this.reloadComponent();

  }

  //Recargar componente
  reloadComponent(): void {
    const currentRoute = this.router.url;

    setTimeout(() => {
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate([currentRoute]);
      });
    }, 2000);
  }

  //Validaciones del formulario
  isValidField( field: string ): boolean | null{

    return this.formProduct.controls[field].errors
    && this.formProduct.controls[field].touched
  }

  getFieldError( field: string ){

    if( !this.formProduct.controls[field] ) return null;

    const errors = this.formProduct.controls[field].errors || {};

    for(const key of Object.keys(errors) ){

      switch (key) {
        case 'required':
          return 'Este campo es requerido';

        case 'minlength':
          return `Minimo ${ errors['minlength'].requiredLength } caracteres`
      }
    }
    return null;
  }



}
