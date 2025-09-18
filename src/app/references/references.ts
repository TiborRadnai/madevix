import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-references',
  templateUrl: './references.html',
  styleUrls: ['./references.css'],
  standalone: true,
  imports: [CommonModule]
})
export class References {
  references = [
    { image: '/assets/images/references/mymadeira.webp', caption: 'www.mymadeira.hu' },
    { image: '/assets/images/references/hairflair.webp', caption: 'www.hairflair.de' },
    { image: '/assets/images/references/nimbusx.webp', caption: 'www.nimbus-x.com' },
    { image: '/assets/images/references/portuplay.webp', caption: 'www.portuplay.hu' },
    { image: '/assets/images/references/woodman.webp', caption: 'www.woodman.com' },
    // ...
  ];

  currentIndex = 0;

  get transformStyle(): string {
    return `translateX(-${this.currentIndex * 100}%)`;
  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.references.length;
  }

  prevSlide(): void {
    this.currentIndex = (this.currentIndex - 1 + this.references.length) % this.references.length;
  }
}
