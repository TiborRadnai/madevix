import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from '../shared/navbar/navbar';
import { Footer } from '../shared/footer/footer';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core'; // ⬅️ ez kell!

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    Navbar,
    Footer,
    TranslateModule // ⬅️ ez a kulcs!
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
constructor(private router: Router, private translate: TranslateService) {
  const isBrowser = typeof window !== 'undefined';

  const savedLang = isBrowser ? localStorage.getItem('nexora-lang') : null;
  const lang = savedLang || 'de';

  translate.setDefaultLang('de');
  translate.use(lang);

this.router.events.subscribe(event => {
  if (event instanceof NavigationEnd) {
    const fragment = this.router.parseUrl(event.urlAfterRedirects).fragment;

    if (fragment) {
      setTimeout(() => {
        const element = isBrowser ? document.getElementById(fragment) : null;
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      if (isBrowser) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  }
});
}
}
