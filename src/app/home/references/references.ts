import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-references',
  templateUrl: './references.html',
  styleUrls: ['./references.css'],
  standalone: true,
  imports: [CommonModule]
})
export class References implements OnInit {
  constructor(private sanitizer: DomSanitizer) {}

  referencesRaw = [
    { url: 'https://www.mymadeira.hu', caption: 'www.mymadeira.hu', type: 'live' },
    { url: 'https://alakformalaspilisvorosvar.hu/', caption: 'www.alakformalaspilisvorosvar.hu', type: 'live' },
    { url: 'https://tibchiripp.hu/hairflair/', caption: 'www.hairflair.de', type: 'demo' },
    { url: 'https://tibchiripp.hu/nimbusx/', caption: 'www.nimbus-x.com', type: 'demo' },
    { url: 'https://tibchiripp.hu/PortuPlay/', caption: 'www.portuplay.hu', type: 'demo' },
    { url: 'https://tibchiripp.hu/woodman/', caption: 'www.woodman.com', type: 'demo' }
  ];

  references: { url: SafeResourceUrl; caption: string; type: string }[] = [];

  currentIndex = 0;
  totalSlides = 0;
  disableTransition: boolean = false; // 🔧 HIBA JAVÍTVA
  resetPending: boolean = false;
  resetDirection: 'forward' | 'backward' | null = null;

  ngOnInit(): void {
    const sanitized = this.referencesRaw.map(item => ({
      ...item,
      url: this.sanitizer.bypassSecurityTrustResourceUrl(item.url)
    }));

    this.references = [
      ...sanitized,
      ...sanitized,
      ...sanitized
    ];

    this.totalSlides = sanitized.length;
    this.currentIndex = this.totalSlides;
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

      if (this.resetDirection === 'forward') {
        this.currentIndex = this.totalSlides;
      } else if (this.resetDirection === 'backward') {
        this.currentIndex = this.totalSlides * 2 - 1;
      }

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

}
