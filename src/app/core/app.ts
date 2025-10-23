import { Component, OnInit } from '@angular/core';
import { RouterOutlet, NavigationEnd, Router } from '@angular/router';
import { Navbar } from '../shared/navbar/navbar';
import { Footer } from '../shared/footer/footer';
import { TranslateModule, TranslateService } from '@ngx-translate/core'; 
import { NgIf } from '@angular/common'; 
import { CookieService } from './cookie-service'; 
import { CookieSettings } from './cookie-settings/cookie-settings';
import { environment } from '../../environments/environment';
import type { CookieConsent } from './cookie-service';

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
  }
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    Navbar,
    Footer,
    TranslateModule,
    NgIf,
    CookieSettings 
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  showNavbar = true;
  showCookieSettings = false;
  private isBrowser = typeof window !== 'undefined';

  constructor(
    private router: Router,
    private translate: TranslateService,
    private cookieService: CookieService
  ) {
    const savedLang = this.isBrowser ? localStorage.getItem('nexora-lang') : null;
    const lang = savedLang || 'de';

    translate.setDefaultLang('de');
    translate.use(lang);

    this.cookieService.settingsChanged$.subscribe(show => {
      this.showCookieSettings = show;
    });

  this.translate.onLangChange.subscribe(() => {
    const consent = this.cookieService.getConsent();
    const hasConsent = Object.keys(consent).length > 0;
    const currentUrl = this.router.url;
    const isLegalPage = ['/cookies', '/privacy', '/impressum'].includes(currentUrl);

    if (!hasConsent && !isLegalPage) {
      this.cookieService.openSettings();
    }
  });

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const url = event.urlAfterRedirects;
        const isLegalPage = ['/cookies', '/privacy', '/impressum'].includes(url);
        const consent = this.cookieService.getConsent();
        const hasConsent = Object.keys(consent).length > 0;

        if (!hasConsent && !isLegalPage) {
          this.cookieService.openSettings();
        }

        this.showNavbar = !isLegalPage;

        const fragment = this.router.parseUrl(url).fragment;
        if (fragment && this.isBrowser) {
          setTimeout(() => {
            const element = document.getElementById(fragment);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }, 100);
        } else if (this.isBrowser) {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    });
  }

  ngOnInit(): void {
    if (!this.isBrowser) return;

    window.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        this.cookieService.closeSettings();
      }
    });

    this.handleConsent(this.cookieService.getConsent());

    this.cookieService.consentChanged$.subscribe(consent => {
      this.handleConsent(consent);
    });
  }

  private handleConsent(consent: CookieConsent): void {
    if (!this.isBrowser) return;

    if (consent.statistics) {
      this.loadScript(`https://www.googletagmanager.com/gtag/js?id=${environment.analyticsId}`);
      window.dataLayer = window.dataLayer || [];
      window.gtag = (...args: any[]) => {
        (window.dataLayer as any[]).push(args);
      };
      window.gtag('js', new Date());
      window.gtag('config', environment.analyticsLegacyId);
    } else {
      this.removeScript('googletagmanager.com');
      if ('gtag' in window) delete window.gtag;
      if ('dataLayer' in window) delete window.dataLayer;
    }

    if (consent.marketing) {
      this.loadScript('https://connect.facebook.net/en_US/fbevents.js');
    } else {
      this.removeScript('facebook.net');
      if ('fbq' in window) delete window.fbq;
    }
  }

  private loadScript(src: string): void {
    if (!this.isBrowser) return;

    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
  }

  private removeScript(srcContains: string): void {
    if (!this.isBrowser) return;

    const scripts = document.querySelectorAll('script');
    scripts.forEach(script => {
      if (script.src.includes(srcContains)) {
        script.remove();
      }
    });
  }

  closeCookieSettings(): void {
    this.cookieService.closeSettings();
  }
}
