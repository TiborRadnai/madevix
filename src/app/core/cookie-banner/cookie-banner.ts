import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CookieService } from '../cookie-service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'cookie-banner',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './cookie-banner.html',
  styleUrl: './cookie-banner.css'
})
export class CookieBanner {
  show = false;
  title = '';
  description = '';

  constructor(
    private cookieService: CookieService,
    private translate: TranslateService
  ) {
    const consent = this.cookieService.getConsent();
    this.show = Object.keys(consent).length === 0;

    this.refreshTexts();

    this.translate.onLangChange.subscribe(() => {
      this.refreshTexts();
    });
  }

  private refreshTexts(): void {
    this.title = this.translate.instant('legal.cookieBanner.title');
    this.description = this.translate.instant('legal.cookieBanner.description');
  }

  acceptAll(): void {
    this.cookieService.setConsent({
      necessary: true,
      statistics: true,
      marketing: true
    });
    this.show = false;
  }

  rejectAll(): void {
    this.cookieService.setConsent({
      necessary: true,
      statistics: false,
      marketing: false
    });
    this.show = false;
  }

  openSettings(): void {
    this.cookieService.openSettings();
  }
}
