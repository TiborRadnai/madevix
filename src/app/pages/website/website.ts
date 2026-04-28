import { Component, OnInit, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser, ViewportScroller } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { Intro } from './intro/intro';
import { Process } from './process/process';
import { TechStack } from './tech-stack/tech-stack';
import { Extras } from './extras/extras';
import { Inspiration } from './inspiration/inspiration';
import { Order } from './order/order';
import { SsrMetaResolver } from '../../core/ssr-meta-resolver';
import { BrowserMetaService } from '../../core/browser-meta.service';

@Component({
  selector: 'app-website',
  standalone: true,
  imports: [
    CommonModule,
    Intro,
    Process,
    TechStack,
    Extras,
    Inspiration,
    Order
  ],
  templateUrl: './website.html',
  styleUrl: './website.css'
})
export class Website implements OnInit, AfterViewInit {

  constructor(
    private route: ActivatedRoute,
    private viewportScroller: ViewportScroller,
    private ssrMeta: SsrMetaResolver,
    private browserMeta: BrowserMetaService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    const lang = this.route.snapshot.url[0]?.path || 'de';

    // SSR meta beégetése
    this.ssrMeta.apply(this.route, lang);

    // Browser meta frissítése hydration után
    this.browserMeta.apply(this.route, lang);
  }

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        setTimeout(() => {
          this.viewportScroller.scrollToAnchor(fragment);
        }, 100);
      }
    });
  }
}

