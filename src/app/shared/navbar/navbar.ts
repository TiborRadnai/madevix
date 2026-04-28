import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule, TranslateModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  isMenuOpen = false;
  currentLang = 'de';
  availableLangs = ['de', 'en', 'hu'];
  isBrowser = false;

  constructor(
    private translate: TranslateService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);

    if (this.isBrowser) {
      const savedLang = window.localStorage.getItem('nexora-lang');
      this.currentLang = savedLang || 'de';
      this.translate.use(this.currentLang);
    } else {
      this.translate.use('de');
    }
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  switchLanguage(lang: string): void {
    this.currentLang = lang;
    this.translate.use(lang);

    if (this.isBrowser) {
      window.localStorage.setItem('nexora-lang', lang);
    }
  }
}
