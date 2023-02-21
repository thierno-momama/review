import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/Product';

@Component({
  selector: 'app-product-notify',
  templateUrl: './product-notify.component.html',
  styleUrls: ['./product-notify.component.css']
})
export class ProductNotifyComponent {

  @Input() product!: Product;


  @Output() onNotify = new EventEmitter();

}
