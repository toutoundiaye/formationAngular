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
  constructor(private productService: ProductService) { }

  ngOnInit() {
  }

 public loadProduct() {
    //this.products = this.productService.getProducts();
    const productsData = JSON.parse(window.localStorage.getItem('listProducts'));
    this.products = productsData.products
 }

  public addProduct() {
    window.localStorage.setItem('listProducts', JSON.stringify(this);
  }
}
