import { Component, OnInit, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { ScrollSmootherService } from './services/scroll-smoother.service';
import { Header } from './header/header';
import { Introducion } from './introducion/introducion';
import { ChooseNexora } from './choose-nexora/choose-nexora';
import { References } from './references/references';
import { Process } from './process/process';
import { Services } from './services/services';
import { MakeWebsite } from './make-website/make-website';
import { ActivatedRoute } from '@angular/router';
import { SsrMetaResolver } from '../core/ssr-meta-resolver';
import { BrowserMetaService } from '../core/browser-meta.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    Header,
    Introducion,
    ChooseNexora,
    References,
    Process,
    Services,
    MakeWebsite
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {

  private platformId = inject(PLATFORM_ID);

  constructor(
    private scrollSmoother: ScrollSmootherService,
    private route: ActivatedRoute,
    private ssrMeta: SsrMetaResolver,
    private browserMeta: BrowserMetaService,
  ) {}


  ngOnInit(): void {
    // Nyelv meghatározása az URL alapján (ha nincs, fallback: 'de')
    const lang = this.route.snapshot.url[0]?.path || 'de';

    // SSR meta beégetése
    this.ssrMeta.apply(this.route, lang);

    // Browser meta frissítése hydration után
    this.browserMeta.apply(this.route, lang);

    // Smooth scroll csak böngészőben
    if (isPlatformBrowser(this.platformId)) {
      this.scrollSmoother.initGlobalSmoothScroll();
    }
  }
}
