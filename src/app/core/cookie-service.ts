import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface CookieConsent {
  necessary?: boolean;
  statistics?: boolean;
  marketing?: boolean;
}

@Injectable({ providedIn: 'root' })
export class CookieService {
  private consentKey = 'madevix-cookie-consent';
  private settingsVisible = new BehaviorSubject<boolean>(false);
  private consentChangedSubject = new BehaviorSubject<CookieConsent>(this.getConsent());
  consentChanged$ = this.consentChangedSubject.asObservable();

  settingsChanged$ = this.settingsVisible.asObservable();

  getConsent(): CookieConsent {
    if (typeof window === 'undefined') return {};
    const raw = localStorage.getItem(this.consentKey);
    return raw ? JSON.parse(raw) : {};
  }

  setConsent(consent: CookieConsent) {
    if (typeof window === 'undefined') return;
    localStorage.setItem(this.consentKey, JSON.stringify(consent));

    const log = JSON.parse(localStorage.getItem('madevix-consent-log') || '[]');
    log.push({ timestamp: Date.now(), consent });
    localStorage.setItem('madevix-consent-log', JSON.stringify(log));

    this.consentChangedSubject.next(consent);
  }


  hasConsent(type: keyof CookieConsent): boolean {
    const consent = this.getConsent();
    return !!consent[type];
  }

  clearConsent() {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(this.consentKey);
}

  openSettings() {
    this.settingsVisible.next(true);
  }

  closeSettings() {
    console.log('CookieService: closing settings');
    this.settingsVisible.next(false);
  }
}
