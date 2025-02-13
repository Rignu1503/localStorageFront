import { Component, EventEmitter, Output } from '@angular/core';
import { SharedService } from '../../services/shared.service';


@Component({
  selector: 'app-product-header',
  templateUrl: './product-header.component.html',
  standalone: false
})
export class ProductHeaderComponent {

  @Output() onSearchValue = new EventEmitter<string>();

  constructor(private sharedService: SharedService) {}

  OnemitSearch(event: Event): void {

    const value = (event?.target as HTMLInputElement).value; // Obtiene el valor del input
    this.onSearchValue.emit( value );

    this.sharedService.updateSearchValue(value); // Actualiza el valor en el servicio
  }

}
