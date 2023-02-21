import { Component, OnInit } from '@angular/core';
import { Product, products } from 'src/app/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{

  productLists: Product[] = products;

  constructor(){}

  ngOnInit(): void {
    
  }

  share(product: Product){
    window.alert("You shared this..."+product.name);
  }
  
  notify(product: Product){
    window.alert("You Notify for..."+product.name);

  }

}
