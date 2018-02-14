import { Component, OnInit } from '@angular/core';
import {ProductService} from "../product.service";
import {Product} from "../classe/product";

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css'],
  providers: [ProductService]
})
export class ServiceComponent implements OnInit {

  products: Array<Product> = [];
  product = new Product();

  constructor(private productService: ProductService) { }

  ngOnInit() {
  }

  public loadProduct() {
    this.products = this.productService.getProducts();  
  }
   
  public addProduct(){
    if (this.product) {
      this.products.push(new Product(this.product.name, this.product.price));
      window.localStorage.setItem('listProducts', JSON.stringify(this.product));
      this.product = new Product();
    }
  }

  public removeProduct(id, event: MouseEvent): void {
    event.preventDefault();
    this.products.splice(id, 1)
  }
}
