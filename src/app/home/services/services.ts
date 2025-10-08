import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FadeOnScrollDirective } from './fade-on-scroll.directive';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, FadeOnScrollDirective, TranslateModule],
  templateUrl: './services.html',
  styleUrl: './services.css'
})
export class Services {
  services = [
    {
      icon: 'fa-solid fa-laptop-code',
      title: 'services.items.web.title',
      description: 'services.items.web.description',
      image: 'assets/images/services/webDevelopment.webp'
    },
    {
      icon: 'fa-solid fa-mobile-screen-button',
      title: 'services.items.mobile.title',
      description: 'services.items.mobile.description',
      image: 'assets/images/services/responsivity.webp'
    },
    {
      icon: 'fa-solid fa-chart-line',
      title: 'services.items.analytics.title',
      description: 'services.items.analytics.description',
      image: 'assets/images/services/searchEngineOptimalisation.webp'
    },
    {
      icon: 'fa-solid fa-image',
      title: 'services.items.design.title',
      description: 'services.items.design.description',
      image: 'assets/images/services/photoEditing.webp'
    },
    {
      icon: 'fa-solid fa-globe',
      title: 'services.items.domain.title',
      description: 'services.items.domain.description',
      image: 'assets/images/services/domainRegistration.webp'
    },
    {
      icon: 'fa-solid fa-share-nodes',
      title: 'services.items.social.title',
      description: 'services.items.social.description',
      image: 'assets/images/services/socialMedia.webp'
    },
    {
      icon: 'fa-solid fa-magnifying-glass',
      title: 'services.items.seo.title',
      description: 'services.items.seo.description',
      image: 'assets/images/services/seo.webp'
    },
    {
      icon: 'fa-solid fa-comments',
      title: 'services.items.consulting.title',
      description: 'services.items.consulting.description',
      image: 'assets/images/services/consulting.webp'
    },
    {
      icon: 'fa-solid fa-shield-halved',
      title: 'services.items.security.title',
      description: 'services.items.security.description',
      image: 'assets/images/services/cyberSecurity.webp'
    }
  ];
}

