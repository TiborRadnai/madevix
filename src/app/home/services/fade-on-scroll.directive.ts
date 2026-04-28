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
    // SSR alatt semmi ne fusson
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    // Biztonságos window referencia
    const win = typeof window !== 'undefined' ? window : null;
    if (!win) return;

    // IntersectionObserver ellenőrzése SSR-biztos módon
    const hasObserver = typeof win.IntersectionObserver !== 'undefined';
    if (!hasObserver) return;

    const observer = new win.IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        this.renderer.addClass(this.el.nativeElement, 'fade-up');
        observer.unobserve(this.el.nativeElement);
      }
    }, { threshold: 0.1 });

    observer.observe(this.el.nativeElement);
  }
}
