import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from '../../shared/header/header';
import { TranslateModule } from '@ngx-translate/core';
import { SeoService } from '../../core/seo.service';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, Header, TranslateModule],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css'
})
export class Portfolio implements OnInit {

  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.updateMeta('portfolio');
  }
}
