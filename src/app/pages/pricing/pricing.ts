import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cta } from './cta/cta';
import { Closing } from './closing/closing';
import { Header } from './header/header';


@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule, Cta, Closing, Header],
  templateUrl: './pricing.html',
  styleUrls: ['./pricing.css']
})
export class Pricing {}
