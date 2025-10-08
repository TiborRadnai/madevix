import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

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

  constructor(private translate: TranslateService) {
    const isBrowser = typeof window !== 'undefined';

    if (isBrowser) {
      const savedLang = localStorage.getItem('nexora-lang');
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

    if (typeof window !== 'undefined') {
      localStorage.setItem('nexora-lang', lang);
    }
  }
}
