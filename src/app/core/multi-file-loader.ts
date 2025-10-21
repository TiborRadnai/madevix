import { TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, map } from 'rxjs';

export class MultiFileTranslateLoader implements TranslateLoader {
  constructor(private http: HttpClient) {}

  getTranslation(lang: string): Observable<any> {
    const basePath = `assets/i18n/${lang}/`;

    // Fájlok listája, amit betöltünk (bővíthető)
    const files = [
      'shared.json',
      'footer.json',
      'legal.json',
      'home/header.json',
      'home/choose-nexora.json',
      'home/introduction.json',
      'home/make-website.json',
      'home/process.json',
      'home/references.json',
      'home/services.json',
      'pages/website/intro.json',
      'pages/website/extras.json',
      'pages/website/inspiration.json',
      'pages/website/order.json',
      'pages/website/process.json',
      'pages/website/tech-stack.json',
      'pages/pricing/pricing.json',
      'pages/pricing/cta.json',
      'pages/pricing/closing.json',
      'pages/portfolio/portfolio.json',
      'pages/contact/contact.json',
      'pages/contact/form.json',
      'pages/contact/location.json',
      'pages/contact/direct.json',
      'pages/contact/closing.json'

      // ide jöhetnek a pages fájlok is, ha kell
    ];

    const requests = files.map(file =>
      this.http.get(`${basePath}${file}`)
    );

    return forkJoin(requests).pipe(
      map(responses => {
        return responses.reduce((acc, curr) => {
          return { ...acc, ...curr };
        }, {});
      })
    );
  }
}
