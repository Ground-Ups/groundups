import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[gsButton]'
})
export class ButtonDirective implements OnChanges {

  @Input()
  color: any;

  constructor(
    private element: ElementRef
  ) { }
  ngOnChanges(changes: SimpleChanges): void {
    this.element.nativeElement.style.backgroundColor = this.color;
  }
}
