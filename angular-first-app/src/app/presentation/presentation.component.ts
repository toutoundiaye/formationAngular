import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent {

  name = 'John Doe';

  product = { name:'Pommes', price:12.90 };

  message = null;

  liste = ['Jean', 'Arthur','Jeanne','Sophie', 'Alice'];

  public uppercase(chaine:string):string {
    return chaine.toUpperCase();
  }

  public clicked():void {
    alert('Bravo !');
  }

  public showMessage(id: string, event: MouseEvent) {
    event.preventDefault();
    const html: Element = document.querySelector(id);  //bad habit
    if (html instanceof HTMLElement) {
      html.style.display = 'block';
    }
  }

  public showModelMessage(): void {
    alert(this.message);
  }

}
