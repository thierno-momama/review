import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from 'src/app/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{

  products: Product[] = products;
  product:  Product | undefined;

  constructor(private router: ActivatedRoute, private productService: ProductService){}

  ngOnInit(): void {
    const routeParams = Number(this.router.snapshot.paramMap.get('Id'));
    this.product = this.products.find((product: Product) => {
      return product.id === routeParams;
    });    
  }

  addToCart(product: Product){
    this.productService.addToCart(product);
    alert("Adding to card in successfully");
  }

}
