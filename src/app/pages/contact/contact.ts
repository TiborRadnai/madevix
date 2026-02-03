import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from '../../shared/header/header';
import { ContactForm } from './form/form';
import { Direct } from './direct/direct';
import { Location } from './location/location';
import { Closing } from './closing/closing';
import { TranslateModule } from '@ngx-translate/core';
import { SeoService } from '../../core/seo.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, TranslateModule, Header, ContactForm, Direct, Location, Closing],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact implements OnInit {

  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.updateMeta('contact');
  }
}
