import { Component, OnInit } from '@angular/core';
import {ProductService} from "./product.service";
import {Product} from "./classe/product";

@Component({
  selector: 'app-service',
  templateUrl: './service/service.component.html',
  styleUrls: ['./service/service.component.css'],
  providers: [ProductService]
})
export class ServiceComponent implements OnInit {

  products: Array<Product> = [];
  product: Product = new Product();

  constructor(private productService: ProductService) { }

  ngOnInit() {
  }

  public loadProduct() {
    this.products.splice (0, this.products.length);
    this.products = this.productService.getProducts();
  }

 /* public addProduct(){
    if (this.product) {
      this.products.push(new Product(this.product.name, this.product.price));
      window.localStorage.setItem('listProducts', JSON.stringify(this.product));
      this.product = new Product();
    }
  }*/

 public saveProduct() {
   this.productService.add(this.product);
   this.product = new Product();
 }

 /* public removeProduct(id, event: MouseEvent): void {
    event.preventDefault();
    this.products.splice(id, 1)
  }*/

 public deleteProduct(i: number){
   this.productService.remove(i);
 }
}
