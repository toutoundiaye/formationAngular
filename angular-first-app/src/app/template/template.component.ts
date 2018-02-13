import { Component } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent  {

  maj = 'JE SUIS UN TEXTE EN MAJUSCULE';
  min = 'je suis un texte en minuscule';

  title = 'Je suis un titre';

  date = new Date();

  pi = 3.141592;
  tiers = 1 / 3;
  seize = 1 / 16;

  price = 9999.99;

  obj = {nom: 'Kenobi', prenom:'Obiwan', pseudo: 'Ben', profession: 'Jedi'};

  liste = [
    'Jonathan', 'thomas', 'Boris', 'Omer', 'Elise', 'Toutou', 'Yaya',
    'Johan', 'Vincent', 'François', 'Maxence', 'Manuel', 'Arnaud', 'Jenifer','Stephane'
  ];

  lang = 'en';

  nbElt = 5;
  start = 0;
  end = this.nbElt;

  index = 1;
  total = Math.ceil(this.liste.length / this.nbElt);

  qte = [3,5,10];

  user = null; //{nom: 'Kenobi', prenom:'Obiwan', pseudo: 'Ben', profession: 'Jedi'}

  isVisible = false;
  hasClass = true;
  mode = 'vertical';

  public changeLocale(lang: string, event: MouseEvent): void {
    event.preventDefault();
    this.lang = lang;
  }

  public prev(){
   if (this.index !== 1){
     this.start -= this.nbElt;
     this.end -= this.nbElt;
     this.index--;
   }
  }

  public next(){
    if (this.index !== this.total){
      this.start += this.nbElt;
      this.end += this.nbElt;
      this.index++;
    }
  }

  public changeValue(){
    this.nbElt = +this.nbElt; //+ transforme la valeur en un entier c'est l'equivalent d'un parseInt

    this.end = this.nbElt;
    this.start = 0;

    this.index = 1;
    this.total = Math.ceil(this.liste.length / this.nbElt);
  }
}
