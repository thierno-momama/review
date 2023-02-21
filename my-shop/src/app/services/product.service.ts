import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  items: Product[] = [];

  constructor(private http: HttpClient) { }

  addToCart(item: Product){
    return this.items.push(item);
  }

  getItems(){
    return this.items;
  }

  cleanIteam(){
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  }
  
}
