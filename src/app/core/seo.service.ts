import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  private meta = inject(Meta);
  private title = inject(Title);
  private http = inject(HttpClient);
  private translate = inject(TranslateService);
  private platformId = inject(PLATFORM_ID);

  /**
   * Loads meta data from the i18n JSON file of the given component.
   * Example: updateMeta('home/introduction')
   */
  async updateMeta(path: string): Promise<void> {
    // SSR alatt nincs window / document, ezért itt az elején kiszállunk
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const lang = this.translate.currentLang || 'en';
    const url = `assets/i18n/${lang}/${path}.json`;

    try {
      const json: any = await firstValueFrom(this.http.get(url));

      if (!json?.meta) {
        console.warn(`No meta section found in: ${url}`);
        return;
      }

      const meta = json.meta;

      // Title
      if (meta.title) {
        this.title.setTitle(meta.title);
        this.meta.updateTag({ name: 'og:title', content: meta.title });
      }

      // Description
      if (meta.description) {
        this.meta.updateTag({ name: 'description', content: meta.description });
        this.meta.updateTag({ name: 'og:description', content: meta.description });
      }

      // OG Image
      if (meta.ogImage) {
        this.meta.updateTag({ name: 'og:image', content: meta.ogImage });
      }

      // Canonical
      if (meta.canonical) {
        this.updateCanonical(meta.canonical);
      }

    } catch (err) {
      console.error('SEO meta load error:', err);
    }
  }

  /**
   * Updates or creates the canonical link tag.
   */
  private updateCanonical(url: string): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    let link: HTMLLinkElement | null =
      document.querySelector("link[rel='canonical']");

    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }

    link.setAttribute('href', url);
  }
}
