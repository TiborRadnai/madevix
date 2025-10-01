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
      description: 'Modern, gyors és reszponzív weboldalak — egyedi fejlesztéssel vagy sablonos megoldással, ahogy neked a legjobb. A technológiát mindig az igényeidhez igazítjuk.',
      image: 'assets/images/services/webDevelopment.webp'
    },
    {
      icon: 'fa-solid fa-mobile-screen-button',
      title: 'Mobiloptimalizálás',
      description: 'Minden eszközön jól működő, letisztult felhasználói élmény — telefonon, tableten, laptopon.',
      image: 'assets/images/services/responsivity.webp'
    },
    {
      icon: 'fa-solid fa-chart-line',
      title: 'Teljesítménymérés',
      description: 'Látogatók, viselkedés, keresések — mérjük, elemezzük, és segítünk javítani az oldal teljesítményét.',
      image: 'assets/images/services/searchEngineOptimalisation.webp'
    },
    {
      icon: 'fa-solid fa-image',
      title: 'Képszerkesztés és prémium tartalom',
      description: 'Minőségi képek, sablonok és grafikai elemek — igény szerint szerkesztve, hogy az oldalad vizuálisan is meggyőző legyen.',
      image: 'assets/images/services/photoEditing.webp'
    },
    {
      icon: 'fa-solid fa-globe',
      title: 'Domain és tárhely ügyintézés',
      description: 'Nem kell bajlódnod vele — mindent elintézünk helyetted, a technikai részletektől a beállításokig.',
      image: 'assets/images/services/domainRegistration.webp'
    },
    {
      icon: 'fa-solid fa-share-nodes',
      title: 'Social media integráció',
      description: 'Facebook, Instagram, LinkedIn — gombok, megosztás, követés, minden egy helyen.',
      image: 'assets/images/services/socialMedia.webp'
    },
    {
      icon: 'fa-solid fa-magnifying-glass',
      title: 'Alap SEO beállítások',
      description: 'Technikai keresőoptimalizálás, hogy megtaláljanak a Google-ben — már az induláskor.',
      image: 'assets/images/services/seo.webp'
    },
    {
      icon: 'fa-solid fa-comments',
      title: 'Konzultáció & tanácsadás',
      description: 'Segítünk kitalálni, hogyan legyen a weboldalad hatékony, szép és célratörő.',
      image: 'assets/images/services/consulting.webp'
    },
    {
      icon: 'fa-solid fa-shield-halved',
      title: 'Biztonsági beállítások',
      description: 'HTTPS, adatvédelem, GDPR-kompatibilitás — minden, ami a biztonságodhoz és a nyugalomhoz kell.',
      image: 'assets/images/services/cyberSecurity.webp'
    }
  ];
}
