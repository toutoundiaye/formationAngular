import { Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: '[appAutofocus]'
})
export class AutofocusDirective implements OnInit{

  constructor(private markup: ElementRef) {}

  ngOnInit() {
    this.markup.nativeElement.focus();
  }

}
