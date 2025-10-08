import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from '../../shared/header/header';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio',
  imports: [CommonModule, Header, TranslateModule],
  standalone: true,
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css'
})
export class Portfolio {

}
