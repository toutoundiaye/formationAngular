import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input('appHighlight') color: string;

  constructor(private markup: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter(){
    this.highlight(this.color || 'red');
  }


  @HostListener('mouseleave') onMouseLeave(){
    this.highlight(null);
  }

  private highlight(color: string) {
    this.markup.nativeElement.style.backgroundColor = color;
  }
}
