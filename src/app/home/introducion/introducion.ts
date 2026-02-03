import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { SeoService } from '../../core/seo.service';

@Component({
  selector: 'app-introducion',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './introducion.html',
  styleUrl: './introducion.css'
})
export class Introducion implements OnInit {

  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.updateMeta('home/introduction');
  }
}
