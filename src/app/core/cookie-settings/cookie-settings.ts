import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CookieService } from '../cookie-service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'cookie-settings',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './cookie-settings.html',
  styleUrl: './cookie-settings.css'
})
export class CookieSettings implements OnInit {
  @Input() show = false;
  customizing = false;
  statisticsEnabled = false;
  marketingEnabled = false;

  constructor(private cookieService: CookieService) {}

  ngOnInit(): void {
    const consent = this.cookieService.getConsent();
    this.statisticsEnabled = !!consent.statistics;
    this.marketingEnabled = !!consent.marketing;
  }

  toggle(type: 'statistics' | 'marketing'): void {
    if (type === 'statistics') {
      this.statisticsEnabled = !this.statisticsEnabled;
    } else if (type === 'marketing') {
      this.marketingEnabled = !this.marketingEnabled;
    }
  }

  acceptAll(): void {
    this.statisticsEnabled = true;
    this.marketingEnabled = true;
    this.saveSettings();
  }

  saveSettings(): void {
    this.cookieService.setConsent({
      necessary: true,
      statistics: this.statisticsEnabled,
      marketing: this.marketingEnabled
    });
    this.cookieService.closeSettings();
  }

  close(): void {
    this.cookieService.closeSettings();
  }
}
