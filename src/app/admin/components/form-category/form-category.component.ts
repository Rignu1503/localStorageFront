import { Component, OnInit } from '@angular/core';
import { adminService } from '../../services/admin.service';
import { MessageService } from 'primeng/api';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContentCategory } from '../../interfaces/category.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-category',
  templateUrl: './form-category.component.html',
  standalone: false,
})
export class FormCategoryComponent implements OnInit {

  formCategory: FormGroup;

  constructor(
    private adminService: adminService,
    private messageService: MessageService,
    private fb: FormBuilder,
    private router: Router
  ) {

    this.formCategory = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  ngOnInit(): void {


  }

    get currentCategory(): ContentCategory {
      const product = this.formCategory.value;
      return product;
    }

  onSave(): void{

    if ( this.formCategory.invalid ) return;

    this.adminService.addCategory ( this.currentCategory )
    .subscribe( category => {
        this.messageService.add({ severity: 'success', summary: 'Creado', detail: 'Categoria creada con exito' });
      }
    );

    this.formCategory.reset();
   // this.reloadComponent();

  }

  reloadComponent(): void {
    const currentRoute = this.router.url;

    setTimeout(() => {
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate([currentRoute]);
      });
    }, 3000);
  }
}
