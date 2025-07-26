import { Component, OnInit } from '@angular/core';
import { adminService } from '../../services/admin.service';
import { Category, ContentCategory } from '../../interfaces/category.interface';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'admin-category-page',
  templateUrl: './category-page.component.html',

  standalone: false
})
export class CategoryPageComponent implements OnInit {

  public visible: boolean = false;
  public categories!: ContentCategory[];

  constructor(
    private adminService: adminService,
    private messageService: MessageService
  ){}

  showDialog() {
    this.visible = true;
  }

  loadCategory() {
    this.adminService.getCategory().subscribe(
      ( response: Category ) =>{
        this.categories = response.content
      });
  }

  ngOnInit(): void {

    this.adminService.getCategory().subscribe(
      ( response: Category ) =>{
        this.categories = response.content
      },
      (error) => {
        console.error('Error fetching categories:', error);
      }
    )
  }

  onDelete(id: number){
    this.adminService.deleteCategory( id )
    .subscribe( wasDeleted =>{
      if ( wasDeleted ) {
        this.messageService.add({ severity: 'warn', summary: 'Eliminar', detail: 'Producto eliminado con éxito' });

        this.loadCategory();
      }
    });

  }

  onUpdate(category: ContentCategory){

  }

}
