import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  constructor(private el: ElementRef) {
  }
  
  @HostListener('mouseenter') onMouseEnter() {
    this.changeColor('gray');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.changeColor("")
  }
  changeColor(color: string) {

    this.el.nativeElement.style.backgroundColor = color;
  }

}
