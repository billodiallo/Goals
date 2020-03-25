import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appStrikethrough]'
})
export class StrikethroughDirective {
  constructor(private elem:ElementRef){ }

  private textDeco(action:string){
    this.elem.nativeElement.style.textDecoration=action;

  }

}
