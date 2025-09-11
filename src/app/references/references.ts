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
    { image: '/assets/images/bg-image1.jpg', caption: 'www.beispielseite1.de' },
    { image: '/assets/images/bg-choose-nexora.jpg', caption: 'www.beispielseite2.de' },
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
