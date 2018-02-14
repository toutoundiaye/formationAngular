import { Component, OnInit } from '@angular/core';
import {Product} from "../classe/product";


@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  liste: Array<Product> = [];
  product = new Product();

  constructor() { }

  ngOnInit() { }
  index = -1;
  button = 'Ajouter';
  isSelected = false;

  public onSubmit(){
    if (this.isSelected){
      this.liste[this.index] = this.product;
    }else {
    this.liste.push(this.product);
    }

    this.index = -1;
    this.isSelected = false;
    this.button = 'Ajouter';
    this.product = new Product();
  }

  public update(index, event) {
    event.preventDefault();
    this.product = new Product(this.liste[index].name, this.liste[index].price);
    this.index = index;
    this.isSelected = true;
    this.button = 'Modifier';
  }

  public remove(index, event){
    event.preventDefault();
    event.stopImmediatePropagation();
    this.liste.splice(index, 1);
  }
}
