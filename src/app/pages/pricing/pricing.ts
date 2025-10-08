import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Cta } from './cta/cta';
import { Closing } from './closing/closing';
import { Header } from '../../shared/header/header';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule,RouterModule, TranslateModule, Cta, Closing, Header],
  templateUrl: './pricing.html',
  styleUrls: ['./pricing.css']
})
export class Pricing {}
