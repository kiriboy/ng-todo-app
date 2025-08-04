import { Directive, ElementRef, Input, Renderer2, OnChanges, SimpleChanges, inject, HostListener } from '@angular/core';

@Directive({
  selector: '[appUpdateTodoStyle]'
})

// implements OnChanges in order to use ngOnChanges
export class UpdateTodoStyleDirective implements OnChanges {


  @Input() isComplete: boolean = false;

  // constructor(private el: ElementRef, private renderer: Renderer2) {}
  private el = inject(ElementRef)
  private renderer = inject(Renderer2)

  // simpleChanges gives if any changes made on inputs. 
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isComplete']) {
      if (this.isComplete) {
        this.renderer.setStyle(this.el.nativeElement, 'text-decoration','line-through');
        this.renderer.setStyle(this.el.nativeElement, 'background-color','#d3f9d8');
        this.renderer.setStyle(this.el.nativeElement, 'color','#6c757d');
      } else {
        this.renderer.setStyle(this.el.nativeElement, 'text-decoration','none');
        this.renderer.setStyle(this.el.nativeElement, 'background-color','#fff');
        this.renderer.setStyle(this.el.nativeElement, 'color','#000');
      }
    }
  }
}
