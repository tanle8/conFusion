/**
 * - Renderer2 - Allows us to automatically adapt itself to the appropriate platform on which
 *               the rendering of this view is being done.
 * - HostListener - HostListener listens to mouse movements of the screen and appropriately
 *                  responde in those circumstances.
 */
import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef,
              private renderer: Renderer2) { }

  /**
   * When the mouse moves into that region, this `highlight` class
   * will be added to that grid item
   */
  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.addClass(this.el.nativeElement, 'highlight');
  }

  /**
   * When the mouse leaves that particular grid item, the `hightlight` class
   * will be removed from the grid item
   */
  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeClass(this.el.nativeElement, 'highlight');
  }

}
