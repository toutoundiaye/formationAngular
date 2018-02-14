export class Product {

  private _name: string;
  private _price: number;


  constructor(name?: string, price?: number) { //? pour specifier que c'est optionnel
    this._name = name;
    this._price = price;
  }


  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    this._price = value;
  }
}
