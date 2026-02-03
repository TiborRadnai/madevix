import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ViewportScroller } from '@angular/common';

import { Intro } from './intro/intro';
import { Process } from './process/process';
import { TechStack } from './tech-stack/tech-stack';
import { Extras } from './extras/extras';
import { Inspiration } from './inspiration/inspiration';
import { Order } from './order/order';
import { SeoService } from '../../core/seo.service';

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
    private seo: SeoService
  ) {}

  ngOnInit(): void {
    this.seo.updateMeta('website');
  }

  ngAfterViewInit(): void {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        setTimeout(() => {
          this.viewportScroller.scrollToAnchor(fragment);
        }, 100);
      }
    });
  }
}
