import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { isPlatformServer } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class SsrMetaResolver {
  private platformId = inject(PLATFORM_ID);
  private meta = inject(Meta);
  private title = inject(Title);

  apply(route: ActivatedRoute, lang: string) {
    if (!isPlatformServer(this.platformId)) return;

    const metaData = route.snapshot.data['meta']?.[lang];
    if (!metaData) return;

    // --- TITLE ---
    this.title.setTitle(metaData.title);

    // --- DESCRIPTION ---
    this.meta.updateTag({
      name: 'description',
      content: metaData.description
    });

    // --- OG TAGS ---
    this.meta.updateTag({
      property: 'og:title',
      content: metaData.title
    });

    this.meta.updateTag({
      property: 'og:description',
      content: metaData.description
    });

    this.meta.updateTag({
      property: 'og:image',
      content: metaData.ogImage
    });

    // IMPORTANT:
    // canonical + hreflang NEM kerül ide,
    // mert Angular SSR nem tud <link> tageket generálni.
    // Ezeket a postbuild-seo.js fogja beírni a HTML-be.
  }
}
