import { Injectable } from '@angular/core';
import {Product} from "./classe/product";

@Injectable()
export class ProductService {

  products: Array<Product> = [
    new Product('Pomme', 1.50),
    new Product('Poire', 2.50),
    new Product('Cerise', 7.50),
    new Product('Banane', 1.90),
    new Product('Télé Samsung', 1299.50),
    new Product('PS4', 391.50),
  ];

  constructor() { }

  public getProducts(): Array<Product> {
    return this.products;
  }

}
