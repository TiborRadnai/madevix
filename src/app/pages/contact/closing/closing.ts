import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // 🔥 Szükséges a routerLink-hez

@Component({
  selector: 'app-closing',
  imports: [CommonModule, RouterModule],
  standalone: true,
  templateUrl: './closing.html',
  styleUrl: './closing.css'
})
export class Closing {}
