import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../../interfaces/product.interface';

@Component({
  selector: 'products-card',
  templateUrl: './card.component.html',
  standalone: false,
})
export class CardComponent {

  @Input() product!: Content;

  constructor() {}


}
