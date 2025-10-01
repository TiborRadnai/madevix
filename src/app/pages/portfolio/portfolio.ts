import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from './header/header';

@Component({
  selector: 'app-portfolio',
  imports: [CommonModule, Header],
  standalone: true,
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css'
})
export class Portfolio {

}
