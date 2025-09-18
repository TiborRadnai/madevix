import { Directive, ElementRef, Renderer2, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[fadeOnScroll]'
})
export class FadeOnScrollDirective implements OnInit {
  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver(([entry]) => {
          if (entry.isIntersecting) {
            this.renderer.addClass(this.el.nativeElement, 'fade-up');
            observer.unobserve(this.el.nativeElement);
          }
        }, { threshold: 0.1 });

        observer.observe(this.el.nativeElement);
      }
    }
  }
}

