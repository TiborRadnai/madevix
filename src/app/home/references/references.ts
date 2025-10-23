// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
// import { TranslateModule } from '@ngx-translate/core';

// @Component({
//   selector: 'app-references',
//   templateUrl: './references.html',
//   styleUrls: ['./references.css'],
//   standalone: true,
//   imports: [CommonModule, TranslateModule]
// })
// export class References implements OnInit {
//   constructor(private sanitizer: DomSanitizer) {}

//   referencesRaw = [
//     { url: 'https://www.mymadeira.hu', caption: 'www.mymadeira.hu', type: 'live' },
//     { url: 'https://alakformalaspilisvorosvar.hu/', caption: 'www.alakformalaspilisvorosvar.hu', type: 'live' },
//     { url: 'https://tibchiripp.hu/hairflair/', caption: 'www.hairflair.de', type: 'demo' },
//     { url: 'https://tibchiripp.hu/nimbusx/', caption: 'www.nimbus-x.com', type: 'demo' },
//     { url: 'https://tibchiripp.hu/PortuPlay/', caption: 'www.portuplay.hu', type: 'demo' },
//     { url: 'https://tibchiripp.hu/woodman/', caption: 'www.woodman.com', type: 'demo' }
//   ];

//   references: { url: SafeResourceUrl; caption: string; type: string }[] = [];

//   currentIndex = 0;
//   totalSlides = 0;
//   disableTransition = false;
//   resetPending = false;
//   resetDirection: 'forward' | 'backward' | null = null;

//   touchStartX = 0;
//   touchEndX = 0;

//   ngOnInit(): void {
//     const sanitized = this.referencesRaw.map(item => ({
//       ...item,
//       url: this.sanitizer.bypassSecurityTrustResourceUrl(item.url)
//     }));

//     this.references = [...sanitized, ...sanitized, ...sanitized];
//     this.totalSlides = sanitized.length;
//     this.currentIndex = this.totalSlides;
//   }

//   get transformStyle(): string {
//     return `translateX(-${this.currentIndex * 100}%)`;
//   }

//   nextSlide() {
//     this.currentIndex++;
//     if (this.currentIndex === this.totalSlides * 2) {
//       this.resetPending = true;
//       this.resetDirection = 'forward';
//     }
//   }

//   prevSlide() {
//     this.currentIndex--;
//     if (this.currentIndex === this.totalSlides - 1) {
//       this.resetPending = true;
//       this.resetDirection = 'backward';
//     }
//   }

//   onTransitionEnd() {
//     if (this.resetPending) {
//       this.disableTransition = true;
//       this.currentIndex =
//         this.resetDirection === 'forward'
//           ? this.totalSlides
//           : this.totalSlides * 2 - 1;

//       setTimeout(() => {
//         this.disableTransition = false;
//         this.resetPending = false;
//         this.resetDirection = null;
//       }, 20);
//     }
//   }

//   getActiveDotIndex(): number {
//     return this.currentIndex % this.totalSlides;
//   }

//   onTouchStart(event: TouchEvent) {
//     this.touchStartX = event.changedTouches[0].screenX;
//   }

//   onTouchEnd(event: TouchEvent) {
//     this.touchEndX = event.changedTouches[0].screenX;
//     this.handleSwipe();
//   }

//   handleSwipe() {
//     const delta = this.touchEndX - this.touchStartX;
//     if (Math.abs(delta) > 50) {
//       delta > 0 ? this.prevSlide() : this.nextSlide();
//     }
//   }
// }
import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-references',
  templateUrl: './references.html',
  styleUrls: ['./references.css'],
  imports: [CommonModule, TranslateModule],
  standalone: true
})
export class References implements OnInit {
referencesRaw = [
  {
    name: 'myMadeira',
    url: 'https://www.mymadeira.hu',
    image: '/assets/images/references/mymadeira.webp',
    caption: 'www.mymadeira.hu',
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

  ngOnInit(): void {}

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
      this.currentIndex = this.resetDirection === 'forward'
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

