import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class ScrollSmootherService {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  initGlobalSmoothScroll() {
    if (isPlatformBrowser(this.platformId)) {
    window.addEventListener('wheel', (e) => {
    const target = e.target as HTMLElement;

    // Ellenőrizzük, hogy van-e scrollozható szülőelem
    let scrollableParent = target;
    let allowNativeScroll = false;

    while (scrollableParent && scrollableParent !== document.body) {
        const style = getComputedStyle(scrollableParent);
        const overflowY = style.overflowY;

        const canScroll = (
        (overflowY === 'auto' || overflowY === 'scroll') &&
        scrollableParent.scrollHeight > scrollableParent.clientHeight
        );

        if (canScroll) {
        allowNativeScroll = true;
        break;
        }

        scrollableParent = scrollableParent.parentElement!;
    }

    if (!allowNativeScroll) {
        e.preventDefault();
        window.scrollBy({
        top: e.deltaY * 1.5,
        behavior: 'smooth'
        });
    }
    }, { passive: false });
    }
  }
}
