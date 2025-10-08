import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // 🔥 Szükséges a routerLink-hez
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-closing',
  imports: [CommonModule, RouterModule, TranslateModule],
  standalone: true,
  templateUrl: './closing.html',
  styleUrl: './closing.css'
})
export class Closing {}
