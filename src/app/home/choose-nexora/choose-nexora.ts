import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-choose-nexora',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './choose-nexora.html',
  styleUrls: ['./choose-nexora.css']
})
export class ChooseNexora implements OnInit, OnDestroy {
  cards: { icon: string; title: string; description: string }[] = [];
  langSub!: Subscription;

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.loadCards();

    this.langSub = this.translate.onLangChange.subscribe(() => {
      this.loadCards();
    });
  }

  loadCards(): void {
    this.translate.get('choose.cards').subscribe((cards: any) => {
      this.cards = [
        {
          icon: 'fa-solid fa-scale-balanced',
          title: cards.pricing.title,
          description: cards.pricing.description
        },
        {
          icon: 'fa-solid fa-paper-plane',
          title: cards.start.title,
          description: cards.start.description
        },
        {
          icon: 'fa-solid fa-gears',
          title: cards.tech.title,
          description: cards.tech.description
        },
        {
          icon: 'fa-solid fa-palette',
          title: cards.design.title,
          description: cards.design.description
        },
        {
          icon: 'fa-solid fa-chart-line',
          title: cards.analytics.title,
          description: cards.analytics.description
        },
        {
          icon: 'fa-solid fa-robot',
          title: cards.ai.title,
          description: cards.ai.description
        }
      ];
    });
  }

  ngOnDestroy(): void {
    this.langSub?.unsubscribe();
  }
}
