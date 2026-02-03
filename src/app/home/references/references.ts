import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { SeoService } from '../../core/seo.service';

@Component({
  selector: 'app-references',
  templateUrl: './references.html',
  styleUrls: ['./references.css'],
  imports: [CommonModule, TranslateModule],
  standalone: true
})
export class References implements OnInit {

  constructor(private seo: SeoService) {}

  referencesRaw = [
    {
      name: 'Madeirise',
      url: 'https://www.madeirise.com',
      image: '/assets/images/references/madeirise.webp',
      caption: 'www.madeirise.com',
      type: 'live'
    },
    {
      name: 'Alakformálás Pilisvörösvár',
      url: 'https://alakformalaspilisvorosvar.hu/',
      image: '/assets/images/references/alakformalas.webp',
      caption: 'www.alakformalaspilisvorosvar.hu',
      type: 'live'
    },
    {
      name: 'Hairflair',
      url: 'https://tibchiripp.hu/hairflair/',
      image: '/assets/images/references/hairflair.webp',
      caption: 'www.hairflair.de',
      type: 'demo'
    },
    {
      name: 'Nimbus-X',
      url: 'https://tibchiripp.hu/nimbusx/',
      image: '/assets/images/references/nimbusx.webp',
      caption: 'www.nimbus-x.com',
      type: 'demo'
    },
    {
      name: 'PortuPlay',
      url: 'https://tibchiripp.hu/PortuPlay/',
      image: '/assets/images/references/portuplay.webp',
      caption: 'www.portuplay.hu',
      type: 'demo'
    },
    {
      name: 'Woodman',
      url: 'https://tibchiripp.hu/woodman/',
      image: '/assets/images/references/woodman.webp',
      caption: 'www.woodman.com',
      type: 'demo'
    }
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
  }

  get transformStyle(): string {
    return `translateX(-${this.currentIndex * 100}%)`;
  }

  nextSlide() {
    this.currentIndex++;
    if (this.currentIndex === this.totalSlides * 2) {
      this.resetPending = true;
      this.resetDirection = 'forward';
    }
  }

  prevSlide() {
    this.currentIndex--;
    if (this.currentIndex === this.totalSlides - 1) {
      this.resetPending = true;
      this.resetDirection = 'backward';
    }
  }

  onTransitionEnd() {
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
    return this.currentIndex % this.totalSlides;
  }

  onTouchStart(event: TouchEvent) {
    this.touchStartX = event.changedTouches[0].screenX;
  }

  onTouchEnd(event: TouchEvent) {
    this.touchEndX = event.changedTouches[0].screenX;
    const delta = this.touchEndX - this.touchStartX;
    if (Math.abs(delta) > 50) {
      delta > 0 ? this.prevSlide() : this.nextSlide();
    }
  }
}
