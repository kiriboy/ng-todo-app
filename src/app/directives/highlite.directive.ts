import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlite]'
})
export class HighliteDirective implements OnInit {

  @Input() hightColor: string = 'red'
  @Input() defaultColor: string = 'transparent'


  constructor() { }

  ngOnInit(): void {
      this.backgroundColor = this.defaultColor
  }

  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent'

  @HostListener('mouseenter') mouseover(){
    // this.render.setStyle(this.el.nativeElement,'background-color','#fe2154')
    this.backgroundColor = this.hightColor;
  }
  @HostListener('mouseleave') mouseleave(){
    // this.render.setStyle(this.el.nativeElement,'background-color','transparent')
    this.backgroundColor = this.defaultColor
  }


}
