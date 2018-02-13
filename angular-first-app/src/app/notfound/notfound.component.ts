import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notfound',
  template: `
    <header>
      <h2>404 - Not Found</h2>
    </header>
    <p class="lead text-warning text center">
      Il semble que cette page n'existe pas.
    </p>
    <p class="text-center">
      <a [routerLink]="['/home']">Revenir à l'accueil</a>
    </p>
  `,
  styles: []
})
export class NotfoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
