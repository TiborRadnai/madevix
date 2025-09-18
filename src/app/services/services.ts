import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FadeOnScrollDirective } from './fade-on-scroll.directive';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, FadeOnScrollDirective],
  templateUrl: './services.html',
  styleUrl: './services.css'
})
export class Services {
  services = [
    {
      icon: 'fa-solid fa-laptop-code',
      title: 'Egyedi weboldal fejlesztés',
      description: 'Modern, gyors és reszponzív weboldalak Angular és Bootstrap alapokon.',
      image: '/assets/images/services/webDevelopment.webp'
    },
    {
      icon: 'fa-solid fa-mobile-screen-button',
      title: 'Mobiloptimalizálás',
      description: 'Minden eszközön jól működő, letisztult felhasználói élmény.',
      image: '/assets/images/services/responsivity.webp'
    },
    {
      icon: 'fa-solid fa-chart-line',
      title: 'Google Analytics & Search Console',
      description: 'Látogatottság, viselkedés, keresési teljesítmény — mindent mérünk.',
      image: '/assets/images/services/searchEngineOptimalisation.webp'
    },
    {
      icon: 'fa-solid fa-image',
      title: 'Képszerkesztés & jogtiszta tartalom',
      description: 'Envato hozzáféréssel prémium képek és sablonok, igény szerint szerkesztve.',
      image: '/assets/images/services/photoEditing.webp'
    },
    {
      icon: 'fa-solid fa-globe',
      title: 'Domain & tárhely ügyintézés',
      description: 'Nem kell bajlódnod vele — mindent elintézünk helyetted.',
      image: '/assets/images/services/domainRegistration.webp'
    },
    {
      icon: 'fa-solid fa-share-nodes',
      title: 'Social media integráció',
      description: 'Facebook, Instagram, Meta — gombok, megosztás, követés, minden egy helyen.',
      image: '/assets/images/services/socialMedia.webp'
    },
    {
      icon: 'fa-solid fa-magnifying-glass',
      title: 'Alap SEO beállítások',
      description: 'Technikai keresőoptimalizálás, hogy megtaláljanak a Google-ben.',
      image: '/assets/images/services/seo.webp'
    },
    {
      icon: 'fa-solid fa-comments',
      title: 'Konzultáció & tanácsadás',
      description: 'Segítünk kitalálni, hogyan legyen a weboldalad hatékony és szép.',
      image: '/assets/images/services/consulting.webp'
    },
    {
      icon: 'fa-solid fa-shield-halved',
      title: 'Biztonsági beállítások',
      description: 'HTTPS, adatvédelem, GDPR-kompatibilitás — minden, ami a biztonságodhoz kell.',
      image: '/assets/images/services/cyberSecurity.webp'
    }
  ];
}
