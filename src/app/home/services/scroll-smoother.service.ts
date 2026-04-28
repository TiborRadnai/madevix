import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class ScrollSmootherService {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  async initGlobalSmoothScroll() {
    // SSR alatt semmi DOM, semmi window, semmi event listener
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    // DOM-os kódot csak böngészőben, lazy importtal húzzuk be
    const module = await import('./smooth-scroll-impl');
    module.initSmoothScroll();
  }
}
