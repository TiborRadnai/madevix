import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet, NavigationEnd, Router } from '@angular/router';
import { Navbar } from '../shared/navbar/navbar';
import { Footer } from '../shared/footer/footer';
import { TranslateModule, TranslateService } from '@ngx-translate/core'; 
import { NgIf, isPlatformBrowser } from '@angular/common'; 
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
  isBrowser = false;

  constructor(
    private router: Router,
    private translate: TranslateService,
    private cookieService: CookieService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);

    // Language
    if (this.isBrowser) {
      const savedLang = window.localStorage.getItem('nexora-lang');
      this.translate.setDefaultLang('de');
      this.translate.use(savedLang || 'de');
    } else {
      this.translate.setDefaultLang('de');
      this.translate.use('de');
    }

    // Cookie settings visibility
    if (this.isBrowser) {
      this.cookieService.settingsChanged$.subscribe(show => {
        this.showCookieSettings = show;
      });
    }

    // Language change → cookie check
    if (this.isBrowser) {
      this.translate.onLangChange.subscribe(() => {
        const consent = this.cookieService.getConsent();
        const hasConsent = Object.keys(consent).length > 0;
        const currentUrl = this.router.url;
        const isLegalPage = ['/cookies', '/privacy', '/impressum'].includes(currentUrl);

        if (!hasConsent && !isLegalPage) {
          this.cookieService.openSettings();
        }
      });
    }

    // Router events
    if (this.isBrowser) {
      this.router.events.subscribe(event => {
        if (!(event instanceof NavigationEnd)) return;

        // Analytics
        window.gtag?.('config', environment.analyticsId, {
          page_path: event.urlAfterRedirects
        });

        const url = event.urlAfterRedirects;
        const isLegalPage = ['/cookies', '/privacy', '/impressum'].includes(url);
        const consent = this.cookieService.getConsent();
        const hasConsent = Object.keys(consent).length > 0;

        if (!hasConsent && !isLegalPage) {
          this.cookieService.openSettings();
        }

        this.showNavbar = !isLegalPage;

        // Fragment scroll
        const fragment = this.router.parseUrl(url).fragment;
        if (fragment) {
          setTimeout(() => {
            const element = document.getElementById(fragment);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }, 100);
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });
    }
  }

  ngOnInit(): void {
    if (!this.isBrowser) return;

    // ESC close
    window.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        this.cookieService.closeSettings();
      }
    });

    // Consent handling
    this.handleConsent(this.cookieService.getConsent());

    this.cookieService.consentChanged$.subscribe(consent => {
      this.handleConsent(consent);
    });
  }

  private handleConsent(consent: CookieConsent): void {
    if (!this.isBrowser) return;

    // Google Analytics
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
      delete window.gtag;
      delete window.dataLayer;
    }

    // Facebook Pixel
    if (consent.marketing) {
      this.loadScript('https://connect.facebook.net/en_US/fbevents.js');
    } else {
      this.removeScript('facebook.net');
      delete window.fbq;
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
