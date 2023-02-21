import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  cards: Product[] = [];

  constructor(private productService: ProductService){}

  ngOnInit(): void {
    this.cards = this.productService.getItems();
  }

}
