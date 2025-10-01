import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
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
export class Website { }

