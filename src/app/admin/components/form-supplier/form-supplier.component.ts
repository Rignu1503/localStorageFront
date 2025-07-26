import { Component,  Input,  OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { adminService } from '../../services/admin.service';
import { ContentSupplier, Supplier } from '../../interfaces/supplier.interface';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-from-supplier',
  templateUrl: './form-supplier.component.html',
  standalone: false,
})
export class FormSupplierComponent implements OnInit {

  public formSupplier!: FormGroup;

  @Input() editSupplier: ContentSupplier | null = null;

  constructor(
    private adminService: adminService,
    private messageService: MessageService,
    private fb: FormBuilder,
    private router: Router
) {

}

  ngOnInit(): void {

    if( this.editSupplier ) {
      this.formSupplier.reset( this.editSupplier );
    }else{
      this.formSupplier = this.fb.group({
        name: ['', [ Validators.required ]],
        email: ['', [ Validators.required ]],
        phone: ['', [ Validators.required ]],
        address: ['', [ Validators.required ]],
      });

    }
  }






  //obtener proveedor
  get currentSupplier(): ContentSupplier{

    const supplier = this.formSupplier.value;
    return supplier;
  }

  //guardar proveedor
  onSave(): void {

    if( this.editSupplier ) this.formSupplier.reset( this.editSupplier );

    if( this.formSupplier.invalid ){

      this.formSupplier.markAllAsTouched();
      return;
    }
    this.adminService.addSupplier( this.currentSupplier ).subscribe(
      ( response: Supplier ) => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Proveedor agregado correctamente' });

      }
    );
    this.formSupplier.reset();
    this.reloadComponent();
  }

  //recargar componente
  reloadComponent(): void {
    const currentRoute = this.router.url;

    setTimeout(() => {
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate([currentRoute]);
      });
    }, 2000);
  }


  //Validaciones formulario
  isValidField( field: string ): boolean | null{

    return this.formSupplier.controls[field].errors
    && this.formSupplier.controls[field].touched
  }

  //obtener errores de los campos
  getFieldError( field: string ){

    if( !this.formSupplier.controls[field] ) return null;

    const errors = this.formSupplier.controls[field].errors || {};

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




