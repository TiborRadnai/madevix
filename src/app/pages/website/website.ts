import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ViewportScroller } from '@angular/common';

import { Intro } from './intro/intro';
import { Process } from './process/process';
import { TechStack } from './tech-stack/tech-stack';
import { Extras } from './extras/extras';
import { Inspiration } from './inspiration/inspiration';
import { Order } from './order/order';

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
export class Website implements AfterViewInit {
  constructor(
    private route: ActivatedRoute,
    private viewportScroller: ViewportScroller
  ) {}

  ngAfterViewInit(): void {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        setTimeout(() => {
          this.viewportScroller.scrollToAnchor(fragment);
        }, 100); // kis késleltetés, hogy biztosan renderelve legyen
      }
    });
  }
}
