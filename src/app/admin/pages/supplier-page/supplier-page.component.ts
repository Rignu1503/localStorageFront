import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { adminService } from '../../services/admin.service';
import { MessageService } from 'primeng/api';
import { ContentSupplier, Supplier } from '../../interfaces/supplier.interface';

@Component({
  selector: 'app-supplier-page',
  templateUrl: './supplier-page.component.html',
  standalone: false,

})
export class SupplierPageComponent implements OnInit {

  public suppliers!: ContentSupplier[];
  public visible: boolean = false;
  public editSupplier!: ContentSupplier;

  constructor(
    private adminService: adminService,
    private messageService: MessageService
  ){}

  ngOnInit(): void {

    this.adminService.getSuppliers().subscribe(
      (response: Supplier) => {
        this.suppliers = response.content;
      },
      (error) => {
        console.error('Error fetching suppliers:', error);
      }
    );
  }

  onDelete( id: number ) {
    this.adminService.deleteSupplier( id ).subscribe(
      (response) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Supplier deleted successfully',
        });
        this.ngOnInit();
      },
      (error) => {
        console.error('Error deleting supplier:', error);
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Error deleting supplier',
        });
      }
    );
  }

  getSupplierById( id: number ): ContentSupplier {
    this.adminService.getSupplierById( id ).subscribe(
      (response: ContentSupplier) => {
        this.editSupplier = response;
        console.log('Supplier found:', this.editSupplier);

      },
      (error) => {
        console.error('Error fetching supplier by id:', error);
      }
    );
    return this.editSupplier;
  }

  showDialog() {
    this.visible = true;
  }

}
