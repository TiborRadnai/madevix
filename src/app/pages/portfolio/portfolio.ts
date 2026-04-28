import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Header } from '../../shared/header/header';
import { TranslateModule } from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router';
import { SsrMetaResolver } from '../../core/ssr-meta-resolver';
import { BrowserMetaService } from '../../core/browser-meta.service';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, Header, TranslateModule],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css'
})
export class Portfolio implements OnInit {

  constructor(
    private route: ActivatedRoute,
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
}
