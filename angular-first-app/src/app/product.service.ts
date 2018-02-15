import { Injectable } from '@angular/core';
import {Product} from "./classe/product";

@Injectable()
export class ProductService {

  products: Array<Product> = [];

  /* products: Array<Product> = [
     new Product('Pomme', 1.50),
     new Product('Poire', 2.50),
     new Product('Cerise', 7.50),
     new Product('Banane', 1.90),
     new Product('Télé Samsung', 1299.50),
     new Product('PS4', 391.50),
   ];*/

  constructor() {
  }

  public getProducts(): Array<Product> {
    if (JSON.parse(localStorage.getItem('listProducts')) != null
      && JSON.parse(localStorage.getItem('listProducts')) != undefined) {
      for (const product of JSON.parse(localStorage.getItem('listProducts'))) {
        this.products.push(new Product(product._name, product._price));
      }
    }
    return this.products;
  }


  public add(product: Product) {
    this.products.push(product);
    this.save();
  }

  public remove(i: number) {
    this.products.splice(i, 1)
    this.save();
  }

  private save() {
    localStorage.setItem('listProducts', JSON.stringify(this.products));
  }
}
