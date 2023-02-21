import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit{

  shippingCosts!: Observable<{ type: string, price: number }[]>;

  constructor(private productService: ProductService){}

  ngOnInit(): void {

    this.shippingCosts =  this.productService.getShippingPrices();

  }

}
