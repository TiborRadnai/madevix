import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class BrowserMetaService {
  private platformId = inject(PLATFORM_ID);
  private meta = inject(Meta);
  private title = inject(Title);

  apply(route: ActivatedRoute, lang: string) {
    if (!isPlatformBrowser(this.platformId)) return;

    const metaData = route.snapshot.data['meta']?.[lang];
    if (!metaData) return;

    this.title.setTitle(metaData.title);
    this.meta.updateTag({ name: 'description', content: metaData.description });
  }
}
