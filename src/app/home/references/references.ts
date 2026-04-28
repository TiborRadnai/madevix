import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { SeoService } from '../../core/seo.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-references',
  templateUrl: './references.html',
  styleUrls: ['./references.css'],
  imports: [CommonModule, TranslateModule],
  standalone: true
})
export class References implements OnInit {

  isBrowser = false;

  constructor(
    private seo: SeoService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  referencesRaw = [
    {
      name: 'Madeirise',
      url: 'https://www.madeirise.com',
      image: '/assets/images/references/madeirise.png',
      caption: 'www.madeirise.com',
      type: 'live'
    },
    {
      name: 'Alakformálás Pilisvörösvár',
      url: 'https://alakformalaspilisvorosvar.hu/',
      image: '/assets/images/references/alakformalas.png',
      caption: 'www.alakformalaspilisvorosvar.hu',
      type: 'live'
    },
    {
      name: 'Hairflair',
      url: 'https://tibchiripp.hu/hairflair/',
      image: '/assets/images/references/hairflair.png',
      caption: 'www.hairflair.de',
      type: 'demo'
    },
    {
      name: 'Nimbus-X',
      url: 'https://tibchiripp.hu/nimbusx/',
      image: '/assets/images/references/nimbusx.png',
      caption: 'www.nimbus-x.com',
      type: 'demo'
    },
    {
      name: 'PortuPlay',
      url: 'https://tibchiripp.hu/PortuPlay/',
      image: '/assets/images/references/portuplay.png',
      caption: 'www.portuplay.hu',
      type: 'demo'
    },
  ];

  references = [...this.referencesRaw, ...this.referencesRaw, ...this.referencesRaw];
  totalSlides = this.referencesRaw.length;
  currentIndex = this.totalSlides;
  disableTransition = false;
  resetPending = false;
  resetDirection: 'forward' | 'backward' | null = null;

  touchStartX = 0;
  touchEndX = 0;

  ngOnInit(): void {
    this.seo.updateMeta('home/references');

    // SSR alatt semmi slider logika nem fusson
    if (!this.isBrowser) return;
  }

  get transformStyle(): string {
    if (!this.isBrowser) return '';
    return `translateX(-${this.currentIndex * 100}%)`;
  }

  nextSlide() {
    if (!this.isBrowser) return;
    this.currentIndex++;
    if (this.currentIndex === this.totalSlides * 2) {
      this.resetPending = true;
      this.resetDirection = 'forward';
    }
  }

  prevSlide() {
    if (!this.isBrowser) return;
    this.currentIndex--;
    if (this.currentIndex === this.totalSlides - 1) {
      this.resetPending = true;
      this.resetDirection = 'backward';
    }
  }

  onTransitionEnd() {
    if (!this.isBrowser) return;

    if (this.resetPending) {
      this.disableTransition = true;
      this.currentIndex =
        this.resetDirection === 'forward'
          ? this.totalSlides
          : this.totalSlides * 2 - 1;

      setTimeout(() => {
        this.disableTransition = false;
        this.resetPending = false;
        this.resetDirection = null;
      }, 20);
    }
  }

  getActiveDotIndex(): number {
    if (!this.isBrowser) return 0;
    return this.currentIndex % this.totalSlides;
  }

  onTouchStart(event: TouchEvent) {
    if (!this.isBrowser) return;
    this.touchStartX = event.changedTouches[0].screenX;
  }

  onTouchEnd(event: TouchEvent) {
    if (!this.isBrowser) return;
    this.touchEndX = event.changedTouches[0].screenX;
    const delta = this.touchEndX - this.touchStartX;
    if (Math.abs(delta) > 50) {
      delta > 0 ? this.prevSlide() : this.nextSlide();
    }
  }
}
